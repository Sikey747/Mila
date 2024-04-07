import fs from "fs";

function myPlugin() {
  const manifestPath = "./assets/.vite/manifest.json";
  if (fs.existsSync(manifestPath)) {
    const manifestContent = fs.readFileSync(manifestPath, "utf8");
    const manifest = JSON.parse(manifestContent);

    const existingFiles = Object.values(manifest).map((entry) => entry.file);

    const assetsFolderPath = "./assets";

    existingFiles.forEach((filename) => {
      const filePath = `${assetsFolderPath}/${filename}`;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Удален файл ${filename}`);
      }
    });
  } else {
    console.log("Нету манифеста");
  }
}

myPlugin();
