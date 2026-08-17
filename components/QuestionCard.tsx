"use client";

import { useState } from "react";

interface QuestionCardProps {
  index: number;
  text: string;
  choices?: string[];
}

export default function QuestionCard({ index, text, choices }: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="animate-reveal flex items-start gap-4 rounded-xl border border-white/10 bg-[#1a1a1a] p-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-lg font-bold text-white">
        Q{index}
      </span>
      <div className="flex flex-1 flex-col gap-5">
        <p className="text-2xl font-medium leading-snug text-white md:text-3xl">
          {text}
        </p>

        {choices && choices.length > 0 && (
          <div className="flex flex-col gap-3">
            {choices.map((choice, i) => {
              const isSelected = selected === i;
              return (
                <button
                  key={choice}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelected((prev) => (prev === i ? null : i))}
                  className={`cursor-pointer rounded-lg border-2 px-5 py-4 text-left text-xl font-medium transition-colors duration-150 md:text-2xl ${
                    isSelected
                      ? "border-[#2563eb] bg-[#2563eb]/20 text-white"
                      : "border-white/15 bg-transparent text-gray-200 hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
