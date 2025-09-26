import FlipCard from "@/components/core/flip-card";

const images = [
  "https://images.unsplash.com/photo-1629394661462-13ea8fe156ef?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1497206365907-f5e630693df0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1500479694472-551d1fb6258d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function FlipCardExample() {
  return (
    <div className="h-72 w-60 pt-10">
      <FlipCard>
        {images.map((src, index) => (
          <div key={index} className="h-72 w-60">
            <img
              className="pointer-events-none h-full w-full object-cover"
              src={src}
              alt={`Card ${index + 1}`}
            />
          </div>
        ))}
      </FlipCard>
    </div>
  );
}
