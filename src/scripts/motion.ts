/**
 * Motion boot: one-shot reveal for `[data-reveal]` elements.
 *
 * Strategy (tier 2 of the animation ladder): a single IntersectionObserver,
 * one documented cleanup, and a reduced-motion path that shows everything
 * immediately. Nothing else on the page animates from JS.
 */

const REVEAL_SELECTOR = '[data-reveal]';
const READY_CLASS = 'motion-ready';

export function setupReveal(selector: string = REVEAL_SELECTOR): () => void {
	const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
	if (targets.length === 0) return () => {};

	const supportsObserver = 'IntersectionObserver' in window;
	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReduced || !supportsObserver) {
		targets.forEach((el) => el.classList.add('is-visible'));
		document.documentElement.classList.remove(READY_CLASS);
		return () => {};
	}

	document.documentElement.classList.add(READY_CLASS);

	const observer = new IntersectionObserver(
		(entries, obs) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-visible');
				obs.unobserve(entry.target);
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
	);

	targets.forEach((el) => observer.observe(el));

	return () => {
		observer.disconnect();
	};
}

let cleanup: (() => void) | undefined;

function boot(): void {
	cleanup?.();
	cleanup = setupReveal();
}

// `astro:page-load` covers ClientRouter navigations; the readyState branch
// covers the plain static build. `cleanup` makes a double fire harmless.
document.addEventListener('astro:page-load', boot);

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
	boot();
}
