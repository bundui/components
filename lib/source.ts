import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import { icons } from "lucide-react";
import { attachFile } from "./attach-file";
import { attachSeparator } from "./attach-separator";

export const source = loader({
  baseUrl: "/components",
  source: docs.toFumadocsSource(),
  pageTree: {
    attachFile,
    attachSeparator,
  },
  icon(icon) {
    if (!icon) {
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
});
