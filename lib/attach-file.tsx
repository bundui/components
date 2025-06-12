import React from "react";
import { cn } from "@/lib/utils";
import type { BuildPageTreeOptions } from "fumadocs-core/source";

const Badge = ({
  name,
  className,
  children,
}: {
  name: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className="flex items-center gap-3 w-full">
      {name}{" "}
      <span
        className={cn(
          "ms-auto text-[10px] text-nowrap text-white rounded-sm leading-1 px-1 py-0.5 h-4.5 font-semibold flex items-center justify-center",
          className,
        )}
      >
        <span className="uppercase">{children}</span>
      </span>
    </span>
  );
};

export const attachFile: BuildPageTreeOptions["attachFile"] = (node, file) => {
  if (!file) return node;
  const data = file.data.data as object;

  if ("new" in data && typeof data.new === "boolean" && data.new) {
    node.name = (
      <Badge name={node.name} className="bg-blue-500">
        new
      </Badge>
    );
  }

  if ("alpha" in data && typeof data.alpha === "boolean" && data.alpha) {
    node.name = (
      <Badge
        name={node.name}
        className="bg-gradient-to-br from-purple-500 to-fuchsia-500"
      >
        alpha
      </Badge>
    );
  }

  if (
    "deprecated" in data &&
    typeof data.deprecated === "boolean" &&
    data.deprecated
  ) {
    node.name = (
      <Badge name={node.name} className="bg-red-500">
        deprecated
      </Badge>
    );
  }

  if ("updated" in data && typeof data.updated === "boolean" && data.updated) {
    node.name = (
      <Badge name={node.name} className="bg-emerald-500">
        updated
      </Badge>
    );
  }

  return node;
};
