import GradientBorder from "@/components/core/gradient-border";

export default function GradientBorderImageExample() {
  return (
    <GradientBorder className="border-2 [background:linear-gradient(45deg,transparent,transparent_50%,transparent)_padding-box,conic-gradient(from_var(--border-angle),transparent_80%,_theme(colors.orange.500)_86%,_theme(colors.orange.700)_90%,_theme(colors.orange.500)_94%,_theme(colors.orange.600/.48))_border-box]">
      <img
        width="300"
        src="https://images.unsplash.com/photo-1502526830269-3bf50994d57c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </GradientBorder>
  );
}
