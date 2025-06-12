const fs = require("fs");
const path = require("path");

const registryTemplate = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "bundui",
  homepage: "https://bundui.io",
  items: [] as Array<Record<string, any>>
};

const extractUIImports = (filePath: string): string[] => {
  const content = fs.readFileSync(filePath, "utf-8");
  const importMatches = [...content.matchAll(/import\s+.*?\s+from\s+['"](.*?)['"]/g)];
  return importMatches
    .map((match) => match[1])
    .filter((importPath) => importPath.startsWith("components/ui"))
    .map((importPath) => importPath.split("/").pop() || "");
};

const createRegistryEntry = (filePath: string, uiImports: string[]): Record<string, any> => {
  const parsedPath = path.parse(filePath);
  const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, "/");

  return {
    name: parsedPath.name,
    type: "registry:block",
    title: parsedPath.name.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
    files: [
      {
        path: relativePath,
        type: "registry:component",
        target: `components/${parsedPath.base}`
      }
    ]
  };
};

const processCoreComponents = (directory: string): void => {
  const files: string[] = fs.readdirSync(directory);

  files.forEach((file: string) => {
    const fullPath = path.join(directory, file);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      processCoreComponents(fullPath);
    } else if (path.extname(fullPath) === ".tsx") {
      const uiImports = extractUIImports(fullPath);
      const registryEntry = createRegistryEntry(fullPath, uiImports);
      registryTemplate.items.push(registryEntry);
    }
  });
};

const componentsCoreDir = path.resolve("components/core");
processCoreComponents(componentsCoreDir);

const registryFilePath = path.resolve("registry.json");
fs.writeFileSync(registryFilePath, JSON.stringify(registryTemplate, null, 2), "utf-8");
