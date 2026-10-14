/*
 * Genera les versions en castellà (/es/...) a partir de les pàgines en català i del
 * diccionari de traduccions de script.js, de manera que el text en castellà és al HTML
 * (i no només a JavaScript) i Google el pot indexar.
 * També genera sitemap.xml (amb hreflang) i robots.txt.
 *
 * Ús (des de l'arrel del projecte):   node tools/build-es.js
 * Cal tornar-lo a executar cada cop que es canviï una pàgina en català o el diccionari.
 * NO s'han d'editar a mà els fitxers de /es/: es sobreescriuen.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BASE = "https://pixelpenedes.com";

/* Pàgines: la versió catalana és la font; la castellana es genera. */
const ROUTES = [
  { ca: "index.html", es: "es/index.html", caUrl: "/", esUrl: "/es/" },
  { ca: "empresas.html", es: "es/empresas.html", caUrl: "/empresas.html", esUrl: "/es/empresas.html" },
  {
    ca: "programacio-nens-vilafranca/index.html",
    es: "es/programacion-ninos-vilafranca/index.html",
    caUrl: "/programacio-nens-vilafranca/",
    esUrl: "/es/programacion-ninos-vilafranca/"
  },
  {
    ca: "videojocs-nens-vilafranca/index.html",
    es: "es/videojuegos-ninos-vilafranca/index.html",
    caUrl: "/videojocs-nens-vilafranca/",
    esUrl: "/es/videojuegos-ninos-vilafranca/"
  },
  {
    ca: "impressio-3d-nens-vilafranca/index.html",
    es: "es/impresion-3d-ninos-vilafranca/index.html",
    caUrl: "/impressio-3d-nens-vilafranca/",
    esUrl: "/es/impresion-3d-ninos-vilafranca/"
  },
  {
    ca: "extraescolars-tecnologia-vilafranca/index.html",
    es: "es/extraescolares-tecnologia-vilafranca/index.html",
    caUrl: "/extraescolars-tecnologia-vilafranca/",
    esUrl: "/es/extraescolares-tecnologia-vilafranca/"
  }
];

/* ---------- Diccionari (script.js) ---------- */
const scriptSrc = fs.readFileSync(path.join(ROOT, "script.js"), "utf8");
const dStart = scriptSrc.indexOf("var translations = ") + "var translations = ".length;
const dEnd = scriptSrc.indexOf("\n  };", dStart) + 4;
const translations = new Function("return " + scriptSrc.slice(dStart, dEnd))();
const ES = translations.es;
const CA = translations.ca;

