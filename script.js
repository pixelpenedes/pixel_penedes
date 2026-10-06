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
      footer_nav_aria: "Enllaços del peu",
      whatsapp_float_aria: "Escriu-nos per WhatsApp",

      wa_float_message: "Hola! Voldria informació sobre les classes de Pixel Penedès",
      wa_greeting: "Hola! Voldria reservar una classe gratuïta a Pixel Penedès.",
      wa_alumne_label: "Alumne/a",
      wa_years_unit: "anys",
      wa_contact_label: "Contacte",
      wa_email_label: "Correu",
      wa_comment_label: "Comentari",

      /* ---------- Empreses (empresas.html i enllaços des de la home) ---------- */
      nav_empreses: "Empreses",
      b2b_nav_inici: "Inici",
      b2b_nav_com: "Com funciona",
      b2b_nav_beneficis: "Beneficis",
      b2b_cta_header: "Informació per a empreses",

      accred_eyebrow: "Acreditacions",
      accred_title: "Una acadèmia acreditada pels referents de la tecnologia",
      accred_lead: "Certificacions en educació tecnològica d'AWS, Microsoft i Google.",
      accred_label: "Acreditacions",
      accred_group_aria: "Acreditacions de Pixel Penedès",

      b2b_banner_eyebrow: "Per a empreses",
      b2b_banner_title: "Ofereix aquest benefici als empleats de la teva empresa",
      b2b_banner_lead: "Un programa de beneficis perquè els fills i filles dels teus empleats aprenguin tecnologia a Pixel Penedès. Nosaltres ens encarreguem de la resta.",
      b2b_banner_cta: "Descobreix el programa",

      b2b_meta_title: "Pixel Penedès Family Benefits | Beneficis per a empleats i conciliació",
      b2b_meta_description: "Beneficis per a empleats: cursos de programació, videojocs i tecnologia per als fills de 6 a 16 anys, presencials i online. Pixel Penedès gestiona la resta.",
      b2b_og_title: "Pixel Penedès Family Benefits | Un benefici per a les famílies dels teus empleats",
      b2b_og_description: "Conciliació, benestar i formació tecnològica per als fills dels teus empleats. Cursos presencials i online de 6 a 16 anys, sense feina extra per a RRHH.",

      b2b_hero_tag: "Pixel Penedès Family Benefits",
      b2b_hero_title1: "Cuida del teu equip.",
      b2b_hero_title2: "Facilita el seu dia a dia.",
      b2b_hero_meta: "Cursos presencials i online · De 6 a 16 anys · Durant tot el curs",
      b2b_hero_lead: "Ajuda els teus empleats a conciliar la vida laboral i familiar oferint als seus fills accés a formació en programació, videojocs i tecnologia en condicions exclusives.",
      b2b_cta_primary: "Vull informació per a la meva empresa",
      b2b_cta_how: "Com funciona?",
      b2b_hero_point1: "Gestió completa a càrrec de Pixel Penedès",
      b2b_hero_point2: "Classes presencials i online en directe",
      b2b_hero_point3: "Sol·licitud d'informació sense compromís",

      b2b_band_eyebrow: "Un programa pensat per a empreses",
      b2b_band_title: "Un benefici que combina conciliació, educació i tecnologia",
      b2b_band1_title: "Conciliació",
      b2b_band1_desc: "Facilita el dia a dia de les famílies.",
      b2b_band2_title: "Formació",
      b2b_band2_desc: "Els fills aprenen competències digitals reals.",
      b2b_band3_title: "Benestar",
      b2b_band3_desc: "Un benefici que les persones poden valorar en el seu dia a dia.",

      b2b_prob_eyebrow: "Benestar laboral",
      b2b_prob_title: "La conciliació també forma part del benestar laboral",
      b2b_prob_text1: "Quan una persona treballa i té fills, organitzar el dia a dia pot convertir-se en un autèntic repte.",
      b2b_prob_text2: "Moltes empreses ja ofereixen beneficis relacionats amb la salut, la flexibilitat o el benestar. Amb el nostre curs de programació, creativitat digital, 3D i intel·ligència artificial començaran a desenvolupar avui les competències que necessitaran demà.",
      b2b_prob_label1: "El que moltes empreses ja ofereixen",
      b2b_prob_chip1: "Salut",
      b2b_prob_chip2: "Flexibilitat",
      b2b_prob_chip3: "Formació",
      b2b_prob_chip4: "Benestar",
      b2b_prob_quote: "Perquè cuidar les persones també significa facilitar-los el dia a dia.",

      b2b_value_eyebrow: "Per als empleats i les seves famílies",
      b2b_value_title: "Un benefici que les famílies poden aprofitar de veritat",
      b2b_value1_title: "Més conciliació",
      b2b_value1_desc: "Una activitat educativa que ajuda les famílies a organitzar millor el seu dia a dia.",
      b2b_value2_title: "Més oportunitats",
      b2b_value2_desc: "Els seus fills desenvolupen competències digitals mentre creen projectes que els motiven.",
      b2b_value3_title: "Més valor per al teu equip",
      b2b_value3_desc: "Un benefici diferencial que demostra que l'empresa pensa també en les famílies.",

      b2b_areas_eyebrow: "Què aprenen els fills",
      b2b_areas_title: "Tecnologia que els motiva. Aprenentatges que els acompanyen.",
      b2b_areas_lead: "Projectes propis, no fitxes. Això és el que rep cada família.",
      b2b_area1_title: "Creació de videojocs",
      b2b_area1_desc: "Dissenyen els seus propis videojocs, nivells i personatges, amb eines adaptades a cada edat.",
      b2b_area2_title: "Programació",
      b2b_area2_desc: "Passen dels blocs al codi real, amb llenguatges com Python, i entenen com funciona la tecnologia.",
      b2b_area3_title: "Disseny i impressió 3D",
      b2b_area3_desc: "Dissenyen models en 3D, experimenten amb les seves idees i aprenen com transformar un disseny digital en una peça real.",
      b2b_area4_title: "Tecnologia i IA",
      b2b_area4_desc: "Descobreixen la intel·ligència artificial i creen contingut digital amb eines que ja formen part del seu dia a dia.",

      b2b_ages_eyebrow: "De 6 a 16 anys",
      b2b_ages_title: "Una proposta per a cada edat",
      b2b_ages_lead: "Els grups s'organitzen per franja d'edat, perquè cada sessió tingui sentit per a tothom.",
      b2b_age1_desc: "Primer contacte amb la tecnologia i la creació digital, jugant i en grups molt reduïts.",
      b2b_age2_desc: "Primers videojocs propis, programació per blocs avançada i modelatge 3D.",
      b2b_age3_desc: "Programació amb codi real, disseny 3D més tècnic i videojocs amb motors gràfics.",
      b2b_age4_desc: "Projectes més avançats i orientació cap a batxillerat tecnològic o cicles formatius.",

      b2b_modes_title: "Dues modalitats. Una mateixa experiència d'aprenentatge.",
      b2b_mode1_title: "Aprendre cara a cara",
      b2b_mode1_desc: "Classes presencials a Pixel Penedès, a Vilafranca del Penedès.",
      b2b_mode2_title: "Aprendre des de qualsevol lloc",
      b2b_mode2_desc: "Classes online en directe, amb professorat i interacció real. No són classes gravades.",
      b2b_live_badge: "En directe",

      b2b_how_eyebrow: "Com funciona",
      b2b_how_title: "La teva empresa ho posa a disposició. Nosaltres ens encarreguem de la resta.",
      b2b_step1_title: "Parlem",
      b2b_step1_desc: "Ens expliques les necessitats de la teva empresa i del teu equip.",
      b2b_step2_title: "Preparem la proposta",
      b2b_step2_desc: "Definim conjuntament com oferir el benefici als teus empleats.",
      b2b_step3_title: "Ho comuniques al teu equip",
      b2b_step3_desc: "Et facilitem la informació necessària perquè puguis comunicar-ho internament.",
      b2b_step4_title: "Les famílies s'inscriuen",
      b2b_step4_desc: "Les famílies interessades contacten directament amb Pixel Penedès.",
      b2b_step5_title: "Comencen les classes",
      b2b_step5_desc: "Nosaltres gestionem les inscripcions, els grups i les classes.",
      b2b_how_highlight: "Sense afegir més feina al teu departament de RRHH.",

      b2b_ben_eyebrow: "Per a l'empresa",
      b2b_ben_title: "Més que un descompte",
      b2b_ben_lead: "Un benefici social que pensa en les persones i en les seves famílies.",
      b2b_ben1_title: "Conciliació",
      b2b_ben1_desc: "Ajuda les famílies a combinar millor la vida laboral i personal.",
      b2b_ben2_title: "Benestar",
      b2b_ben2_desc: "Un benefici pensat per al dia a dia de les persones.",
      b2b_ben3_title: "Fidelització",
      b2b_ben3_desc: "Millora la percepció de l'empresa com a lloc on treballar.",
      b2b_ben4_title: "Diferenciació",
      b2b_ben4_desc: "Una proposta diferent dins del paquet de beneficis per als empleats.",

      b2b_cond_eyebrow: "Condicions",
      b2b_cond_title: "Condicions exclusives per a empreses col·laboradores",
      b2b_cond_text: "Les empreses que s'incorporen al programa poden oferir als seus empleats condicions especials d'accés als nostres cursos.",
      b2b_cond_cta: "Consultar les condicions per a la meva empresa",
      b2b_cond_note: "Sol·licita informació sense compromís.",

      b2b_admin_eyebrow: "Per a RRHH",
      b2b_admin_title: "Pensat perquè sigui fàcil d'implementar",
      b2b_admin_lead: "Tu comuniques el benefici. Nosaltres fem que funcioni.",
      b2b_admin1: "Informar les famílies",
      b2b_admin2: "Gestionar les inscripcions",
      b2b_admin3: "Organitzar els grups",
      b2b_admin4: "Gestionar les classes",
      b2b_admin5: "Resoldre dubtes relacionats amb el servei",
      b2b_admin_note: "L'empresa no ha de gestionar el dia a dia de les classes.",

      b2b_why_eyebrow: "Qui som",
      b2b_why_title: "Una acadèmia especialitzada en tecnologia per a nens i joves",
      b2b_why_lead: "Pixel Penedès és una acadèmia de Vilafranca del Penedès centrada en l'educació tecnològica.",
      b2b_why1: "Especialització en educació tecnològica",
      b2b_why2: "Programació i videojocs",
      b2b_why3: "Disseny i impressió 3D",
      b2b_why4: "Tecnologia i intel·ligència artificial",
      b2b_why5: "Professorat proper",
      b2b_why6: "Grups reduïts",
      b2b_why7: "Presencial i online en directe",
      b2b_why8: "Experiència treballant amb nens i joves",

      b2b_cls_eyebrow: "Les nostres classes",
      b2b_cls_title: "Un benefici que facilita el dia a dia",
      b2b_cls_title2: "Aprendre, crear i conciliar",
      b2b_cls_p1: "Una activitat educativa que s'adapta al dia a dia de cada família, amb classes online en directe perquè els nens i joves puguin aprendre, crear i desenvolupar els seus propis projectes de tecnologia.",
      b2b_cls_p2: "Programació, videojocs, 3D i tecnologia, amb un professor que els acompanya en directe i grups reduïts adaptats a cada edat.",
      b2b_cls_close: "Més flexibilitat per a les famílies. Més valor per als teus empleats.",
      b2b_cls_img1_alt: "Classe online en directe: el professor comparteix pantalla amb codi i un personatge de videojoc mentre l'alumnat segueix la sessió per videotrucada",
      b2b_cls_img2_alt: "Un pare i el seu fill rient davant d'un portàtil mentre programen un joc amb blocs",
      b2b_cls_img3_alt: "Una mare teletreballant amb el portàtil mentre el seu fill dibuixa en una tauleta",
      b2b_cls_img4_alt: "Impressora 3D Bambu Lab amb diverses figures de colors impreses sobre la placa",

      b2b_faq_title: "Preguntes freqüents de les empreses",
      b2b_faq_lead: "Resolem els dubtes habituals abans de començar.",
      b2b_faq1_q: "Quines edats poden participar?",
      b2b_faq1_a: "De 6 a 16 anys. Els grups s'organitzen per franja d'edat, perquè cada sessió tingui sentit per a tothom.",
      b2b_faq2_q: "Les classes poden ser online?",
      b2b_faq2_a: "Sí. Oferim classes presencials a Vilafranca del Penedès i classes online, perquè cada família triï la modalitat que li va millor.",
      b2b_faq3_q: "Les classes online són en directe?",
      b2b_faq3_a: "Sí. Són classes en directe per Zoom, amb professorat i interacció real. No són vídeos gravats.",
      b2b_faq4_q: "On es fan les classes presencials?",
      b2b_faq4_a: "Al nostre espai del carrer Puigmoltó, 5, a Vilafranca del Penedès.",
      b2b_faq5_q: "Qui gestiona les inscripcions?",
      b2b_faq5_a: "Pixel Penedès. Les famílies interessades contacten directament amb nosaltres i ens encarreguem de les inscripcions i dels grups.",
      b2b_faq6_q: "L'empresa ha de gestionar els pagaments?",
      b2b_faq6_a: "L'empresa no ha de gestionar el dia a dia del servei: les famílies es relacionen directament amb Pixel Penedès. Els detalls concrets es defineixen amb cada empresa a la proposta.",
      b2b_faq7_q: "Podem oferir el benefici a tots els empleats?",
      b2b_faq7_a: "La idea és que el benefici estigui a disposició de tot l'equip. Els detalls els definim amb cada empresa.",
      b2b_faq8_q: "Podem començar amb un grup reduït?",
      b2b_faq8_a: "Sí, es pot començar de manera progressiva. Explica'ns la teva situació i valorem la millor manera d'arrencar.",
      b2b_faq9_q: "Quines condicions especials oferiu a les empreses?",
      b2b_faq9_a: "Les empreses col·laboradores poden accedir a unes condicions específiques. Contacta amb nosaltres i t'explicarem la proposta adaptada a la teva empresa.",

      b2b_final_eyebrow: "Parlem",
      b2b_final_title: "Parlem de com podem oferir aquest benefici al teu equip",
      b2b_final_lead: "Explica'ns breument la teva empresa i et contactarem per explicar-te com funciona el programa.",
      b2b_final_cta: "Vull informació",
      b2b_final_point1: "Sol·licitud sense compromís",
      b2b_final_point2: "Proposta adaptada a la teva empresa",
      b2b_final_point3: "Cap dada es comparteix amb tercers",

      b2b_form_nom: "Nom",
      b2b_form_cognoms: "Cognoms",
      b2b_form_empresa: "Empresa",
      b2b_form_carrec: "Càrrec / Departament",
      b2b_form_email: "Email corporatiu",
      b2b_form_telefon: "Telèfon",
      b2b_form_empleats: "Nombre aproximat d'empleats",
      b2b_form_families: "Nombre aproximat de famílies interessades (opcional)",
      b2b_form_modalitat: "Modalitat d'interès",
      b2b_form_mod_choose: "Selecciona una opció",
      b2b_form_mod_presencial: "Presencial",
      b2b_form_mod_online: "Online",
      b2b_form_mod_both: "Ambdues",
      b2b_form_missatge: "Missatge (opcional)",
      b2b_form_privacy: "Accepto la política de privacitat.",
      b2b_form_submit: "Sol·licitar informació",
      b2b_form_error: "Revisa els camps marcats i accepta la política de privacitat per continuar.",

      b2b_wa_message: "Hola, m'interessa el programa de beneficis per a empreses de Pixel Penedès.",
      b2b_wa_greeting: "Hola! M'interessa el programa de beneficis per a empreses de Pixel Penedès.",
      b2b_wa_name: "Nom",
      b2b_wa_company: "Empresa",
      b2b_wa_role: "Càrrec",
      b2b_wa_phone: "Telèfon",
      b2b_wa_email: "Email",
      b2b_wa_employees: "Empleats (aprox.)",
      b2b_wa_families: "Famílies interessades (aprox.)",
      b2b_wa_mode: "Modalitat",
      b2b_wa_message_label: "Missatge"
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
      footer_nav_aria: "Enlaces del pie",
      whatsapp_float_aria: "Escríbenos por WhatsApp",

      wa_float_message: "¡Hola! Me gustaría información sobre las clases de Pixel Penedès",
      wa_greeting: "¡Hola! Me gustaría reservar una clase gratuita en Pixel Penedès.",
      wa_alumne_label: "Alumno/a",
      wa_years_unit: "años",
      wa_contact_label: "Contacto",
      wa_email_label: "Correo",
      wa_comment_label: "Comentario",

      /* ---------- Empresas (empresas.html y enlaces desde la home) ---------- */
      nav_empreses: "Empresas",
      b2b_nav_inici: "Inicio",
      b2b_nav_com: "Cómo funciona",
      b2b_nav_beneficis: "Beneficios",
      b2b_cta_header: "Información para empresas",

      accred_eyebrow: "Acreditaciones",
      accred_title: "Una academia acreditada por los referentes de la tecnología",
      accred_lead: "Certificaciones en educación tecnológica de AWS, Microsoft y Google.",
      accred_label: "Acreditaciones",
      accred_group_aria: "Acreditaciones de Pixel Penedès",

      b2b_banner_eyebrow: "Para empresas",
      b2b_banner_title: "Ofrece este beneficio a los empleados de tu empresa",
      b2b_banner_lead: "Un programa de beneficios para que los hijos e hijas de tus empleados aprendan tecnología en Pixel Penedès. Nosotros nos encargamos del resto.",
      b2b_banner_cta: "Descubre el programa",

      b2b_meta_title: "Pixel Penedès Family Benefits | Beneficios para empleados y conciliación",
      b2b_meta_description: "Beneficios para empleados: cursos de programación, videojuegos y tecnología para sus hijos de 6 a 16 años, presenciales y online. Pixel Penedès gestiona el resto.",
      b2b_og_title: "Pixel Penedès Family Benefits | Un beneficio para las familias de tus empleados",
      b2b_og_description: "Conciliación, bienestar y formación tecnológica para los hijos de tus empleados. Cursos presenciales y online de 6 a 16 años, sin trabajo extra para RRHH.",

      b2b_hero_tag: "Pixel Penedès Family Benefits",
      b2b_hero_title1: "Cuida de tu equipo.",
      b2b_hero_title2: "Facilita su día a día.",
      b2b_hero_meta: "Cursos presenciales y online · De 6 a 16 años · Durante todo el curso",
      b2b_hero_lead: "Ayuda a tus empleados a conciliar la vida laboral y familiar ofreciendo a sus hijos acceso a formación en programación, videojuegos y tecnología en condiciones exclusivas.",
      b2b_cta_primary: "Quiero información para mi empresa",
      b2b_cta_how: "¿Cómo funciona?",
      b2b_hero_point1: "Gestión completa a cargo de Pixel Penedès",
      b2b_hero_point2: "Clases presenciales y online en directo",
      b2b_hero_point3: "Solicitud de información sin compromiso",

      b2b_band_eyebrow: "Un programa pensado para empresas",
      b2b_band_title: "Un beneficio que combina conciliación, educación y tecnología",
      b2b_band1_title: "Conciliación",
      b2b_band1_desc: "Facilita el día a día de las familias.",
      b2b_band2_title: "Formación",
      b2b_band2_desc: "Los hijos aprenden competencias digitales reales.",
      b2b_band3_title: "Bienestar",
      b2b_band3_desc: "Un beneficio que las personas pueden valorar en su día a día.",

      b2b_prob_eyebrow: "Bienestar laboral",
      b2b_prob_title: "La conciliación también forma parte del bienestar laboral",
      b2b_prob_text1: "Cuando una persona trabaja y tiene hijos, organizar el día a día puede convertirse en un auténtico reto.",
      b2b_prob_text2: "Muchas empresas ya ofrecen beneficios relacionados con la salud, la flexibilidad o el bienestar. Con nuestro curso de programación, creatividad digital, 3D e inteligencia artificial empezarán a desarrollar hoy las competencias que necesitarán mañana.",
      b2b_prob_label1: "Lo que muchas empresas ya ofrecen",
      b2b_prob_chip1: "Salud",
      b2b_prob_chip2: "Flexibilidad",
      b2b_prob_chip3: "Formación",
      b2b_prob_chip4: "Bienestar",
      b2b_prob_quote: "Porque cuidar de las personas también significa facilitarles el día a día.",

      b2b_value_eyebrow: "Para los empleados y sus familias",
      b2b_value_title: "Un beneficio que las familias pueden aprovechar de verdad",
      b2b_value1_title: "Más conciliación",
      b2b_value1_desc: "Una actividad educativa que ayuda a las familias a organizar mejor su día a día.",
      b2b_value2_title: "Más oportunidades",
      b2b_value2_desc: "Sus hijos desarrollan competencias digitales mientras crean proyectos que les motivan.",
      b2b_value3_title: "Más valor para tu equipo",
      b2b_value3_desc: "Un beneficio diferencial que demuestra que la empresa piensa también en las familias.",

      b2b_areas_eyebrow: "Qué aprenden los hijos",
      b2b_areas_title: "Tecnología que les motiva. Aprendizajes que les acompañan.",
      b2b_areas_lead: "Proyectos propios, no fichas. Esto es lo que recibe cada familia.",
      b2b_area1_title: "Creación de videojuegos",
      b2b_area1_desc: "Diseñan sus propios videojuegos, niveles y personajes, con herramientas adaptadas a cada edad.",
      b2b_area2_title: "Programación",
      b2b_area2_desc: "Pasan de los bloques al código real, con lenguajes como Python, y entienden cómo funciona la tecnología.",
      b2b_area3_title: "Diseño e impresión 3D",
      b2b_area3_desc: "Diseñan modelos en 3D, experimentan con sus ideas y aprenden cómo transformar un diseño digital en una pieza real.",
      b2b_area4_title: "Tecnología e IA",
      b2b_area4_desc: "Descubren la inteligencia artificial y crean contenido digital con herramientas que ya forman parte de su día a día.",

      b2b_ages_eyebrow: "De 6 a 16 años",
      b2b_ages_title: "Una propuesta para cada edad",
      b2b_ages_lead: "Los grupos se organizan por franja de edad, para que cada sesión tenga sentido para todos.",
      b2b_age1_desc: "Primer contacto con la tecnología y la creación digital, jugando y en grupos muy reducidos.",
      b2b_age2_desc: "Primeros videojuegos propios, programación por bloques avanzada y modelado 3D.",
      b2b_age3_desc: "Programación con código real, diseño 3D más técnico y videojuegos con motores gráficos.",
      b2b_age4_desc: "Proyectos más avanzados y orientación hacia bachillerato tecnológico o ciclos formativos.",

      b2b_modes_title: "Dos modalidades. Una misma experiencia de aprendizaje.",
      b2b_mode1_title: "Aprender cara a cara",
      b2b_mode1_desc: "Clases presenciales en Pixel Penedès, en Vilafranca del Penedès.",
      b2b_mode2_title: "Aprender desde cualquier lugar",
      b2b_mode2_desc: "Clases online en directo, con profesorado e interacción real. No son clases grabadas.",
      b2b_live_badge: "En directo",

      b2b_how_eyebrow: "Cómo funciona",
      b2b_how_title: "Tu empresa lo pone a disposición. Nosotros nos encargamos del resto.",
      b2b_step1_title: "Hablamos",
      b2b_step1_desc: "Nos cuentas las necesidades de tu empresa y de tu equipo.",
      b2b_step2_title: "Preparamos la propuesta",
      b2b_step2_desc: "Definimos juntos cómo ofrecer el beneficio a tus empleados.",
      b2b_step3_title: "Lo comunicas a tu equipo",
      b2b_step3_desc: "Te facilitamos la información necesaria para que puedas comunicarlo internamente.",
      b2b_step4_title: "Las familias se inscriben",
      b2b_step4_desc: "Las familias interesadas contactan directamente con Pixel Penedès.",
      b2b_step5_title: "Empiezan las clases",
      b2b_step5_desc: "Nosotros gestionamos las inscripciones, los grupos y las clases.",
      b2b_how_highlight: "Sin añadir más trabajo a tu departamento de RRHH.",

      b2b_ben_eyebrow: "Para la empresa",
      b2b_ben_title: "Más que un descuento",
      b2b_ben_lead: "Un beneficio social que piensa en las personas y en sus familias.",
      b2b_ben1_title: "Conciliación",
      b2b_ben1_desc: "Ayuda a las familias a combinar mejor la vida laboral y personal.",
      b2b_ben2_title: "Bienestar",
      b2b_ben2_desc: "Un beneficio pensado para el día a día de las personas.",
      b2b_ben3_title: "Fidelización",
      b2b_ben3_desc: "Mejora la percepción de la empresa como lugar donde trabajar.",
      b2b_ben4_title: "Diferenciación",
      b2b_ben4_desc: "Una propuesta distinta dentro del paquete de beneficios para los empleados.",

      b2b_cond_eyebrow: "Condiciones",
      b2b_cond_title: "Condiciones exclusivas para empresas colaboradoras",
      b2b_cond_text: "Las empresas que se incorporan al programa pueden ofrecer a sus empleados condiciones especiales de acceso a nuestros cursos.",
      b2b_cond_cta: "Consultar las condiciones para mi empresa",
      b2b_cond_note: "Solicita información sin compromiso.",

      b2b_admin_eyebrow: "Para RRHH",
      b2b_admin_title: "Pensado para que sea fácil de implementar",
      b2b_admin_lead: "Tú comunicas el beneficio. Nosotros hacemos que funcione.",
      b2b_admin1: "Informar a las familias",
      b2b_admin2: "Gestionar las inscripciones",
      b2b_admin3: "Organizar los grupos",
      b2b_admin4: "Gestionar las clases",
      b2b_admin5: "Resolver dudas relacionadas con el servicio",
      b2b_admin_note: "La empresa no tiene que gestionar el día a día de las clases.",

      b2b_why_eyebrow: "Quiénes somos",
      b2b_why_title: "Una academia especializada en tecnología para niños y jóvenes",
      b2b_why_lead: "Pixel Penedès es una academia de Vilafranca del Penedès centrada en la educación tecnológica.",
      b2b_why1: "Especialización en educación tecnológica",
      b2b_why2: "Programación y videojuegos",
      b2b_why3: "Diseño e impresión 3D",
      b2b_why4: "Tecnología e inteligencia artificial",
      b2b_why5: "Profesorado cercano",
      b2b_why6: "Grupos reducidos",
      b2b_why7: "Presencial y online en directo",
      b2b_why8: "Experiencia trabajando con niños y jóvenes",

      b2b_cls_eyebrow: "Nuestras clases",
      b2b_cls_title: "Un beneficio que facilita el día a día",
      b2b_cls_title2: "Aprender, crear y conciliar",
      b2b_cls_p1: "Una actividad educativa que se adapta al día a día de cada familia, con clases online en directo para que los niños y jóvenes puedan aprender, crear y desarrollar sus propios proyectos de tecnología.",
      b2b_cls_p2: "Programación, videojuegos, 3D y tecnología, con un profesor que les acompaña en directo y grupos reducidos adaptados a cada edad.",
      b2b_cls_close: "Más flexibilidad para las familias. Más valor para tus empleados.",
      b2b_cls_img1_alt: "Clase online en directo: el profesor comparte pantalla con código y un personaje de videojuego mientras el alumnado sigue la sesión por videollamada",
      b2b_cls_img2_alt: "Un padre y su hijo riendo delante de un portátil mientras programan un juego con bloques",
      b2b_cls_img3_alt: "Una madre teletrabajando con el portátil mientras su hijo dibuja en una tableta",
      b2b_cls_img4_alt: "Impresora 3D Bambu Lab con varias figuras de colores impresas sobre la placa",

      b2b_faq_title: "Preguntas frecuentes de las empresas",
      b2b_faq_lead: "Resolvemos las dudas habituales antes de empezar.",
      b2b_faq1_q: "¿Qué edades pueden participar?",
      b2b_faq1_a: "De 6 a 16 años. Los grupos se organizan por franja de edad, para que cada sesión tenga sentido para todos.",
      b2b_faq2_q: "¿Las clases pueden ser online?",
      b2b_faq2_a: "Sí. Ofrecemos clases presenciales en Vilafranca del Penedès y clases online, para que cada familia elija la modalidad que mejor le encaje.",
      b2b_faq3_q: "¿Las clases online son en directo?",
      b2b_faq3_a: "Sí. Son clases en directo por Zoom, con profesorado e interacción real. No son vídeos grabados.",
      b2b_faq4_q: "¿Dónde se hacen las clases presenciales?",
      b2b_faq4_a: "En nuestro espacio de la calle Puigmoltó, 5, en Vilafranca del Penedès.",
      b2b_faq5_q: "¿Quién gestiona las inscripciones?",
      b2b_faq5_a: "Pixel Penedès. Las familias interesadas contactan directamente con nosotros y nos encargamos de las inscripciones y de los grupos.",
      b2b_faq6_q: "¿La empresa tiene que gestionar los pagos?",
      b2b_faq6_a: "La empresa no tiene que gestionar el día a día del servicio: las familias se relacionan directamente con Pixel Penedès. Los detalles concretos se definen con cada empresa en la propuesta.",
      b2b_faq7_q: "¿Podemos ofrecer el beneficio a todos los empleados?",
      b2b_faq7_a: "La idea es que el beneficio esté a disposición de todo el equipo. Los detalles los definimos con cada empresa.",
      b2b_faq8_q: "¿Podemos empezar con un grupo reducido?",
      b2b_faq8_a: "Sí, se puede empezar de forma progresiva. Cuéntanos tu situación y valoramos la mejor manera de arrancar.",
      b2b_faq9_q: "¿Qué condiciones especiales ofrecéis a las empresas?",
      b2b_faq9_a: "Las empresas colaboradoras pueden acceder a unas condiciones específicas. Contacta con nosotros y te explicaremos la propuesta adaptada a tu empresa.",

      b2b_final_eyebrow: "Hablamos",
      b2b_final_title: "Hablemos de cómo podemos ofrecer este beneficio a tu equipo",
      b2b_final_lead: "Cuéntanos brevemente cómo es tu empresa y te contactaremos para explicarte cómo funciona el programa.",
      b2b_final_cta: "Quiero información",
      b2b_final_point1: "Solicitud sin compromiso",
      b2b_final_point2: "Propuesta adaptada a tu empresa",
      b2b_final_point3: "Ningún dato se comparte con terceros",

      b2b_form_nom: "Nombre",
      b2b_form_cognoms: "Apellidos",
      b2b_form_empresa: "Empresa",
      b2b_form_carrec: "Cargo / Departamento",
      b2b_form_email: "Email corporativo",
      b2b_form_telefon: "Teléfono",
      b2b_form_empleats: "Número aproximado de empleados",
      b2b_form_families: "Número aproximado de familias interesadas (opcional)",
      b2b_form_modalitat: "Modalidad de interés",
      b2b_form_mod_choose: "Selecciona una opción",
      b2b_form_mod_presencial: "Presencial",
      b2b_form_mod_online: "Online",
      b2b_form_mod_both: "Ambas",
      b2b_form_missatge: "Mensaje (opcional)",
      b2b_form_privacy: "Acepto la política de privacidad.",
      b2b_form_submit: "Solicitar información",
      b2b_form_error: "Revisa los campos marcados y acepta la política de privacidad para continuar.",

      b2b_wa_message: "Hola, me interesa el programa de beneficios para empresas de Pixel Penedès.",
      b2b_wa_greeting: "¡Hola! Me interesa el programa de beneficios para empresas de Pixel Penedès.",
      b2b_wa_name: "Nombre",
      b2b_wa_company: "Empresa",
      b2b_wa_role: "Cargo",
      b2b_wa_phone: "Teléfono",
      b2b_wa_email: "Email",
      b2b_wa_employees: "Empleados (aprox.)",
      b2b_wa_families: "Familias interesadas (aprox.)",
      b2b_wa_mode: "Modalidad",
      b2b_wa_message_label: "Mensaje"
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

    // Enllaços de WhatsApp amb un missatge propi (data-wa-key), p. ex. a la pàgina d'empreses
    document.querySelectorAll("[data-wa-key]").forEach(function (el) {
      var msg = dict[el.getAttribute("data-wa-key")];
      if (msg !== undefined) el.href = "https://wa.me/34633454159?text=" + encodeURIComponent(msg);
    });

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
     Logotip -> torna sempre a l'inici de la pàgina.
     Només si és un enllaç intern (#top); a empresas.html apunta a index.html
     ========================================================= */
  var brandLink = document.querySelector(".brand");
  if (brandLink && brandLink.getAttribute("href").charAt(0) === "#") {
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
     Formulari d'empreses -> obre WhatsApp amb el missatge
     (mateixa arquitectura que el formulari de reserva)
     ========================================================= */
  var empresaForm = document.getElementById("empresaForm");

  if (empresaForm) {
    var empresaSuccess = document.getElementById("empresaSuccess");
    var empresaError = document.getElementById("empresaError");
    var privacyBox = document.getElementById("empPrivacitat");
    var modalitatSel = document.getElementById("empModalitat");
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    empresaForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var f = empresaForm.elements;
      var valid = true;

      ["empNom", "empEmpresa", "empTelefon", "empEmail"].forEach(function (id) {
        var field = f[id];
        var ok = field.value.trim() !== "" && (id !== "empEmail" || emailRe.test(field.value.trim()));
        field.style.borderColor = ok ? "" : "#D2470F";
        field.setAttribute("aria-invalid", String(!ok));
        if (!ok) valid = false;
      });

      if (!privacyBox.checked) valid = false;
      privacyBox.setAttribute("aria-invalid", String(!privacyBox.checked));

      if (!valid) {
        empresaError.hidden = false;
        empresaSuccess.hidden = true;
        return;
      }
      empresaError.hidden = true;

      var dict = translations[currentLang];
      var fullName = (f.empNom.value.trim() + " " + f.empCognoms.value.trim()).trim();
      var role = f.empCarrec.value.trim();
      var employees = f.empEmpleats.value.trim();
      var families = f.empFamilies.value.trim();
      var modality = modalitatSel.value ? modalitatSel.options[modalitatSel.selectedIndex].text : "";
      var message = f.empMissatge.value.trim();

      var lines = [
        dict.b2b_wa_greeting,
        dict.b2b_wa_name + ": " + fullName,
        dict.b2b_wa_company + ": " + f.empEmpresa.value.trim()
      ];
      if (role) lines.push(dict.b2b_wa_role + ": " + role);
      lines.push(dict.b2b_wa_phone + ": " + f.empTelefon.value.trim());
      lines.push(dict.b2b_wa_email + ": " + f.empEmail.value.trim());
      if (employees) lines.push(dict.b2b_wa_employees + ": " + employees);
      if (families) lines.push(dict.b2b_wa_families + ": " + families);
      if (modality) lines.push(dict.b2b_wa_mode + ": " + modality);
      if (message) lines.push(dict.b2b_wa_message_label + ": " + message);

      window.open("https://wa.me/34633454159?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");

      empresaSuccess.hidden = false;
      empresaSuccess.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
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
