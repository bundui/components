import { extractCodeFromFilePath } from "@/lib/code";
import { CodePreview } from "@/components/website/code-preview";

type CodeBlockProps = {
  filePath: string;
  className?: string;
};

export function CodeBlock({ filePath, className }: CodeBlockProps) {
  const code = extractCodeFromFilePath(filePath);

  return <CodePreview code={code} lang={"tsx"} />;
}
