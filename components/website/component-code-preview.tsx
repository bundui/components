import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodePreview from "./code-preview";
import CodeRenderer from "./code-renderer";
import ComponentPreview from "./component-preview";
import { extractCodeFromFilePath } from "@/lib/code";

type ComponentCodePreview = {
  component: React.ReactElement;
  filePath: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  iframeDemo?: string;
};

export default function ComponentCodePreview({
  component,
  filePath,
  hasReTrigger,
  classNameComponentContainer,
  iframeDemo,
}: ComponentCodePreview) {
  const fileContent = extractCodeFromFilePath(`components/${filePath}.tsx`);

  return (
    <div className="not-prose relative z-0 flex items-center justify-between pb-3">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <TabsList className="border-0">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          className="overflow-hidden border rounded-md"
          value="preview"
        >
          {iframeDemo ? (
            <iframe className="w-full h-[400px]" src={iframeDemo} />
          ) : (
            <ComponentPreview
              component={component}
              hasReTrigger={hasReTrigger}
              className={classNameComponentContainer}
            />
          )}
        </TabsContent>
        <TabsContent value="code">
          <CodePreview code={fileContent}>
            <CodeRenderer code={fileContent} lang="tsx" />
          </CodePreview>
        </TabsContent>
      </Tabs>
    </div>
  );
}
