interface SituationBoxProps {
  text: string;
}

export default function SituationBox({ text }: SituationBoxProps) {
  return (
    <div className="rounded-xl bg-[#2a2a2a] px-6 py-4 text-lg italic text-gray-300 md:text-xl">
      {text}
    </div>
  );
}
