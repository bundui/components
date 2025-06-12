import fs from "fs";
import path from "path";

const dir = "./public/r";

fs.readdirSync(dir).forEach((filename) => {
  const filePath = path.join(dir, filename);

  if (path.extname(filePath) === ".json") {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

      if (Array.isArray(data.files)) {
        let updated = false;

        data.files = data.files.map((file) => {
          if (typeof file.path === "string" && file.path.includes("\\")) {
            file.path = file.path.replace(/\\/g, "/");
            updated = true;
          }

          if (file.target === undefined || file.target === null || file.target === "") {
            delete file.target;
            updated = true;
          }

          return file;
        });

        const seenComponentPaths = new Set();
        data.files = data.files.filter((file) => {
          if (file.type === "registry:component") {
            if (seenComponentPaths.has(file.path)) {
              updated = true;
              return false;
            }
            seenComponentPaths.add(file.path);
          }
          return true;
        });

        if (updated) {
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
          console.log(`Updated: ${filePath}`);
        }
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error);
    }
  }
});
