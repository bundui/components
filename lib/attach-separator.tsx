import type { BuildPageTreeOptions } from "fumadocs-core/source";

const Icon = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="size-4.5 [&_svg]:!size-[11px] flex items-center justify-center bg-foreground text-background rounded-sm">
      {children}
    </span>
  );
};

export const attachSeparator: BuildPageTreeOptions["attachSeparator"] = (
  node,
) => {
  return node;
};
