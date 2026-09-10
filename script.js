(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =========================================================
     Traduccions (CAT / ES)
     ========================================================= */
  var translations = {
    ca: {
      meta_title: "Pixel Penedès | Acadèmia de programació, videojocs i impressió 3D a Vilafranca del Penedès",
      meta_description: "Classes de programació, disseny de videojocs, impressió 3D i creació de contingut per a nens i nenes de 6 a 16 anys a Vilafranca del Penedès. Reserva ara una classe gratuïta a Pixel Penedès.",
      og_title: "Pixel Penedès | Programació, videojocs, 3D i creació de contingut per a nens i nenes",
      og_description: "A Vilafranca del Penedès ensenyem a nens i nenes de 6 a 16 anys a programar, crear videojocs, dissenyar en 3D i crear contingut. La primera classe és gratuïta.",

      skip_link: "Vés al contingut principal",
      brand_aria: "Pixel Penedès - Inici",
      logo_alt: "Logotip de Pixel Penedès",
      nav_aria: "Navegació principal",

      nav_videojocs: "Videojocs",
      nav_3d: "Disseny 3D",
      nav_programacio: "Programació",
      nav_creador: "Creador",
      nav_itinerari: "Itinerari",
      nav_faq: "Preguntes",
      nav_contacte: "Contacte",
      cta_header: "Classe gratuïta",
      nav_toggle_open: "Obrir el menú",
      nav_toggle_close: "Tancar el menú",

      hero_tag: "Vilafranca del Penedès · de 6 a 16 anys",
      hero_title: "Aprenen a programar jugant, dissenyant i imprimint les seves pròpies idees",
      hero_lead: "A Pixel Penedès els nens i nenes creen videojocs, aprenen a programar de veritat, dissenyen objectes en 3D i publiquen els seus propis vídeos. Grups reduïts, professorat proper i la primera classe, gratuïta.",
      cta_reserve: "Reserva una classe gratuïta",
      hero_point1: "Grups reduïts per edats",
      hero_point2: "Projectes propis, no fitxes",
      hero_point3: "Classe de prova sense compromís",

      mode_presencial_label: "Presencial",
      mode_presencial_sub: "A l'acadèmia de Vilafranca",
      mode_online_label: "Online",
      mode_online_sub: "En directe per Zoom",

      canvas_aria: "Àrea interactiva de píxels: passa el dit o el ratolí per pintar quadrats de colors",
      pixel_hint: "Arrossega el ratolí o el dit per dibuixar",
      pixel_clear: "Neteja",

      gallery_eyebrow: "A dins de l'acadèmia",
      gallery_title: "Així són les nostres classes",
      gallery_lead: "Grups petits, un mentor a prop de cada pantalla i un projecte propi entre mans, no un exercici a mig fer.",
      gallery_img1_alt: "Un grup d'alumnes de Pixel Penedès treballant cadascun en el seu projecte de pixel art, amb un mentor supervisant la classe",
      gallery1_title: "Cada alumne, el seu projecte",
      gallery1_sub: "Ritme individual dins d'un grup reduït",
      gallery_img2_alt: "Un mentor de Pixel Penedès ajudant tres alumnes amb el seu projecte de disseny de personatges a l'ordinador",
      gallery2_title: "Sempre acompanyats",
      gallery2_sub: "Un mentor a prop de cada pantalla",

      feat1_img_alt: "Il·lustració d'un videojoc de plataformes en pixel art creat pels alumnes, amb els logotips de Minecraft Education, Roblox Studio, GDevelop i Unity",
      feat1_eyebrow: "01 · Disseny i creació de videojocs",
      feat1_title: "Crea el teu propi videojoc, no un exercici",
      feat1_desc: "Els alumnes dissenyen nivells, personatges i mecàniques de joc amb eines pensades per a cada edat: des dels primers mons a Minecraft Education fins a jocs complets a Roblox Studio. Cada projecte és seu, de la idea inicial a la versió jugable.",

      feat2_img_alt: "Impressora 3D imprimint un dragó dissenyat pels alumnes, amb el logotip de Bambu Studio",
      feat2_eyebrow: "02 · Disseny i impressió 3D",
      feat2_title: "De la pantalla a l'objecte real",
      feat2_desc: "Dissenyar a l'ordinador és el primer pas. Veure com la seva idea surt de la impressora, en forma d'objecte que es pot tocar, és el que ho fa memorable. Modelen, preparen el fitxer i segueixen tot el procés d'impressió.",
      feat2_chip1: "Modelatge 3D",
      feat2_chip3: "Impressió pas a pas",
      feat2_chip4: "Projectes propis",

      feat3_img_alt: "Pantalla d'ordinador amb codi Python per crear un videojoc, amb els logotips de Python i intel·ligència artificial",
      feat3_eyebrow: "03 · Llenguatges de programació",
      feat3_title: "Del bloc de colors al codi real",
      feat3_desc: "A partir dels 11-12 anys, els alumnes fan el salt de la programació per blocs al codi escrit de veritat: Python per entendre la lògica de fons, i els llenguatges propis de motors com Unity o Roblox per donar vida als seus jocs.",
      feat3_chip4: "Intel·ligència artificial",

      feat4_img_alt: "Logotip de YouTube en neó amb les eines d'edició CapCut i Canva",
      feat4_eyebrow: "04 · Creador de contingut",
      feat4_title: "De jugar al seu joc a explicar-lo al món",
      feat4_desc: "Aprenen a gravar, editar i publicar vídeos sobre els seus propis projectes: guionitzar una idea, muntar-la amb CapCut i dissenyar miniatures i portades amb Canva. Comunicació, creativitat i criteri, amb YouTube com a escenari final.",

      itin_eyebrow: "Un camí, quatre etapes",
      itin_title: "Itinerari formatiu, dels 6 als 16 anys",
      itin_lead: "Cada etapa reforça l'anterior i n'obre una de nova. Els alumnes s'incorporen a la franja que els correspon i avancen al seu ritme.",
      itin1_age: "6–8 anys",
      itin1_title: "Primers passos",
      itin1_desc: "Pensament computacional, programació per blocs i primeres formes senzilles en 3D. Es treballa jugant, en grups molt reduïts.",
      itin2_age: "9–11 anys",
      itin2_title: "Creació guiada",
      itin2_desc: "Scratch avançat, primers videojocs propis a Minecraft Education o Roblox Studio i modelatge 3D llest per imprimir.",
      itin3_age: "12–14 anys",
      itin3_title: "Codi real",
      itin3_desc: "Python, disseny 3D més tècnic i videojocs amb motors gràfics complets com Unity.",
      itin4_age: "15–16 anys",
      itin4_title: "Projecte i portfoli",
      itin4_desc: "Projectes propis d'entitat, portfoli personal i orientació cap a batxillerat tecnològic o cicles formatius.",

      ben_eyebrow: "Més enllà del codi",
      ben_title: "Què s'enduen, cada setmana",
      ben_lead: "Programar, dissenyar, imprimir i publicar són l'excusa. El que treballem de fons és més ampli.",
      ben1_title: "Pensament lògic",
      ben1_desc: "Aprenen a trencar un problema gran en passos petits i a provar solucions fins que funcionen.",
      ben2_title: "Creativitat aplicada",
      ben2_desc: "Cada projecte surt de la seva idea: el joc, el personatge o el vídeo és seu de principi a fi.",
      ben3_title: "Treball en equip",
      ben3_desc: "Presenten el que fan, s'ajuden entre companys i aprenen a explicar les seves decisions.",
      ben4_title: "Ús responsable de la tecnologia",
      ben4_desc: "Entenen com funciona allò que utilitzen cada dia, en comptes de consumir-ho sense saber-ho.",
      ben5_title: "Constància",
      ben5_desc: "Els projectes es construeixen al llarg de diverses sessions: aprenen a perseverar fins acabar-los.",
      ben6_title: "Preparació de futur",
      ben6_desc: "Competències STEAM cada cop més valorades, en un entorn proper i sense pressió d'avaluar-los.",

      faq_eyebrow: "Dubtes freqüents",
      faq_title: "Preguntes freqüents",
      faq_lead: "El que ens pregunten més sovint les famílies abans d'apuntar-se.",
      faq0_q: "Feu classes online?",
      faq0_a: "Sí. A banda de les classes presencials a Vilafranca del Penedès, oferim classes online en directe per Zoom, amb un professor en directe (no vídeos gravats) i en grups reduïts, exactament amb el mateix seguiment que a l'acadèmia.",
      faq1_q: "Cal que el meu fill o filla ja sàpiga alguna cosa de programació?",
      faq1_a: "No, gens. La majoria d'alumnes comencen sense cap experiència prèvia. Cada grup s'adapta al nivell real dels nens i nenes que el formen, no a un temari fix.",
      faq2_q: "Quin material necessita?",
      faq2_a: "Res que hagi de comprar per endavant. A l'acadèmia disposem del maquinari i el programari necessari, incloses les impressores 3D. Només cal que vingui amb ganes de provar coses.",
      faq3_q: "Com són els grups?",
      faq3_a: "Grups reduïts organitzats per franja d'edat (6–8, 9–11, 12–14 i 15–16 anys), perquè el ritme de cada sessió tingui sentit per a tothom.",
      faq4_q: "On són les classes i com puc conèixer els horaris?",
      faq4_a: "Fem les classes al nostre espai del carrer Puigmoltó, 5, a Vilafranca del Penedès. Els horaris s'organitzen per grups: escriu-nos per WhatsApp o correu i et confirmem la disponibilitat actual.",
      faq5_q: "Què inclou la classe gratuïta?",
      faq5_a: "Una sessió real, amb el grup que li correspondria per edat, perquè el nen o la nena la visqui tal com serà després. Sense cap compromís de continuïtat.",
      faq6_q: "Com reservo la classe de prova?",
      faq6_a: "Omplint el formulari d'aquesta pàgina o escrivint-nos directament per WhatsApp. Et contactem per confirmar dia i grup en menys de 24-48 hores laborables.",

      res_eyebrow: "Sense compromís",
      res_title: "Reserva la classe gratuïta",
      res_lead: "Explica'ns una mica sobre el nen o la nena i et confirmem dia i grup. Sense compromís, sense lletra petita.",
      res_point1: "Resposta en menys de 48h laborables",
      res_point2: "Grup segons l'edat real",
      res_point3: "Cap dada es comparteix amb tercers",

      form_label_nom_alumne: "Nom de l'alumne/a",
      form_label_edat: "Edat",
      form_label_tutor: "Nom del pare, mare o tutor/a",
      form_label_telefon: "Telèfon de contacte",
      form_label_email: "Correu electrònic",
      form_label_missatge: "Comentari (opcional)",
      form_placeholder_missatge: "Interessos, disponibilitat horària...",
      form_submit: "Enviar sol·licitud per WhatsApp",
      form_note: "S'obrirà WhatsApp amb les dades ja escrites, perquè només hagis de prémer enviar.",
      form_success: "Perfecte! T'hem obert WhatsApp amb la sol·licitud a punt. Si no s'ha obert, escriu-nos al 633 454 159.",

      contact_eyebrow: "T'hi esperem",
      contact_title: "Vine a conèixer l'espai",
      contact_lead: "Al centre de Vilafranca del Penedès.",
      contact1_title: "Adreça",
      contact1_desc: "Carrer Puigmoltó, 5<br>08720 Vilafranca del Penedès",
      contact1_link: "Obrir a Google Maps →",
      contact2_title: "Telèfon i WhatsApp",
      contact2_link: "Escriu-nos per WhatsApp →",
      contact3_title: "Correu electrònic",
      contact3_link: "Envia un correu →",

      footer_logo_alt: "Pixel Penedès - Programació i robòtica",
      footer_rights: "Pixel Penedès. Tots els drets reservats.",
      whatsapp_float_aria: "Escriu-nos per WhatsApp",

      wa_float_message: "Hola! Voldria informació sobre les classes de Pixel Penedès",
      wa_greeting: "Hola! Voldria reservar una classe gratuïta a Pixel Penedès.",
      wa_alumne_label: "Alumne/a",
      wa_years_unit: "anys",
      wa_contact_label: "Contacte",
      wa_email_label: "Correu",
      wa_comment_label: "Comentari"
    },
    es: {
      meta_title: "Pixel Penedès | Academia de programación, videojuegos e impresión 3D en Vilafranca del Penedès",
      meta_description: "Clases de programación, diseño de videojuegos, impresión 3D y creación de contenido para niños y niñas de 6 a 16 años en Vilafranca del Penedès. Reserva ahora una clase gratuita en Pixel Penedès.",
      og_title: "Pixel Penedès | Programación, videojuegos, 3D y creación de contenido para niños y niñas",
      og_description: "En Vilafranca del Penedès enseñamos a niños y niñas de 6 a 16 años a programar, crear videojuegos, diseñar en 3D y crear contenido. La primera clase es gratuita.",

      skip_link: "Ir al contenido principal",
      brand_aria: "Pixel Penedès - Inicio",
      logo_alt: "Logotipo de Pixel Penedès",
      nav_aria: "Navegación principal",

      nav_videojocs: "Videojuegos",
      nav_3d: "Diseño 3D",
      nav_programacio: "Programación",
      nav_creador: "Creador",
      nav_itinerari: "Itinerario",
      nav_faq: "Preguntas",
      nav_contacte: "Contacto",
      cta_header: "Clase gratuita",
      nav_toggle_open: "Abrir el menú",
      nav_toggle_close: "Cerrar el menú",

      hero_tag: "Vilafranca del Penedès · de 6 a 16 años",
      hero_title: "Aprenden a programar jugando, diseñando e imprimiendo sus propias ideas",
      hero_lead: "En Pixel Penedès los niños y niñas crean videojuegos, aprenden a programar de verdad, diseñan objetos en 3D y publican sus propios vídeos. Grupos reducidos, profesorado cercano y la primera clase, gratuita.",
      cta_reserve: "Reserva una clase gratuita",
      hero_point1: "Grupos reducidos por edades",
      hero_point2: "Proyectos propios, no fichas",
      hero_point3: "Clase de prueba sin compromiso",

      mode_presencial_label: "Presencial",
      mode_presencial_sub: "En la academia de Vilafranca",
      mode_online_label: "Online",
      mode_online_sub: "En directo por Zoom",

      canvas_aria: "Área interactiva de píxeles: pasa el dedo o el ratón para pintar cuadrados de colores",
      pixel_hint: "Arrastra el ratón o el dedo para dibujar",
      pixel_clear: "Borrar",

      gallery_eyebrow: "Dentro de la academia",
      gallery_title: "Así son nuestras clases",
      gallery_lead: "Grupos pequeños, un mentor cerca de cada pantalla y un proyecto propio entre manos, no un ejercicio a medias.",
      gallery_img1_alt: "Un grupo de alumnos de Pixel Penedès trabajando cada uno en su proyecto de pixel art, con un mentor supervisando la clase",
      gallery1_title: "Cada alumno, su proyecto",
      gallery1_sub: "Ritmo individual dentro de un grupo reducido",
      gallery_img2_alt: "Un mentor de Pixel Penedès ayudando a tres alumnos con su proyecto de diseño de personajes en el ordenador",
      gallery2_title: "Siempre acompañados",
      gallery2_sub: "Un mentor cerca de cada pantalla",

      feat1_img_alt: "Ilustración de un videojuego de plataformas en pixel art creado por los alumnos, con los logotipos de Minecraft Education, Roblox Studio, GDevelop y Unity",
      feat1_eyebrow: "01 · Diseño y creación de videojuegos",
      feat1_title: "Crea tu propio videojuego, no un ejercicio",
      feat1_desc: "Los alumnos diseñan niveles, personajes y mecánicas de juego con herramientas pensadas para cada edad: desde los primeros mundos en Minecraft Education hasta juegos completos en Roblox Studio. Cada proyecto es suyo, desde la idea inicial hasta la versión jugable.",

      feat2_img_alt: "Impresora 3D imprimiendo un dragón diseñado por los alumnos, con el logotipo de Bambu Studio",
      feat2_eyebrow: "02 · Diseño e impresión 3D",
      feat2_title: "De la pantalla al objeto real",
      feat2_desc: "Diseñar en el ordenador es el primer paso. Ver cómo su idea sale de la impresora, en forma de objeto que se puede tocar, es lo que lo hace memorable. Modelan, preparan el archivo y siguen todo el proceso de impresión.",
      feat2_chip1: "Modelado 3D",
      feat2_chip3: "Impresión paso a paso",
      feat2_chip4: "Proyectos propios",

      feat3_img_alt: "Pantalla de ordenador con código Python para crear un videojuego, con los logotipos de Python e inteligencia artificial",
      feat3_eyebrow: "03 · Lenguajes de programación",
      feat3_title: "Del bloque de colores al código real",
      feat3_desc: "A partir de los 11-12 años, los alumnos dan el salto de la programación por bloques al código escrito de verdad: Python para entender la lógica de fondo, y los lenguajes propios de motores como Unity o Roblox para dar vida a sus juegos.",
      feat3_chip4: "Inteligencia artificial",

      feat4_img_alt: "Logotipo de YouTube en neón con las herramientas de edición CapCut y Canva",
      feat4_eyebrow: "04 · Creador de contenido",
      feat4_title: "De jugar a su juego a contárselo al mundo",
      feat4_desc: "Aprenden a grabar, editar y publicar vídeos sobre sus propios proyectos: guionizar una idea, montarla con CapCut y diseñar miniaturas y portadas con Canva. Comunicación, creatividad y criterio, con YouTube como escenario final.",

      itin_eyebrow: "Un camino, cuatro etapas",
      itin_title: "Itinerario formativo, de los 6 a los 16 años",
      itin_lead: "Cada etapa refuerza la anterior y abre una nueva. Los alumnos se incorporan a la franja que les corresponde y avanzan a su ritmo.",
      itin1_age: "6–8 años",
      itin1_title: "Primeros pasos",
      itin1_desc: "Pensamiento computacional, programación por bloques y primeras formas sencillas en 3D. Se trabaja jugando, en grupos muy reducidos.",
      itin2_age: "9–11 años",
      itin2_title: "Creación guiada",
      itin2_desc: "Scratch avanzado, primeros videojuegos propios en Minecraft Education o Roblox Studio y modelado 3D listo para imprimir.",
      itin3_age: "12–14 años",
      itin3_title: "Código real",
      itin3_desc: "Python, diseño 3D más técnico y videojuegos con motores gráficos completos como Unity.",
      itin4_age: "15–16 años",
      itin4_title: "Proyecto y portfolio",
      itin4_desc: "Proyectos propios de entidad, portfolio personal y orientación hacia bachillerato tecnológico o ciclos formativos.",

      ben_eyebrow: "Más allá del código",
      ben_title: "Qué se llevan, cada semana",
      ben_lead: "Programar, diseñar, imprimir y publicar son la excusa. Lo que trabajamos de fondo es más amplio.",
      ben1_title: "Pensamiento lógico",
      ben1_desc: "Aprenden a dividir un problema grande en pasos pequeños y a probar soluciones hasta que funcionan.",
      ben2_title: "Creatividad aplicada",
      ben2_desc: "Cada proyecto nace de su idea: el juego, el personaje o el vídeo es suyo de principio a fin.",
      ben3_title: "Trabajo en equipo",
      ben3_desc: "Presentan lo que hacen, se ayudan entre compañeros y aprenden a explicar sus decisiones.",
      ben4_title: "Uso responsable de la tecnología",
      ben4_desc: "Entienden cómo funciona lo que utilizan cada día, en lugar de consumirlo sin saberlo.",
      ben5_title: "Constancia",
      ben5_desc: "Los proyectos se construyen a lo largo de varias sesiones: aprenden a perseverar hasta terminarlos.",
      ben6_title: "Preparación de futuro",
      ben6_desc: "Competencias STEAM cada vez más valoradas, en un entorno cercano y sin presión de evaluarlos.",

      faq_eyebrow: "Dudas frecuentes",
      faq_title: "Preguntas frecuentes",
      faq_lead: "Lo que nos preguntan más a menudo las familias antes de apuntarse.",
      faq0_q: "¿Hacéis clases online?",
      faq0_a: "Sí. Además de las clases presenciales en Vilafranca del Penedès, ofrecemos clases online en directo por Zoom, con un profesor en directo (no vídeos grabados) y en grupos reducidos, con exactamente el mismo seguimiento que en la academia.",
      faq1_q: "¿Mi hijo o hija necesita saber ya algo de programación?",
      faq1_a: "No, en absoluto. La mayoría de alumnos empiezan sin ninguna experiencia previa. Cada grupo se adapta al nivel real de los niños y niñas que lo forman, no a un temario fijo.",
      faq2_q: "¿Qué material necesita?",
      faq2_a: "Nada que tenga que comprar por adelantado. En la academia disponemos del hardware y el software necesario, incluidas las impresoras 3D. Solo hace falta que venga con ganas de probar cosas.",
      faq3_q: "¿Cómo son los grupos?",
      faq3_a: "Grupos reducidos organizados por franja de edad (6–8, 9–11, 12–14 y 15–16 años), para que el ritmo de cada sesión tenga sentido para todos.",
      faq4_q: "¿Dónde son las clases y cómo puedo conocer los horarios?",
      faq4_a: "Hacemos las clases en nuestro espacio de la calle Puigmoltó, 5, en Vilafranca del Penedès. Los horarios se organizan por grupos: escríbenos por WhatsApp o correo y te confirmamos la disponibilidad actual.",
      faq5_q: "¿Qué incluye la clase gratuita?",
      faq5_a: "Una sesión real, con el grupo que le correspondería por edad, para que el niño o la niña la viva tal como será después. Sin ningún compromiso de continuidad.",
      faq6_q: "¿Cómo reservo la clase de prueba?",
      faq6_a: "Rellenando el formulario de esta página o escribiéndonos directamente por WhatsApp. Te contactamos para confirmar día y grupo en menos de 24-48 horas laborables.",

      res_eyebrow: "Sin compromiso",
      res_title: "Reserva la clase gratuita",
      res_lead: "Cuéntanos un poco sobre el niño o la niña y te confirmamos día y grupo. Sin compromiso, sin letra pequeña.",
      res_point1: "Respuesta en menos de 48h laborables",
      res_point2: "Grupo según la edad real",
      res_point3: "Ningún dato se comparte con terceros",

      form_label_nom_alumne: "Nombre del alumno/a",
      form_label_edat: "Edad",
      form_label_tutor: "Nombre del padre, madre o tutor/a",
      form_label_telefon: "Teléfono de contacto",
      form_label_email: "Correo electrónico",
      form_label_missatge: "Comentario (opcional)",
      form_placeholder_missatge: "Intereses, disponibilidad horaria...",
      form_submit: "Enviar solicitud por WhatsApp",
      form_note: "Se abrirá WhatsApp con los datos ya escritos, para que solo tengas que pulsar enviar.",
      form_success: "¡Perfecto! Te hemos abierto WhatsApp con la solicitud lista. Si no se ha abierto, escríbenos al 633 454 159.",

      contact_eyebrow: "Te esperamos",
      contact_title: "Ven a conocer el espacio",
      contact_lead: "En el centro de Vilafranca del Penedès.",
      contact1_title: "Dirección",
      contact1_desc: "Carrer Puigmoltó, 5<br>08720 Vilafranca del Penedès",
      contact1_link: "Abrir en Google Maps →",
      contact2_title: "Teléfono y WhatsApp",
      contact2_link: "Escríbenos por WhatsApp →",
      contact3_title: "Correo electrónico",
      contact3_link: "Envía un correo →",

      footer_logo_alt: "Pixel Penedès - Programación y robótica",
      footer_rights: "Pixel Penedès. Todos los derechos reservados.",
      whatsapp_float_aria: "Escríbenos por WhatsApp",

      wa_float_message: "¡Hola! Me gustaría información sobre las clases de Pixel Penedès",
      wa_greeting: "¡Hola! Me gustaría reservar una clase gratuita en Pixel Penedès.",
      wa_alumne_label: "Alumno/a",
      wa_years_unit: "años",
      wa_contact_label: "Contacto",
      wa_email_label: "Correo",
      wa_comment_label: "Comentario"
    }
  };

  var STORAGE_KEY = "pixelpenedes_lang";
  var currentLang = "ca";

  function getStoredLang() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "ca" || stored === "es") return stored;
    } catch (e) {
      /* localStorage no disponible: s'ignora i es fa servir el valor per defecte */
    }
    return null;
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* s'ignora si no es pot desar */
    }
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = "ca";
    currentLang = lang;
    var dict = translations[lang];

    document.documentElement.lang = lang;

    var ogLocale = document.getElementById("ogLocale");
    if (ogLocale) ogLocale.setAttribute("content", lang === "es" ? "es_ES" : "ca_ES");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-content");
      if (dict[key] !== undefined) el.setAttribute("content", dict[key]);
    });

    // Botó flotant de WhatsApp amb missatge traduït
    var waFloat = document.getElementById("whatsappFloat");
    if (waFloat) {
      waFloat.href = "https://wa.me/34633454159?text=" + encodeURIComponent(dict.wa_float_message);
    }

    // Estat visual dels botons d'idioma
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    // Etiqueta del botó de menú mòbil (respecta l'estat obert/tancat actual)
    var navToggleBtn = document.getElementById("navToggle");
    var mainNavEl = document.getElementById("main-nav");
    if (navToggleBtn && mainNavEl) {
      var isNavOpen = mainNavEl.classList.contains("is-open");
      navToggleBtn.setAttribute("aria-label", isNavOpen ? dict.nav_toggle_close : dict.nav_toggle_open);
    }

    storeLang(lang);
  }

  /* Botons de canvi d'idioma (CAT | ES) */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Idioma inicial: preferència desada, si n'hi ha, si no, català per defecte
  applyLanguage(getStoredLang() || "ca");

  /* =========================================================
     Any actual al footer
     ========================================================= */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     Entrada suau en fer scroll (reveal)
     ========================================================= */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* =========================================================
     Logotip -> torna sempre a l'inici real de la pàgina
     ========================================================= */
  var brandLink = document.querySelector(".brand");
  if (brandLink) {
    brandLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      if (history.pushState) {
        history.pushState(null, "", window.location.pathname + window.location.search);
      }
    });
  }

  /* =========================================================
     Logotip -> torna sempre a l'inici de la pàgina
     ========================================================= */
  var brandLink = document.querySelector(".brand");
  if (brandLink) {
    brandLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
      if (history.pushState) {
        history.pushState(null, "", window.location.pathname + window.location.search);
      }
    });
  }

  /* =========================================================
     Menú mòbil
     ========================================================= */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      var dict = translations[currentLang];
      navToggle.setAttribute("aria-label", isOpen ? dict.nav_toggle_close : dict.nav_toggle_open);
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", translations[currentLang].nav_toggle_open);
      });
    });
  }

  /* =========================================================
     Acordió de preguntes freqüents
     ========================================================= */
  var faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(function (btn) {
    var answer = btn.nextElementSibling;
    answer.style.maxHeight = "0px";

    btn.addEventListener("click", function () {
      var isOpen = btn.getAttribute("aria-expanded") === "true";

      // Tanca la resta d'ítems oberts (efecte acordió)
      faqQuestions.forEach(function (otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute("aria-expanded", "false");
          otherBtn.nextElementSibling.style.maxHeight = "0px";
        }
      });

      btn.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = isOpen ? "0px" : answer.scrollHeight + "px";
    });
  });

  /* =========================================================
     Canvas de píxels interactiu (hero)
     ========================================================= */
  var canvas = document.getElementById("pixelCanvas");
  var clearBtn = document.getElementById("pixelClear");

  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var GRID = 16;
    var palette = ["#F25920", "#FCAF15", "#0B3B6F", "#F7F4EC"];
    var cellState = [];
    var cssSize = canvas.clientWidth || 640;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
      cssSize = canvas.clientWidth || 640;
      canvas.width = cssSize * dpr;
      canvas.height = cssSize * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function emptyGrid() {
      var grid = [];
      for (var i = 0; i < GRID * GRID; i++) grid.push(null);
      return grid;
    }
    cellState = emptyGrid();

    function draw() {
      var cell = cssSize / GRID;
      ctx.clearRect(0, 0, cssSize, cssSize);
      ctx.fillStyle = "#17191C";
      ctx.fillRect(0, 0, cssSize, cssSize);

      for (var y = 0; y < GRID; y++) {
        for (var x = 0; x < GRID; x++) {
          var color = cellState[y * GRID + x];
          if (color) {
            ctx.fillStyle = color;
            ctx.fillRect(x * cell + 1, y * cell + 1, cell - 2, cell - 2);
          }
        }
      }

      // Graella subtil
      ctx.strokeStyle = "rgba(247,244,236,0.06)";
      ctx.lineWidth = 1;
      for (var g = 1; g < GRID; g++) {
        ctx.beginPath();
        ctx.moveTo(g * cell, 0);
        ctx.lineTo(g * cell, cssSize);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, g * cell);
        ctx.lineTo(cssSize, g * cell);
        ctx.stroke();
      }
    }

    function paintAt(clientX, clientY, colorOverride) {
      var rect = canvas.getBoundingClientRect();
      var cell = rect.width / GRID;
      var x = Math.floor((clientX - rect.left) / cell);
      var y = Math.floor((clientY - rect.top) / cell);
      if (x < 0 || y < 0 || x >= GRID || y >= GRID) return;
      var idx = y * GRID + x;
      cellState[idx] = colorOverride || palette[Math.floor(Math.random() * palette.length)];
      draw();
    }

    var pointerDown = false;

    canvas.addEventListener("pointerdown", function (e) {
      pointerDown = true;
      paintAt(e.clientX, e.clientY);
    });
    canvas.addEventListener("pointermove", function (e) {
      if (pointerDown) paintAt(e.clientX, e.clientY);
    });
    window.addEventListener("pointerup", function () {
      pointerDown = false;
    });
    canvas.addEventListener(
      "touchmove",
      function (e) {
        if (e.touches && e.touches[0]) {
          paintAt(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      { passive: true }
    );

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        cellState = emptyGrid();
        draw();
      });
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Espurna ambient: il·lumina algun píxel de tant en tant si l'usuari no hi interactua
    if (!prefersReducedMotion) {
      var idleTimer = setInterval(function () {
        var idx = Math.floor(Math.random() * cellState.length);
        if (!cellState[idx]) {
          cellState[idx] = palette[Math.floor(Math.random() * palette.length)];
          draw();
          (function (i) {
            setTimeout(function () {
              cellState[i] = null;
              draw();
            }, 2600);
          })(idx);
        }
      }, 900);

      // Atura l'animació ambient si la pestanya no és visible
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) clearInterval(idleTimer);
      });
    }
  }

  /* =========================================================
     Formulari de reserva -> obre WhatsApp amb el missatge
     ========================================================= */
  var form = document.getElementById("reservaForm");
  var successMsg = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var nomAlumne = form.nomAlumne.value.trim();
      var edatAlumne = form.edatAlumne.value.trim();
      var nomTutor = form.nomTutor.value.trim();
      var telefon = form.telefon.value.trim();
      var email = form.email.value.trim();
      var missatge = form.missatge.value.trim();

      var valid = true;
      [form.nomAlumne, form.edatAlumne, form.nomTutor, form.telefon].forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = "#D2470F";
          valid = false;
        } else {
          field.style.borderColor = "";
        }
      });

      if (!valid) {
        if (successMsg) {
          successMsg.hidden = true;
        }
        return;
      }

      var dict = translations[currentLang];

      var lines = [
        dict.wa_greeting,
        dict.wa_alumne_label + ": " + nomAlumne + " (" + edatAlumne + " " + dict.wa_years_unit + ")",
        dict.wa_contact_label + ": " + nomTutor + " - " + telefon
      ];
      if (email) lines.push(dict.wa_email_label + ": " + email);
      if (missatge) lines.push(dict.wa_comment_label + ": " + missatge);

      var text = encodeURIComponent(lines.join("\n"));
      var waUrl = "https://wa.me/34633454159?text=" + text;

      window.open(waUrl, "_blank", "noopener");

      if (successMsg) {
        successMsg.hidden = false;
        successMsg.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
      }
    });
  }

  /* =========================================================
     Ombra a la capçalera en fer scroll
     ========================================================= */
  var header = document.querySelector(".site-header");
  if (header) {
    var lastScrolled = false;
    window.addEventListener(
      "scroll",
      function () {
        var scrolled = window.scrollY > 8;
        if (scrolled !== lastScrolled) {
          header.style.boxShadow = scrolled ? "0 2px 0 0 rgba(18,20,28,0.08)" : "none";
          lastScrolled = scrolled;
        }
      },
      { passive: true }
    );
  }
})();
