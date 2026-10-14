/*
 * Validació bàsica del web: JSON-LD, H1, idioma, canonical, hreflang, og:image absolut,
 * enllaços/recursos relatius existents i possibles restes de català a les pàgines /es/.
 * Ús (des de l'arrel del projecte):   node tools/validate-site.js
 */
"use strict";
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const pages = [
  "index.html",
  "empresas.html",
  "programacio-nens-vilafranca/index.html",
  "es/index.html",
  "es/empresas.html",
  "es/programacion-ninos-vilafranca/index.html"
];
const EXTERNAL = /^(https?:|mailto:|tel:|#|data:|javascript:|\/\/)/;

let problems = 0;
const warn = (msg) => { problems++; console.log("  !! " + msg); };

pages.forEach((p) => {
  const html = fs.readFileSync(path.join(root, p), "utf8");
  console.log(p);

  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].forEach((m, i) => {
    try { JSON.parse(m[1]); } catch (e) { warn("JSON-LD #" + (i + 1) + " invàlid: " + e.message); }
  });

  const h1 = (html.match(/<h1\b/g) || []).length;
  if (h1 !== 1) warn("h1 = " + h1);

  const lang = (html.match(/<html lang="(\w+)"/) || [])[1];
  const expected = p.startsWith("es/") ? "es" : "ca";
  if (lang !== expected) warn("lang = " + lang + " (esperat " + expected + ")");

  if (!/<link rel="canonical" href="https:\/\/pixelpenedes\.com\//.test(html)) warn("sense canonical");
  const hreflangs = (html.match(/<link rel="alternate" hreflang="/g) || []).length;
  if (hreflangs !== 3) warn("hreflang = " + hreflangs + " (esperat 3)");
  if (/og:image" content="(?!https)/.test(html)) warn("og:image relatiu");

  const dir = path.dirname(path.join(root, p));
  // S'ignoren només els <script> en línia; els que tenen src (p. ex. script.js) sí es comproven
  const noScripts = html.replace(/<script\b(?![^>]*\bsrc=)[\s\S]*?<\/script>/g, "");
  [...noScripts.matchAll(/\s(?:href|src)="([^"]+)"/g)].forEach((m) => {
    const value = m[1];
    if (EXTERNAL.test(value)) return;
    const filePart = value.split("#")[0];
    if (filePart === "") return;
    let target = path.join(dir, filePart);
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, "index.html");
    if (!fs.existsSync(target)) warn("enllaç o recurs inexistent: " + value);
  });

  if (p.startsWith("es/")) {
    const text = html
      .replace(/<script\b[\s\S]*?<\/script>/g, " ")
      .replace(/<style\b[\s\S]*?<\/style>/g, " ")
      .replace(/<[^>]+>/g, " ");
    const catalan = /\b(per a|dels|amb un|nens|nenes|classe gratuïta|Preguntes|Inici|Contacte|empreses)\b/gi;
    const hits = [...new Set([...text.matchAll(catalan)].map((m) => m[0].toLowerCase()))];
    if (hits.length) console.log("  (revisar possibles restes de català: " + hits.join(", ") + ")");
  }
});

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
console.log("sitemap.xml: " + (sitemap.match(/<loc>/g) || []).length + " URLs");
console.log(problems ? "PROBLEMES: " + problems : "VALIDACIÓ OK");
process.exit(problems ? 1 : 0);
