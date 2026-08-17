import type { Chapter } from "@/lib/questions";

interface ChapterSelectorProps {
  chapters: Chapter[];
  activeId: number;
  onSelect: (id: number) => void;
}

export default function ChapterSelector({
  chapters,
  activeId,
  onSelect,
}: ChapterSelectorProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {chapters.map((chapter) => {
        const active = chapter.id === activeId;
        return (
          <button
            key={chapter.id}
            type="button"
            onClick={() => onSelect(chapter.id)}
            aria-pressed={active}
            className={`rounded-lg px-5 py-3 text-lg font-semibold transition-colors duration-150 cursor-pointer ${
              active
                ? "bg-[#f97316] text-white"
                : "bg-[#374151] text-gray-200 hover:bg-[#4b5563]"
            }`}
          >
            {chapter.title} · {chapter.needs}
          </button>
        );
      })}
    </div>
  );
}
