interface NextChapterBannerProps {
  text: string;
}

export default function NextChapterBanner({ text }: NextChapterBannerProps) {
  return (
    <div className="animate-reveal rounded-xl bg-[#f97316] p-6 text-center">
      <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-white/80">
        다음 시간
      </p>
      <p className="text-2xl font-bold text-white md:text-3xl">{text}</p>
    </div>
  );
}