/* Frases de les dades estructurades que no són al diccionari (CA -> ES) */
const EXTRA = new Map([
  ["Pixel Penedès Family Benefits (empreses)", "Pixel Penedès Family Benefits (empresas)"],
  ["Programa de beneficis per a empreses", "Programa de beneficios para empresas"],
  ["Benefici per a empleats: formació tecnològica per als fills i filles dels empleats", "Beneficio para empleados: formación tecnológica para los hijos e hijas de los empleados"],
  ["Programa perquè les empreses ofereixin als empleats un benefici de conciliació i formació: accés als cursos de programació, videojocs, 3D i tecnologia de Pixel Penedès per als seus fills de 6 a 16 anys, presencials i online en directe. Pixel Penedès gestiona les famílies, les inscripcions, els grups i les classes.", "Programa para que las empresas ofrezcan a sus empleados un beneficio de conciliación y formación: acceso a los cursos de programación, videojuegos, 3D y tecnología de Pixel Penedès para sus hijos de 6 a 16 años, presenciales y online en directo. Pixel Penedès gestiona las familias, las inscripciones, los grupos y las clases."],
  ["Programa perquè les empreses puguin oferir als fills dels seus empleats accés als cursos de programació, videojocs i tecnologia de Pixel Penedès, presencials i online, de 6 a 16 anys.", "Programa para que las empresas puedan ofrecer a los hijos de sus empleados acceso a los cursos de programación, videojuegos y tecnología de Pixel Penedès, presenciales y online, de 6 a 16 años."],
  ["Empreses, departaments de RRHH, People & Culture i direcció", "Empresas, departamentos de RRHH, People & Culture y dirección"],
  ["Fills i filles dels empleats", "Hijos e hijas de los empleados"],
  ["Sol·licitud d'informació per a empreses", "Solicitud de información para empresas"],
  ["Condicions especials d'accés als cursos per als empleats de les empreses que s'incorporen al programa. Es comuniquen a les empreses interessades.", "Condiciones especiales de acceso a los cursos para los empleados de las empresas que se incorporan al programa. Se comunican a las empresas interesadas."],
  ["Àrees de formació del programa", "Áreas de formación del programa"],
  ["Classes de programació, videojocs, 3D i creació de contingut", "Clases de programación, videojuegos, 3D y creación de contenido"],
  ["Classes de tecnologia per a nens i joves", "Clases de tecnología para niños y jóvenes"],
  ["Programa de beneficis per a empreses: formació tecnològica per als fills i filles dels empleats.", "Programa de beneficios para empresas: formación tecnológica para los hijos e hijas de los empleados."],
  ["Acadèmia de programació, videojocs, impressió 3D i creació de contingut per a nens i nenes de 6 a 16 anys a Vilafranca del Penedès.", "Academia de programación, videojuegos, impresión 3D y creación de contenido para niños y niñas de 6 a 16 años en Vilafranca del Penedès."],
  ["Classes de programació per a nens i joves", "Clases de programación para niños y jóvenes"],
  ["Programació per blocs", "Programación por bloques"],
  ["Pixel Penedès Family Benefits", "Pixel Penedès Family Benefits"]
]);
const REV = new Map();
Object.keys(CA).forEach((k) => {
  if (typeof CA[k] === "string" && typeof ES[k] === "string" && !REV.has(CA[k])) REV.set(CA[k], ES[k]);
});
const translateString = (s) => (REV.has(s) ? REV.get(s) : EXTRA.has(s) ? EXTRA.get(s) : s);

/* Noms propis i adreces que no es tradueixen (i claus d'adreça que no són al diccionari) */
const KEEP_AS_IS = new Set(["Pixel Penedès", "C/ Puigmoltó, 5", "Vilafranca del Penedès", "Alt Penedès", "customer service", "Pixel Penedès Family Benefits", "Roblox Lua", "Minecraft Education", "Roblox Studio", "Microsoft Kodu", "Bambu Studio"]);
const KEEP_KEYS = new Set(["contact1_direccion", "contact1_ciudad"]);

/* ---------- Utilitats ---------- */
const escText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const dirOf = (p) => path.posix.dirname(p);

function relLink(fromFile, toFile) {
  let r = path.posix.relative(dirOf(fromFile), toFile);
  if (r.endsWith("index.html")) r = r.slice(0, -"index.html".length);
  return r === "" ? "./" : r;
}

function setAttr(attrs, name, value) {
  const re = new RegExp("\\s" + name + '="[^"]*"');
  const piece = " " + name + '="' + escAttr(value) + '"';
  return re.test(attrs) ? attrs.replace(re, piece) : attrs + piece;
}

/* ---------- Transformació d'etiquetes (atributs) ---------- */
function transformTags(html, route) {
  const missing = new Set();
  const out = html.replace(/<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g, (m, tag, attrs) => {
    let a = attrs;
    const get = (n) => {
      const r = a.match(new RegExp('\\sdata-' + n + '="([^"]+)"'));
      return r ? r[1] : null;
    };
    const pairs = [["i18n-alt", "alt"], ["i18n-aria", "aria-label"], ["i18n-placeholder", "placeholder"], ["i18n-content", "content"]];
    pairs.forEach(([data, attr]) => {
      const key = get(data);
      if (!key) return;
      if (ES[key] === undefined) { missing.add(key); return; }
      a = setAttr(a, attr, ES[key]);
    });

    // Missatges de WhatsApp en castellà
    const waKey = get("wa-key");
    const isFloat = /\sid="whatsappFloat"/.test(a);
    if (tag === "a" && (waKey || isFloat)) {
      const msg = ES[waKey || "wa_float_message"];
      if (msg) a = setAttr(a, "href", "https://wa.me/34633454159?text=" + encodeURIComponent(msg));
    }

    // Enllaços i recursos relatius: s'adapten a la nova ubicació (/es/...) i a la versió castellana de les pàgines
    if (!/\sdata-lang="/.test(a)) {
      a = a.replace(/\s(href|src)="([^"]+)"/g, (mm, attr, val) => {
        if (/^(https?:|mailto:|tel:|#|data:|\/\/|javascript:)/.test(val)) return mm;
        const hashIdx = val.indexOf("#");
        const pathPart = hashIdx === -1 ? val : val.slice(0, hashIdx);
        const hash = hashIdx === -1 ? "" : val.slice(hashIdx);
        let target = path.posix.normalize(path.posix.join(dirOf(route.ca), pathPart === "" ? "." : pathPart));
        if (target === "." || target === "./") target = "index.html";
        if (target.endsWith("/")) target += "index.html";
        const hit = ROUTES.find((r) => r.ca === target);
        const esTarget = hit ? hit.es : target;
        return " " + attr + '="' + relLink(route.es, esTarget) + hash + '"';
      });
    }
    return "<" + tag + a + ">";
  });
  return { html: out, missing };
}

