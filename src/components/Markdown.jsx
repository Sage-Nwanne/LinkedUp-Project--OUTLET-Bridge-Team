// Minimal markdown renderer tailored to the OUTLET docs.
// Supports: # / ## / ### / #### headings, paragraphs, - / * list items,
// > blockquotes, --- horizontal rule, blank-line paragraph breaks,
// inline `code`, **bold**, *italic*. No HTML passthrough (safe by default).

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

function renderInline(text, keyBase) {
  // Tokenize: `code`, **bold**, *italic*. Greedy left-to-right.
  const out = [];
  const re = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)/g;
  let last = 0;
  let m;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const token = m[0];
    if (token.startsWith('`')) {
      out.push(<code key={`${keyBase}-c-${i}`}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith('**')) {
      out.push(<strong key={`${keyBase}-b-${i}`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith('*')) {
      out.push(<em key={`${keyBase}-i-${i}`}>{token.slice(1, -1)}</em>);
    }
    last = m.index + token.length;
    i += 1;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function parse(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i += 1; continue; }

    if (/^---\s*$/.test(line)) {
      blocks.push({ type: 'hr' });
      i += 1; continue;
    }

    const h = /^(#{1,4})\s+(.+)$/.exec(line);
    if (h) {
      blocks.push({ type: 'h', level: h[1].length, text: h[2].trim() });
      i += 1; continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''));
        i += 1;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quoteLines = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i += 1;
      }
      blocks.push({ type: 'quote', text: quoteLines.join(' ') });
      continue;
    }

    // Paragraph: collect until blank line or block-level marker.
    const para = [line];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4})\s+/.test(lines[i]) &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^---\s*$/.test(lines[i])
    ) {
      para.push(lines[i]);
      i += 1;
    }
    blocks.push({ type: 'p', text: para.join(' ') });
  }
  return blocks;
}

export function extractHeadings(source, maxLevel = 2) {
  return parse(source)
    .filter((b) => b.type === 'h' && b.level <= maxLevel)
    .map((b) => ({ level: b.level, text: b.text, id: slug(b.text) }));
}

export default function Markdown({ source }) {
  const blocks = parse(source);
  return (
    <div className="md">
      {blocks.map((b, idx) => {
        const k = `b-${idx}`;
        if (b.type === 'hr') return <hr key={k} />;
        if (b.type === 'h') {
          const Tag = `h${b.level}`;
          return (
            <Tag key={k} id={slug(b.text)} className={`md-h md-h-${b.level}`}>
              {renderInline(b.text, k)}
            </Tag>
          );
        }
        if (b.type === 'ul') {
          return (
            <ul key={k} className="md-ul">
              {b.items.map((it, j) => (
                <li key={`${k}-li-${j}`}>{renderInline(it, `${k}-${j}`)}</li>
              ))}
            </ul>
          );
        }
        if (b.type === 'quote') {
          return (
            <blockquote key={k} className="md-quote">
              {renderInline(b.text, k)}
            </blockquote>
          );
        }
        return (
          <p key={k} className="md-p">
            {renderInline(b.text, k)}
          </p>
        );
      })}
    </div>
  );
}

export { slug };
