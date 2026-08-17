interface SummaryCardProps {
  text: string;
}

export default function SummaryCard({ text }: SummaryCardProps) {
  return (
    <div className="animate-reveal rounded-xl border-2 border-[#10b981] bg-[#1a1a1a] p-6">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#10b981]">
        정리
      </p>
      <p className="text-2xl font-medium leading-snug text-white md:text-3xl">
        {text}
      </p>
    </div>
  );
}
