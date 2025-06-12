import AnimatedText from "@/components/core/animated-text";

export default function Example() {
  return (
    <AnimatedText
      text="Welcome to the Future"
      className="text-4xl font-bold"
      animationType="letters"
      staggerDelay={0.08}
      duration={0.6}
    />
  );
}
