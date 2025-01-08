import prompt from "prompt";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import promtSchemaUrl from "../../prompts-schema/prompt-schema-urlshort.js";
import promptSchemaUrl from "../../prompts-schema/prompt-schema-urlshort.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const DATABASE_PATH = path.join(__dirname, "urls.json");

function initDatabase() {
  if (!fs.existsSync(DATABASE_PATH)) {
    fs.writeFileSync(DATABASE_PATH, JSON.stringify({}));
  }
}

function generateShortCode() {
  return crypto.randomBytes(4).toString("hex");
}

function saveUrl(shortCode, originalUrl) {
  const urls = JSON.parse(fs.readFileSync(DATABASE_PATH));
  urls[shortCode] = originalUrl;
  fs.writeFileSync(DATABASE_PATH, JSON.stringify(urls, null, 2));
}

async function createShortUrl() {
  console.log("=== Encurtador de URLs ===");
  
  initDatabase();
  
  prompt.get(promptSchemaUrl, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    try {
      // Validação básica da URL
      new URL(result.url);
      
      const shortCode = generateShortCode();
      saveUrl(shortCode, result.url);
      
      console.log("\nURL encurtada com sucesso!");
      console.log(`URL original: ${result.url}`);
      console.log(`Código curto: ${shortCode}`);
      console.log(`URL encurtada: http://seudominio.com/${shortCode}`);
      
    } catch (error) {
      console.log("Por favor, insira uma URL válida");
    }
  });

  prompt.start();
}

export default createShortUrl;