/* ---------- Text dels elements amb data-i18n ---------- */
function transformText(html) {
  const missing = new Set();
  let count = 0;
  const out = html.replace(/(<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>)([^<]*)(<\/\2>)/g, (m, open, tag, key, inner, close) => {
    if (ES[key] === undefined) { missing.add(key); return m; }
    count++;
    return open + escText(ES[key]) + close;
  });
  return { html: out, missing, count };
}

/* ---------- Dades estructurades (JSON-LD) ---------- */
function localiseJsonLd(json) {
  const untranslated = new Set();
  const pageScoped = (node) => [].concat(node["@type"] || []).some((t) => ["WebPage", "BreadcrumbList", "Service", "FAQPage", "Course"].includes(t));

  function mapUrl(s, scoped) {
    if (!s.startsWith(BASE)) return s;
    ROUTES.forEach((r) => {
      if (r.caUrl === "/") return;
      if (s.startsWith(BASE + r.caUrl)) s = BASE + r.esUrl + s.slice((BASE + r.caUrl).length);
    });
    if (scoped) {
      if (s === BASE + "/") s = BASE + "/es/";
      if (s === BASE + "/#webpage") s = BASE + "/es/#webpage";
      if (s === BASE + "/#breadcrumb") s = BASE + "/es/#breadcrumb";
    }
    return s;
  }

  function walk(value, scoped) {
    if (Array.isArray(value)) return value.map((v) => walk(v, scoped));
    if (value && typeof value === "object") {
      const o = {};
      Object.keys(value).forEach((k) => { o[k] = walk(value[k], scoped); });
      return o;
    }
    if (typeof value === "string") {
      if (value === "ca") return scoped ? "es" : value;
      const t = translateString(value);
      if (t === value && !KEEP_AS_IS.has(value) && !/^(https?:|\+|[0-9])/.test(value) && /[a-zàèéíòóúüçïl·]{4,}/i.test(value) && value.includes(" ")) untranslated.add(value);
      return mapUrl(t, scoped);
    }
    return value;
  }

  const nodes = json["@graph"] ? json["@graph"] : [json];
  const mapped = nodes.map((n) => walk(n, pageScoped(n)));
  const result = json["@graph"] ? Object.assign({}, json, { "@graph": mapped }) : mapped[0];
  return { json: result, untranslated };
}

function transformJsonLd(html) {
  const untranslated = new Set();
  const out = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/g, (m, open, body, close) => {
    const r = localiseJsonLd(JSON.parse(body));
    r.untranslated.forEach((s) => untranslated.add(s));
    return open + "\n" + JSON.stringify(r.json, null, 2) + "\n" + close;
  });
  return { html: out, untranslated };
}

