/**
 * Copies the latin subset of the three variable fonts from their
 * @fontsource-variable packages into public/fonts/.
 *
 * Only wght-normal latin ships: es-HN text lives inside U+0000-00FF, so the
 * cyrillic/greek/vietnamese subsets would be dead weight in dist/. Latin-ext
 * and italics are added here when a section needs them.
 *
 * Run after upgrading any @fontsource-variable package: `npm run sync-fonts`.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'fonts');

const fonts = [
	['@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2', 'plus-jakarta-sans-latin-variable.woff2'],
	['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', 'inter-latin-variable.woff2'],
	['@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2', 'jetbrains-mono-latin-variable.woff2'],
];

mkdirSync(outDir, { recursive: true });

for (const [from, to] of fonts) {
	const source = join(root, 'node_modules', from);
	copyFileSync(source, join(outDir, to));
	console.log(`synced ${to}`);
}
