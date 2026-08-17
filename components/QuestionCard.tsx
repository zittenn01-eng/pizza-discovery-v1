interface QuestionCardProps {
  index: number;
  text: string;
}

export default function QuestionCard({ index, text }: QuestionCardProps) {
  return (
    <div className="animate-reveal flex items-start gap-4 rounded-xl border border-white/10 bg-[#1a1a1a] p-6">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-lg font-bold text-white">
        Q{index}
      </span>
      <p className="text-2xl font-medium leading-snug text-white md:text-3xl">
        {text}
      </p>
    </div>
  );
}