/* ---------- Construcció d'una pàgina ---------- */
function buildPage(route) {
  let html = fs.readFileSync(path.join(ROOT, route.ca), "utf8");
  const report = { file: route.es };

  // Els <script> (JSON-LD i JS) es protegeixen perquè les regles d'etiquetes no els toquin
  const protectedBlocks = [];
  // (només els <script> en línia; els que tenen src s'han de reescriure com la resta de recursos)
  html = html.replace(/<script\b(?![^>]*\bsrc=)[\s\S]*?<\/script>/g, (m) => {
    protectedBlocks.push(m);
    return "\u0000SCRIPT" + (protectedBlocks.length - 1) + "\u0000";
  });

  const tags = transformTags(html, route);
  html = tags.html;
  const text = transformText(html);
  html = text.html;
  report.translatedTexts = text.count;
  report.missingKeys = [...new Set([...tags.missing, ...text.missing])].filter((k) => !KEEP_KEYS.has(k));

  html = html.replace(/\u0000SCRIPT(\d+)\u0000/g, (m, i) => protectedBlocks[Number(i)]);

  // Dades estructurades en castellà
  const ld = transformJsonLd(html);
  html = ld.html;
  report.untranslatedJsonLd = [...ld.untranslated];

  // Idioma, URLs canòniques i metadades de localització
  html = html.replace('<html lang="ca">', '<html lang="es">');
  html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + BASE + route.esUrl + '">');
  html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + BASE + route.esUrl + '">');
  html = html.replace('<meta property="og:locale" content="ca_ES" id="ogLocale">', '<meta property="og:locale" content="es_ES" id="ogLocale">');
  html = html.replace('<meta property="og:locale:alternate" content="es_ES">', '<meta property="og:locale:alternate" content="ca_ES">');
  html = html.replace(/<meta name="keywords"[^>]*>\s*/, "");

  // Selector d'idioma: enllaços a l'altra URL
  const caHref = relLink(route.es, route.ca);
  const selfHref = relLink(route.es, route.es);
  html = html.replace(/<a class="lang-btn[^"]*" data-lang="ca"[^>]*>CAT<\/a>/, '<a class="lang-btn" data-lang="ca" lang="ca" hreflang="ca" href="' + caHref + '">CAT</a>');
  html = html.replace(/<a class="lang-btn[^"]*" data-lang="es"[^>]*>ES<\/a>/, '<a class="lang-btn is-active" data-lang="es" lang="es" hreflang="es" href="' + selfHref + '" aria-current="true">ES</a>');

  html = html.replace("<!DOCTYPE html>", "<!DOCTYPE html>\n<!-- Fitxer generat per tools/build-es.js a partir de " + route.ca + ". No editar: edita el català i torna a executar el script. -->");

  const outPath = path.join(ROOT, route.es);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, "utf8");
  return report;
}

/* ---------- sitemap.xml i robots.txt ---------- */
function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const alt = (r) =>
    '    <xhtml:link rel="alternate" hreflang="ca" href="' + BASE + r.caUrl + '"/>\n' +
    '    <xhtml:link rel="alternate" hreflang="es" href="' + BASE + r.esUrl + '"/>\n' +
    '    <xhtml:link rel="alternate" hreflang="x-default" href="' + BASE + r.caUrl + '"/>\n';
  const entry = (url, r, prio) =>
    "  <url>\n    <loc>" + url + "</loc>\n    <lastmod>" + today + "</lastmod>\n    <priority>" + prio + "</priority>\n" + alt(r) + "  </url>\n";
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  ROUTES.forEach((r) => {
    const prio = r.caUrl === "/" ? "1.0" : "0.8";
    xml += entry(BASE + r.caUrl, r, prio);
    xml += entry(BASE + r.esUrl, r, prio);
  });
  xml += "</urlset>\n";
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml, "utf8");
  fs.writeFileSync(path.join(ROOT, "robots.txt"), "User-agent: *\nAllow: /\nDisallow: /tools/\n\nSitemap: " + BASE + "/sitemap.xml\n", "utf8");
}

/* ---------- Execució ---------- */
let problems = 0;
ROUTES.forEach((route) => {
  const r = buildPage(route);
  console.log("OK  " + r.file + "  (" + r.translatedTexts + " textos traduïts)");
  if (r.missingKeys.length) { problems++; console.log("    claus sense traducció ES: " + r.missingKeys.join(", ")); }
  if (r.untranslatedJsonLd.length) { problems++; console.log("    JSON-LD sense traduir:\n      - " + r.untranslatedJsonLd.join("\n      - ")); }
});
writeSitemap();
console.log("OK  sitemap.xml i robots.txt");
process.exit(problems ? 1 : 0);
