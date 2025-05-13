import MagneticButton from "@/components/core/magnetic-button";

export default function MagneticButtonExample() {
  return (
    <MagneticButton>
      <button className="bg-indigo-500 hover:bg-indigo-600 transition-colors px-10 text-lg text-white py-4 rounded-full">
        Magnetic Button
      </button>
    </MagneticButton>
  );
}
