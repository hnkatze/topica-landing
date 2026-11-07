/**
 * Header navigation behaviour.
 *
 * Two jobs, no library: the mobile disclosure the Stitch export is missing, and
 * active-anchor highlighting for the section links. Both are progressive: the
 * markup works without JS (the panel is simply never opened), and the panel
 * closes on link click, on Escape and when the viewport reaches the desktop
 * breakpoint, where the links are visible again in the header itself.
 */

const NAV_ROOT = '[data-nav]';
const TOGGLE = '[data-nav-toggle]';
const PANEL = '[data-nav-panel]';
const LINK = '[data-nav-link]';

/** Matches Tailwind's `lg`. Keep in sync with the `lg:hidden` on the toggle. */
const DESKTOP_QUERY = '(min-width: 64rem)';

/** One binding per header: re-running the boot tears the previous one down. */
const bindings = new WeakMap<HTMLElement, () => void>();

export function setupNav(): () => void {
	const header = document.querySelector<HTMLElement>(NAV_ROOT);
	if (!header) return () => {};

	bindings.get(header)?.();

	const toggle = header.querySelector<HTMLButtonElement>(TOGGLE);
	const panel = header.querySelector<HTMLElement>(PANEL);
	const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(LINK));

	const setOpen = (open: boolean): void => {
		if (!toggle || !panel) return;
		toggle.setAttribute('aria-expanded', String(open));
		toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
		panel.hidden = !open;
	};

	const close = (): void => setOpen(false);

	const onToggle = (): void => setOpen(toggle?.getAttribute('aria-expanded') !== 'true');

	const onPanelClick = (event: Event): void => {
		if (event.target instanceof Element && event.target.closest('a')) close();
	};

	const onKeydown = (event: KeyboardEvent): void => {
		if (!toggle || event.key !== 'Escape') return;
		if (toggle.getAttribute('aria-expanded') !== 'true') return;
		close();
		toggle.focus();
	};

	/* Leaving the mobile layout must not leave a stray open panel behind. */
	const desktop = window.matchMedia(DESKTOP_QUERY);
	const onBreakpoint = (event: MediaQueryListEvent): void => {
		if (event.matches) close();
	};

	/* Active section → `aria-current` on the matching link. Anchors that do not
	 * belong to a section (the CTAs) simply never light up. */
	const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
	const observer =
		'IntersectionObserver' in window && links.length > 0 && sections.length > 0
			? new IntersectionObserver(
					(entries) => {
						for (const entry of entries) {
							if (!entry.isIntersecting) continue;
							const current = `#${entry.target.id}`;
							for (const link of links) {
								if (link.hash === current) link.setAttribute('aria-current', 'true');
								else link.removeAttribute('aria-current');
							}
						}
					},
					{ rootMargin: '-45% 0px -50% 0px' },
				)
			: null;

	if (observer) sections.forEach((section) => observer?.observe(section));

	toggle?.addEventListener('click', onToggle);
	panel?.addEventListener('click', onPanelClick);
	links.forEach((link) => link.addEventListener('click', close));
	document.addEventListener('keydown', onKeydown);
	desktop.addEventListener('change', onBreakpoint);

	const cleanup = (): void => {
		toggle?.removeEventListener('click', onToggle);
		panel?.removeEventListener('click', onPanelClick);
		links.forEach((link) => link.removeEventListener('click', close));
		document.removeEventListener('keydown', onKeydown);
		desktop.removeEventListener('change', onBreakpoint);
		observer?.disconnect();
		bindings.delete(header);
	};

	bindings.set(header, cleanup);
	return cleanup;
}

let cleanup: (() => void) | undefined;

function boot(): void {
	cleanup?.();
	cleanup = setupNav();
}

document.addEventListener('astro:page-load', boot);

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
	boot();
}
