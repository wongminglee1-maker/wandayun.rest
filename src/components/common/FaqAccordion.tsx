'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/data/faqs';
import { CoordinateCrosshair } from '@/components/doodles/DoodleIcons';

export function FaqAccordion({ items }: { items: FAQItem[] }) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full space-y-3">
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all border ${
              isOpen
                ? 'bg-cosmic-surface border-electricCyan/50 shadow-[0_4px_20px_rgba(67,221,230,0.1)]'
                : 'bg-cosmic-surface/60 border-cosmic-border hover:border-cosmic-borderGlow'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-electricCyan rounded-2xl"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-sm sm:text-base text-doodleWhite flex items-center gap-3">
                <span className="font-mono text-xs text-electricCyan font-bold">
                  Q{index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <span>{item.question}</span>
              </span>
              <span
                className={`text-electricCyan transform transition-transform duration-200 text-lg leading-none ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-mutedText leading-relaxed border-t border-cosmic-border/30 mt-1">
                <p className="mt-2">{item.answer}</p>
                {item.keyPoints && item.keyPoints.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-cosmic-border/30 flex flex-wrap gap-2 text-xs">
                    {item.keyPoints.map((point, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-cosmic-card text-electricCyan/90 border border-cosmic-border/60 font-mono text-[11px]"
                      >
                        ✦ {point}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
