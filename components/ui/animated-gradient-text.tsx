export default function AnimatedGradientText({ text }: { text: string }) {
  return (
    <span className="inline-flex animate-text-gradient bg-linear-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-3xl text-center text-transparent font-medium bg-clip-text">
      {text}
    </span>
  );
}
