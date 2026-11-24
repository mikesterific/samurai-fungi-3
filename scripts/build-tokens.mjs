// Compile design-system/tokens.json into site/tokens.css (CSS custom properties + type classes).
// Usage: node scripts/build-tokens.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(readFileSync(resolve(root, 'design-system/tokens.json'), 'utf8'));
const themes = tokens.color.themes.map((t) => t.id);
const first = themes[0];

const value = (v, theme) => {
  const raw = typeof v === 'string' ? v : (v[theme] ?? v[first]);
  return raw.replace(/\{([^}]+)\}/g, 'var(--$1)');
};
const themed = [...tokens.color.tokens, ...(tokens.shadow?.tokens ?? [])];

const out = [`/* ${tokens.name} — generated from tokens.json by scripts/build-tokens.mjs. Do not edit. */`];
themes.forEach((theme, i) => {
  const sel = i === 0 ? `:root, [data-theme="${theme}"]` : `[data-theme="${theme}"]`;
  out.push(`${sel} {`);
  for (const t of themed) {
    if (i > 0 && typeof t.value === 'string') continue;
    out.push(`  --${t.name}: ${value(t.value, theme)};`);
  }
  out.push('}');
});
out.push(':root {');
for (const fam of ['spacing', 'radius']) for (const t of tokens[fam].tokens) out.push(`  --${t.name}: ${t.value};`);
for (const [k, v] of Object.entries(tokens.type.families)) out.push(`  --font-${k}: ${v};`);
out.push('}');
for (const g of tokens.type.groups) {
  for (const s of g.styles) {
    const decl = [
      `font-family: var(--font-${s.family ?? g.family})`,
      `font-size: ${s.fontSize}`,
      `line-height: ${s.lineHeight}`,
      `font-weight: ${s.fontWeight}`,
      s.letterSpacing && `letter-spacing: ${s.letterSpacing}`,
      s.fontStyle && `font-style: ${s.fontStyle}`,
    ].filter(Boolean);
    out.push(`.${s.name} { ${decl.join('; ')}; }`);
  }
}
mkdirSync(resolve(root, 'site'), { recursive: true });
writeFileSync(resolve(root, 'site/tokens.css'), out.join('\n') + '\n');
console.log('wrote site/tokens.css');
