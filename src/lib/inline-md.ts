// Tiny inline-markdown helper for prose strings stored in .ts and .md files.
// Supports:
//   **bold**          -> <strong>bold</strong>
//   *italic* or _it_  -> <em>...</em>
//   `code`            -> <code>...</code>
//   [text](url)       -> <a href="url">text</a>
// Anything else is escaped, so it's safe to render with `set:html`.

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function inlineMd(input: string): string {
  let s = escapeHtml(input);
  // Links — process first so the inner text isn't mangled by other rules.
  s = s.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    '<a href="$2" class="text-accent underline-offset-4 hover:underline">$1</a>',
  );
  // Bold (must come before italic so ** isn't eaten as two *).
  s = s.replace(/\*\*([^*]+?)\*\*/g, '<strong class="font-semibold text-[color:var(--text)]">$1</strong>');
  // Italic — single * or _ pairs.
  s = s.replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, '$1<em>$2</em>');
  s = s.replace(/(^|[^_])_([^_\n]+?)_(?!_)/g, '$1<em>$2</em>');
  // Inline code.
  s = s.replace(/`([^`]+?)`/g, '<code class="rounded bg-white/10 px-1.5 py-0.5 text-[0.92em]">$1</code>');
  return s;
}
