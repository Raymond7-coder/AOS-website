const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

const EXCLUDED_FOLDERS = new Set([
  "node_modules",
  ".git",
  "pagefind"
]);

const EXCLUDED_FILES = new Set([
  "navbar.html"
]);

function getHtmlFiles(dir) {
  let files = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!EXCLUDED_FOLDERS.has(entry.name)) {
        files = files.concat(getHtmlFiles(fullPath));
      }
      continue;
    }

    if (
      entry.isFile() &&
      entry.name.toLowerCase().endsWith(".html") &&
      !EXCLUDED_FILES.has(entry.name)
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function cleanHtml(html) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
      .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function getTitle(html, fallback) {
  const titleMatch =
    html.match(
      /<title[^>]*>([\s\S]*?)<\/title>/i
    );

  if (titleMatch) {
    return cleanHtml(titleMatch[1])
      .replace(/\s*\|\s*AOS Orwell\s*$/i, "")
      .trim();
  }

  const h1Match =
    html.match(
      /<h1[^>]*>([\s\S]*?)<\/h1>/i
    );

  if (h1Match) {
    return cleanHtml(h1Match[1]).trim();
  }

  return fallback;
}

function getDescription(html, content) {
  const metaMatch =
    html.match(
      /<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i
    );

  if (
    metaMatch &&
    metaMatch[1].trim()
  ) {
    return decodeEntities(metaMatch[1]).trim();
  }

  return content.slice(0, 220).trim();
}

const htmlFiles =
  getHtmlFiles(ROOT);

const index =
  htmlFiles.map(file => {
    const html =
      fs.readFileSync(
        file,
        "utf8"
      );

    const relativePath =
      path
        .relative(
          ROOT,
          file
        )
        .replace(/\\/g, "/");

    const content =
      cleanHtml(html);

    return {
      title:
        getTitle(
          html,
          path.basename(
            file,
            ".html"
          )
        ),

      url:
        "/" + relativePath,

      description:
        getDescription(
          html,
          content
        ),

      content
    };
  });

fs.writeFileSync(
  path.join(
    ROOT,
    "search-index.json"
  ),
  JSON.stringify(
    index,
    null,
    2
  ),
  "utf8"
);

console.log("");
console.log("AOS Orwell search index created.");
console.log(`Indexed ${index.length} HTML pages.`);
console.log("");