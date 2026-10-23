import React from 'react';
import Link from 'next/link';

interface MarkdownRendererProps {
  content: string;
}

/**
 * 轻量、安全、语义化的 Markdown 渲染器
 * 原生支持标题 H1-H4、段落、列表、代码块、内联代码、表格、引用块与站内链接
 */
export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];

  let i = 0;
  let keyCounter = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // 1. 空行
    if (!line) {
      i++;
      continue;
    }

    // 2. 代码块
    if (line.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // 跳过闭合的三反引号
      elements.push(
        <div key={keyCounter++} className="my-6 rounded-xl overflow-hidden border border-cosmic-border bg-cosmic-surface/90 text-xs font-mono">
          <pre className="p-4 overflow-x-auto text-electricCyan/90 leading-relaxed">
            <code>{codeLines.join('\n')}</code>
          </pre>
        </div>
      );
      continue;
    }

    // 3. 表格解析 (| Header 1 | Header 2 |)
    if (line.startsWith('|') && line.endsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerCols = tableLines[0]
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim());

        const bodyRows = tableLines.slice(2).map((rowStr) =>
          rowStr
            .split('|')
            .slice(1, -1)
            .map((c) => c.trim())
        );

        elements.push(
          <div key={keyCounter++} className="my-6 overflow-x-auto rounded-xl border border-cosmic-border/60">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-cosmic-surface/60">
              <thead>
                <tr className="border-b border-cosmic-border bg-cosmic-card text-doodleWhite font-bold">
                  {headerCols.map((th, thIdx) => (
                    <th key={thIdx} className="p-3 font-semibold">
                      {renderInlineFormatting(th)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="border-b border-cosmic-border/30 hover:bg-cosmic-card/40 transition-colors"
                  >
                    {row.map((td, tdIdx) => (
                      <td key={tdIdx} className="p-3 text-mutedText leading-relaxed">
                        {renderInlineFormatting(td)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // 4. 标题 H1 ~ H4
    if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={keyCounter++} className="text-base font-bold text-doodleWhite mt-6 mb-2">
          {renderInlineFormatting(line.replace('#### ', ''))}
        </h4>
      );
      i++;
      continue;
    }
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={keyCounter++} className="text-lg font-bold text-doodleWhite mt-8 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-electricCyan" />
          <span>{renderInlineFormatting(line.replace('### ', ''))}</span>
        </h3>
      );
      i++;
      continue;
    }
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={keyCounter++} className="text-xl sm:text-2xl font-bold text-doodleWhite mt-10 mb-4 pb-2 border-b border-cosmic-border/60">
          {renderInlineFormatting(line.replace('## ', ''))}
        </h2>
      );
      i++;
      continue;
    }
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={keyCounter++} className="text-2xl sm:text-3xl font-extrabold text-doodleWhite mt-4 mb-6">
          {renderInlineFormatting(line.replace('# ', ''))}
        </h1>
      );
      i++;
      continue;
    }

    // 5. 引用块 (> Quote)
    if (line.startsWith('> ')) {
      const quoteLines: string[] = [line.replace('> ', '')];
      i++;
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        quoteLines.push(lines[i].trim().replace('> ', ''));
        i++;
      }
      elements.push(
        <blockquote
          key={keyCounter++}
          className="my-5 p-4 rounded-xl bg-starlightPurple/10 border-l-4 border-starlightPurple text-xs sm:text-sm text-doodleWhite/90 leading-relaxed italic"
        >
          {quoteLines.map((ql, qIdx) => (
            <p key={qIdx} className={qIdx > 0 ? 'mt-2' : ''}>
              {renderInlineFormatting(ql)}
            </p>
          ))}
        </blockquote>
      );
      continue;
    }

    // 6. 无序列表 (- Item)
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      elements.push(
        <ul key={keyCounter++} className="my-4 space-y-2 list-none text-xs sm:text-sm text-mutedText">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
              <span className="text-electricCyan mt-1 text-xs">✦</span>
              <div>{renderInlineFormatting(item)}</div>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 7. 有序列表 (1. Item)
    if (/^\d+\.\s+/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      elements.push(
        <ol key={keyCounter++} className="my-4 space-y-2 list-none text-xs sm:text-sm text-mutedText">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
              <span className="font-mono text-xs font-bold text-starlightYellow mt-0.5">
                {idx + 1}.
              </span>
              <div>{renderInlineFormatting(item)}</div>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // 8. 分隔线 (---)
    if (line === '---' || line === '***') {
      elements.push(<hr key={keyCounter++} className="my-8 border-cosmic-border/60" />);
      i++;
      continue;
    }

    // 9. 常规段落
    elements.push(
      <p key={keyCounter++} className="my-4 text-sm sm:text-base text-mutedText leading-relaxed">
        {renderInlineFormatting(line)}
      </p>
    );
    i++;
  }

  return <div className="markdown-body space-y-1">{elements}</div>;
}

/** 格式化内联粗体、行内代码与链接 */
function renderInlineFormatting(text: string): React.ReactNode {
  // 简易正则替换 [text](url), **bold**, `code`
  const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|`.*?`)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;

    // 链接 [label](url)
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (match) {
        const [, label, url] = match;
        const isInternal = url.startsWith('/');
        if (isInternal) {
          return (
            <Link
              key={index}
              href={url}
              className="text-electricCyan hover:underline font-medium inline-flex items-center gap-0.5"
            >
              {label}
            </Link>
          );
        }
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-electricCyan hover:underline font-medium"
          >
            {label}
          </a>
        );
      }
    }

    // 粗体 **bold**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={index} className="font-bold text-doodleWhite">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // 行内代码 `code`
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded bg-cosmic-card text-electricCyan font-mono text-xs border border-cosmic-border/60"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}
