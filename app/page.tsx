"use client";

import { useCallback, useEffect, useState } from "react";
import ChapterSelector from "@/components/ChapterSelector";
import SituationBox from "@/components/SituationBox";
import QuestionCard from "@/components/QuestionCard";
import SummaryCard from "@/components/SummaryCard";
import NextChapterBanner from "@/components/NextChapterBanner";
import { chapters, getChapterById } from "@/lib/questions";
import { getStoredChapter, setStoredChapter } from "@/lib/storage";

// stage 1..N: reveal Q1..QN, stage N+1: reveal summary, stage N+2: reveal next-chapter banner
// (N = chapter.questions.length, which varies per chapter)
const DEFAULT_CHAPTER_ID = 2;

export default function Home() {
  const [chapterId, setChapterId] = useState(DEFAULT_CHAPTER_ID);
  const [stage, setStage] = useState(1);
  const [resetCount, setResetCount] = useState(0);

  useEffect(() => {
    // localStorage isn't available during SSR, so the stored chapter is
    // read once after mount rather than during initial render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChapterId(getStoredChapter(DEFAULT_CHAPTER_ID));
  }, []);

  const chapter = getChapterById(chapterId);
  const questionCount = chapter.questions.length;
  const summaryStage = questionCount + 1;
  const bannerStage = questionCount + 2;

  const selectChapter = useCallback((id: number) => {
    setChapterId(id);
    setStage(1);
    setStoredChapter(id);
  }, []);

  const revealNext = useCallback(() => {
    setStage((s) => Math.min(s + 1, bannerStage));
  }, [bannerStage]);

  const reset = useCallback(() => {
    setStage(1);
    setResetCount((c) => c + 1);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;

      if (e.key === " " || e.key === "Spacebar" || e.key === "ArrowRight") {
        e.preventDefault();
        revealNext();
      } else if (e.key.toLowerCase() === "r") {
        reset();
      } else if (["2", "3", "4", "5", "6"].includes(e.key)) {
        selectChapter(Number(e.key));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [revealNext, reset, selectChapter]);

  return (
    <div className="flex min-h-screen flex-col bg-[#0f0f0f] px-6 py-8 text-white md:px-12">
      <ChapterSelector
        chapters={chapters}
        activeId={chapterId}
        onSelect={selectChapter}
      />

      <main className="mx-auto mt-10 flex w-full max-w-4xl flex-1 flex-col gap-6">
        <SituationBox text={chapter.situation} />

        <div className="flex flex-col gap-6">
          {chapter.questions.map(
            (question, i) =>
              stage > i && (
                <QuestionCard
                  key={`${chapterId}-${resetCount}-q${i}`}
                  index={i + 1}
                  text={question.text}
                  choices={question.choices}
                />
              )
          )}
        </div>

        {stage >= summaryStage && (
          <SummaryCard key={`${chapterId}-summary`} text={chapter.summary} />
        )}

        {stage >= bannerStage && (
          <NextChapterBanner key={`${chapterId}-next`} text={chapter.next} />
        )}

        {stage < bannerStage && (
          <button
            type="button"
            onClick={revealNext}
            className="cursor-pointer self-center rounded-lg bg-[#2563eb] px-8 py-4 text-xl font-semibold text-white transition-colors duration-150 hover:bg-[#1d4ed8]"
          >
            다음 발문 보기 →
          </button>
        )}
      </main>

      <footer className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={reset}
          className="cursor-pointer rounded-lg bg-[#374151] px-6 py-3 text-lg font-medium text-gray-200 transition-colors duration-150 hover:bg-[#4b5563]"
        >
          처음부터 다시
        </button>
      </footer>
    </div>
  );
}
