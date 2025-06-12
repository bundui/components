import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/website/code-block";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import CliCommands from "@/components/website/cli-commands";

type ComponentCodePreview = {
  name: string;
  registryName: string;
  baseFolder: string;
  deps?: string;
};

export default function ComponentInstallation({
  name,
  baseFolder = "core",
  deps
}: ComponentCodePreview) {
  return (
    <Tabs defaultValue="manual" className="w-full">
      <TabsList>
        <TabsTrigger value="manual">Manual</TabsTrigger>
        <TabsTrigger value="cli">CLI</TabsTrigger>
      </TabsList>
      <TabsContent value="manual" className="pt-6">
        <Steps>
          <Step>
            <div className="mb-4 space-y-4 lg:mb-6 lg:space-y-6">
              <h5>Install the following dependencies:</h5>
              <div>
                <DynamicCodeBlock lang="ts" code={`${deps}`} />
              </div>
            </div>
          </Step>
          <Step>
            <div className="space-y-4 lg:space-y-6">
              <h5>Copy and paste the following code into your project:</h5>
              <CodeBlock filePath={`components/${baseFolder}/${name}.tsx`} />
            </div>
          </Step>
          <Step>
            <h5>Update the import paths to match your project setup.</h5>
          </Step>
        </Steps>
      </TabsContent>
      <TabsContent value="cli">
        <CliCommands />
      </TabsContent>
    </Tabs>
  );
}
