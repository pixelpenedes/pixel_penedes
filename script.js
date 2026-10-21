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
      faq_dur_q: "Quant duren les classes?",
      faq_dur_a: "Cada alumne fa una classe setmanal de 90 minuts, tant en les classes presencials com en les online en directe.",
      faq_desc_q: "Hi ha descomptes per a famílies?",
      faq_desc_a: "Sí. Apliquem un 10% de descompte amb el carnet de família nombrosa, un 15% amb el Carnet Jove i un 10% si l'alumne té un germà o germana al centre. Els descomptes no són acumulables.",
      faq5_q: "Què inclou la classe gratuïta?",
      faq5_a: "Una sessió real, amb el grup que li correspondria per edat, perquè el nen o la nena la visqui tal com serà després. Sense cap compromís de continuïtat.",
      faq6_q: "Com reservo la classe de prova?",
      faq6_a: "Omplint el formulari d'aquesta pàgina o escrivint-nos directament per WhatsApp. Et contactem per confirmar dia i grup en menys de 24-48 hores laborables.",

      res_eyebrow: "Sense compromís",
      res_title: "Reserva la classe gratuïta",
      res_lead: "Explica'ns una mica sobre el nen o la nena i et confirmem dia i grup. Sense compromís, sense lletra petita.",
      res_descomptes: "Descomptes per a famílies: 10% amb carnet de família nombrosa · 15% amb el Carnet Jove · 10% si té un germà o germana al centre. No acumulables.",
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

      footer_logo_alt: "Pixel Penedès - Acadèmia de tecnologia per a nens i joves",
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
      b2b_hero_meta: "Cursos presencials i online · De 6 a 16 anys · Classes setmanals de 90 minuts · Durant tot el curs",
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
      b2b_cls_p2: "Programació, videojocs, 3D i tecnologia, amb un professor que els acompanya en directe i grups reduïts adaptats a cada edat. Classes setmanals de 90 minuts.",
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
      b2b_wa_message_label: "Missatge",

      /* ---------- Pàgina: programació per a nens a Vilafranca ---------- */
      halloween_badge: "Novetat",
      halloween_title: "Especial Halloween",
      halloween_caption: "Túnel del Terror · 31 d'octubre i 1 de novembre · de 17.30h a 20.30h",
      halloween_img1_alt: "Cartell: has trobat la targeta del diable? El posseïdor i un acompanyant podreu entrar gratis el 31 d'octubre i l'1 de novembre, de 17.30h a 20.30h",
      halloween_img2_alt: "Cartell del Túnel del Terror: t'atreveixes a entrar? 31 d'octubre i 1 de novembre, de 17.30h a 20.30h, 1 euro, carrer Puigmoltó 5, Vilafranca",

      prog_index_link: "Classes de programació a Vilafranca →",
      prog_wa_message: "Hola! Voldria informació sobre les classes de programació de Pixel Penedès",
      prog_meta_title: "Classes de programació per a nens a Vilafranca | Pixel Penedès",
      prog_meta_description: "Classes de programació per a nens i joves de 6 a 16 anys a Vilafranca del Penedès: Scratch, Python, Roblox i Unity. Grups reduïts i primera classe gratuïta.",
      prog_og_title: "Classes de programació per a nens i joves a Vilafranca del Penedès",
      prog_og_description: "Programació, videojocs i 3D amb projectes propis. Grups reduïts per edats, presencial a Vilafranca i online en directe. La primera classe és gratuïta.",
      prog_breadcrumb_aria: "Fil d'Ariadna",
      prog_breadcrumb_current: "Programació per a nens a Vilafranca",
      prog_h1: "Classes de programació per a nens i joves a Vilafranca del Penedès",
      prog_lead: "Els nens i nenes aprenen a programar fent el que més els motiva: crear els seus propis videojocs i projectes. Dels primers blocs de colors al codi real, amb grups reduïts i un mentor a prop de cada pantalla.",
      prog_point1: "De 6 a 16 anys",
      prog_point2: "Presencial a Vilafranca i online en directe",

      prog_intro_eyebrow: "Programació per a nens",
      prog_intro_title: "Aprendre a programar és aprendre a crear",
      prog_intro_p1: "A Pixel Penedès la programació no és un temari de fitxes. Els alumnes plantegen un projecte propi (un joc, un personatge, un món) i aprenen el que cal per fer-lo funcionar: seqüències, bucles, condicions, variables i lògica.",
      prog_intro_p2: "Treballem amb eines pensades per a cada edat. Els més petits comencen amb programació per blocs; a partir dels 11-12 anys fan el salt al codi escrit de veritat, amb Python i amb els llenguatges dels motors de joc.",
      prog_intro_p3: "Així entenen com funciona la tecnologia que fan servir cada dia, en comptes de limitar-se a consumir-la.",

      prog_stages_eyebrow: "Un camí, quatre etapes",
      prog_stages_title: "Com aprenen a programar, etapa per etapa",
      prog_stages_lead: "Cada franja d'edat té el seu propi grup i el seu propi ritme.",
      prog_stage1: "Pensament computacional i programació per blocs. Aprenen les idees bàsiques (ordre, repetició, causa i efecte) jugant i en grups molt reduïts.",
      prog_stage2: "Scratch avançat i primers videojocs propis a Minecraft Education o Roblox Studio, amb projectes que s'allarguen diverses sessions.",
      prog_stage3: "Salt al codi escrit: Python per entendre la lògica de fons i els llenguatges dels motors de joc, com Roblox Lua o Unity.",
      prog_stage4: "Projectes propis amb més abast, portfoli personal i orientació cap a batxillerat tecnològic o cicles formatius.",

      prog_tools_eyebrow: "Eines i llenguatges",
      prog_tools_title: "Amb què programen",
      prog_tools_lead: "Escollim l'eina segons l'edat i el nivell de cada grup.",

      prog_how_eyebrow: "A l'aula",
      prog_how_title: "Com són les nostres classes de programació",
      prog_how1_title: "Grups reduïts per edats",
      prog_how1_desc: "Els grups s'organitzen per franja d'edat (6–8, 9–11, 12–14 i 15–16 anys) perquè el ritme de cada sessió tingui sentit per a tothom.",
      prog_how2_title: "Un mentor a prop",
      prog_how2_desc: "Cada alumne avança en el seu projecte amb un mentor que l'acompanya i li resol els dubtes en el moment.",
      prog_how3_title: "Sense experiència prèvia",
      prog_how3_desc: "La majoria d'alumnes comencen de zero. Cada grup s'adapta al nivell real dels nens i nenes que el formen.",
      prog_how4_title: "Projectes propis",
      prog_how4_desc: "Cada projecte és seu, de la idea inicial a la versió jugable. No són exercicis a mig fer.",
      prog_how5_title: "Material inclòs",
      prog_how5_desc: "A l'acadèmia disposem del maquinari i el programari necessari. Només cal venir amb ganes de provar coses.",
      prog_how6_title: "Presencial o online",
      prog_how6_desc: "Classes presencials a Vilafranca del Penedès o online en directe per Zoom, amb professor en directe (no vídeos gravats).",

      prog_more_title: "Més que programació",
      prog_more_lead: "Programar és només una part del que fem. Descobreix les altres àrees de l'acadèmia.",
      prog_more1: "Dissenyen els seus propis videojocs a Minecraft Education o Roblox Studio.",
      prog_more2: "Modelen en 3D i veuen la seva idea sortir d'una impressora 3D.",
      prog_more3: "Graven, editen i publiquen vídeos sobre els seus propis projectes.",
      prog_more_link: "Veure a la pàgina principal →",

      prog_faq_title: "Preguntes sobre les classes de programació",
      prog_faq_age_q: "Des de quina edat poden començar a programar?",
      prog_faq_age_a: "Des dels 6 anys. Fins als 16, els grups s'organitzen per franja d'edat: 6–8, 9–11, 12–14 i 15–16 anys.",
      prog_faq_lang_q: "Quins llenguatges de programació aprenen?",
      prog_faq_lang_a: "Depèn de l'edat: blocs i Scratch els primers anys i, a partir dels 11-12 anys, Python i els llenguatges dels motors de joc, com Roblox Lua o Unity.",

      /* ---------- Cookies ---------- */
      ck_banner_aria: "Avís de cookies",
      ck_banner_title: "Les teves cookies",
      ck_banner_text: "Fem servir cookies analítiques (Google Analytics) per entendre com s'utilitza el web i millorar-lo. Només s'activen si les acceptes. Pots canviar la teva decisió quan vulguis.",
      ck_accept: "Acceptar",
      ck_reject: "Rebutjar",
      ck_more: "Més informació",
      ck_footer_link: "Cookies",
      ck_meta_title: "Política de cookies | Pixel Penedès",
      ck_meta_description: "Informació sobre les cookies que fa servir Pixel Penedès, per a què serveixen i com acceptar-les, rebutjar-les o canviar la teva decisió.",
      ck_breadcrumb: "Política de cookies",
      ck_h1: "Política de cookies",
      ck_updated: "Última actualització: 20 d'octubre de 2026",
      ck_s1_title: "Qui n'és el responsable",
      ck_s1_p: "Gloria Gany Cruz Paredes (autònoma, nom comercial Pixel Penedès) · NIF 49768223H · Carrer Puigmoltó, 5, 08720 Vilafranca del Penedès · pixelpenedes@gmail.com · 633 454 159",
      ck_s2_title: "Què són les cookies",
      ck_s2_p: "Les cookies són petits fitxers que un web desa al teu navegador. Serveixen, per exemple, per recordar una decisió o per mesurar quantes persones visiten el web.",
      ck_s3_title: "Quines fem servir",
      ck_tech_title: "Tècniques (sempre actives)",
      ck_tech_p: "Desem al teu navegador (emmagatzematge local) la decisió que prens sobre les cookies, perquè no t'ho hàgim de tornar a preguntar a cada visita. No conté dades personals.",
      ck_an_title: "Analítiques (només si les acceptes)",
      ck_an_p: "Fem servir Google Analytics per saber, de manera agregada, quines pàgines es visiten i com arriben les persones al web. Google Analytics desa cookies com _ga i _ga_G-JGKTFHFFLJ, que poden durar fins a 2 anys. No fem servir cookies publicitàries ni de màrqueting.",
      ck_s4_title: "Com canviar o retirar el consentiment",
      ck_s4_p: "Pots canviar la teva decisió en qualsevol moment amb el botó següent, o esborrant les dades del web des de la configuració del teu navegador.",
      ck_change_btn: "Canviar la meva decisió",
      ck_s5_title: "Altres serveis",
      ck_s5_p: "Els enllaços a WhatsApp et porten a un servei extern, amb la seva pròpia política de privacitat i de cookies.",
      ck_s6_title: "Contacte",
      ck_s6_p: "Si tens qualsevol dubte sobre aquesta política, escriu-nos a pixelpenedes@gmail.com.",

      /* ---------- Privacitat ---------- */
      pv_footer_link: "Privacitat",
      pv_meta_title: "Política de privacitat | Pixel Penedès",
      pv_meta_description: "Com tractem les dades personals que ens facilites als formularis, per WhatsApp o per correu: responsable, finalitat, drets i conservació.",
      pv_breadcrumb: "Política de privacitat",
      pv_h1: "Política de privacitat",
      pv_updated: "Última actualització: 20 d'octubre de 2026",
      pv_s1_title: "Responsable del tractament",
      pv_s1_p: "Gloria Gany Cruz Paredes (autònoma, nom comercial Pixel Penedès) · NIF 49768223H · Carrer Puigmoltó, 5, 08720 Vilafranca del Penedès · pixelpenedes@gmail.com · 633 454 159",
      pv_s2_title: "Quines dades recollim i per a què",
      pv_s2_p0: "Tractem únicament les dades que tu ens facilites, amb aquestes finalitats:",
      pv_s2_li1: "Reserva de classe gratuïta (famílies): nom i edat de l'alumne/a, nom del pare, mare o tutor/a, telèfon, correu electrònic (opcional) i comentari. Les fem servir per confirmar dia i grup i posar-nos en contacte amb tu.",
      pv_s2_li2: "Programa per a empreses: nom, cognoms, empresa, càrrec o departament, correu corporatiu, telèfon, nombre aproximat d'empleats i de famílies, modalitat d'interès i missatge. Les fem servir per respondre't i, si cal, enviar-te la proposta del programa.",
      pv_s2_li3: "Missatges directes (WhatsApp o correu): les dades que ens enviïs, només per atendre la teva consulta.",
      pv_s3_title: "Com arriben les dades fins a nosaltres",
      pv_s3_p: "Els formularis del web no desen les dades en cap servidor del web. En enviar-los s'obre WhatsApp amb el missatge ja escrit, i les dades només ens arriben si tu prems «enviar». A partir d'aquí, la conversa també es regeix per les condicions de WhatsApp (Meta).",
      pv_s4_title: "Base jurídica",
      pv_s4_p: "El teu consentiment (art. 6.1.a RGPD), que dones en enviar el formulari o el missatge, i l'aplicació de mesures precontractuals a petició teva, com ara la reserva d'una classe (art. 6.1.b RGPD).",
      pv_s5_title: "Menors d'edat",
      pv_s5_p: "Les dades dels nens i joves les facilita el pare, mare o tutor/a legal, que declara tenir-ne la representació i dona el consentiment en nom seu.",
      pv_s6_title: "Quant de temps les conservem",
      pv_s6_p: "Mentre gestionem la teva sol·licitud o es mantingui la relació amb la família o l'empresa, i després, bloquejades, durant els terminis legals aplicables. Pots demanar-ne la supressió en qualsevol moment.",
      pv_s7_title: "Destinataris",
      pv_s7_p: "No cedim les teves dades a tercers, tret d'obligació legal. Fem servir serveis tècnics d'altres empreses (com WhatsApp de Meta, el correu de Google i el proveïdor d'allotjament del web), que poden tractar dades per compte nostre. Si hi ha transferències internacionals, es basen en les garanties adequades que preveu la normativa.",
      pv_s8_title: "Analítica web i cookies",
      pv_s8_p: "L'analítica del web només s'activa si l'acceptes. Tens tota la informació a la política de cookies.",
      pv_cookies_link: "Política de cookies",
      pv_s9_title: "Els teus drets",
      pv_s9_p: "Pots accedir a les teves dades, rectificar-les, suprimir-les, oposar-te al tractament, demanar-ne la limitació o la portabilitat i retirar el consentiment quan vulguis, escrivint a pixelpenedes@gmail.com i indicant el teu nom i el dret que vols exercir. Si consideres que no s'han respectat els teus drets, pots reclamar a l'Agència Espanyola de Protecció de Dades (www.aepd.es).",
      pv_s10_title: "Seguretat",
      pv_s10_p: "Apliquem mesures tècniques i organitzatives raonables per protegir les dades i només hi accedeix la persona responsable de l'acadèmia.",
      priv_form_note: "Les dades només s'utilitzen per respondre la teva sol·licitud.",
      priv_link: "Política de privacitat",
      b2b_form_privacy_a: "Accepto la ",
      b2b_form_privacy_link: "política de privacitat",

      /* ---------- Avís legal ---------- */
      lg_footer_link: "Avís legal",
      lg_meta_title: "Avís legal | Pixel Penedès",
      lg_meta_description: "Dades d'identificació del titular del web de Pixel Penedès, condicions d'ús, propietat intel·lectual, responsabilitat i legislació aplicable.",
      lg_breadcrumb: "Avís legal",
      lg_h1: "Avís legal",
      lg_updated: "Última actualització: 20 d'octubre de 2026",
      lg_s1_title: "Identificació del titular",
      lg_s1_p0: "En compliment de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s'informa que el titular d'aquest web és:",
      lg_s1_p: "Gloria Gany Cruz Paredes (autònoma, nom comercial Pixel Penedès) · NIF 49768223H · Carrer Puigmoltó, 5, 08720 Vilafranca del Penedès · pixelpenedes@gmail.com · 633 454 159",
      lg_s1_p2: "Activitat: acadèmia de formació tecnològica (programació, videojocs, disseny i impressió 3D, tecnologia) per a nens i joves.",
      lg_s2_title: "Objecte i acceptació",
      lg_s2_p: "Aquest web té caràcter informatiu i comercial sobre els serveis de Pixel Penedès. Accedir-hi i utilitzar-lo implica acceptar aquest avís legal; si no hi estàs d'acord, et demanem que no l'utilitzis.",
      lg_s3_title: "Condicions d'ús",
      lg_s3_p: "Et comprometes a fer un ús lícit, honest i respectuós del web, sense danyar-ne el funcionament, sense intentar accedir a àrees restringides i sense utilitzar-lo per a finalitats il·legals o contràries a la bona fe. Les dades que ens facilitis als formularis han de ser veritables i, en el cas dels menors, les ha de facilitar el seu pare, mare o tutor/a legal.",
      lg_s4_title: "Propietat intel·lectual i industrial",
      lg_s4_p1: "Els textos, el disseny, el logotip, les imatges i la resta de continguts del web són titularitat de Pixel Penedès o s'utilitzen amb autorització. No es permet reproduir-los, distribuir-los ni transformar-los sense permís previ i per escrit, tret dels usos que permeti la llei.",
      lg_s4_p2: "Les marques, logotips i noms de tercers (com ara Roblox, Minecraft, Unity, Scratch, Python, AWS, Microsoft o Google) pertanyen als seus respectius propietaris i s'esmenten només amb finalitat informativa.",
      lg_s5_title: "Informació del web",
      lg_s5_p: "La informació publicada és orientativa i no constitueix una oferta contractual vinculant. Els horaris, els grups, les places i, en el cas del programa per a empreses, les condicions concretes es confirmen sempre de manera individual abans de qualsevol inscripció o acord.",
      lg_s6_title: "Responsabilitat",
      lg_s6_p: "Fem el possible perquè el web estigui disponible i la informació sigui correcta, però no garantim que no hi hagi interrupcions ni errors, i ens reservem el dret de modificar-lo o retirar-ne continguts sense avís previ. No ens fem responsables dels danys derivats d'un ús inadequat del web.",
      lg_s7_title: "Enllaços a altres webs",
      lg_s7_p: "El web pot contenir enllaços a serveis de tercers (per exemple, WhatsApp). No en controlem els continguts ni les polítiques, i per tant no en som responsables.",
      lg_s8_title: "Protecció de dades i cookies",
      lg_s8_p: "Pots consultar com tractem les teves dades personals i quines cookies fem servir a la política de privacitat i a la política de cookies.",
      lg_s8_link1: "Política de privacitat",
      lg_s8_link2: "Política de cookies",
      lg_s9_title: "Legislació aplicable i jurisdicció",
      lg_s9_p: "Aquest avís legal es regeix per la legislació espanyola. Per resoldre qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals que corresponguin segons la normativa aplicable i, si ets consumidor o usuari, als del teu domicili.",
      lg_s10_title: "Modificacions i contacte",
      lg_s10_p: "Podem actualitzar aquest avís legal quan sigui necessari; la data d'actualització figura a dalt. Per a qualsevol dubte, escriu-nos a pixelpenedes@gmail.com.",

      /* ---------- Pàgines de servei: videojocs, impressió 3D i extraescolars ---------- */
      svc_more_link: "Més informació →",
      svc_prog_card: "Del bloc de colors al codi real: Scratch, Python, Roblox Lua i Unity.",
      svc_others_title: "Altres àrees de l'acadèmia",
      svc_others_lead: "Descobreix què més fan els nens i joves a Pixel Penedès.",
      vj_index_link: "Classes de videojocs a Vilafranca →",
      d3_index_link: "Classes d'impressió 3D a Vilafranca →",
      ex_index_link: "Extraescolars de tecnologia a Vilafranca",
      ex_footer_link: "Extraescolars de tecnologia",
      vj_wa_message: "Hola! Voldria informació sobre les classes de videojocs de Pixel Penedès",
      vj_meta_title: "Classes de videojocs per a nens a Vilafranca | Pixel Penedès",
      vj_meta_description: "Curs de creació de videojocs per a nens i joves de 6 a 16 anys a Vilafranca del Penedès: Minecraft Education, Roblox Studio i Unity. Grups reduïts i primera classe gratuïta.",
      vj_og_title: "Classes de creació de videojocs per a nens i joves a Vilafranca del Penedès",
      vj_og_description: "Dissenyen els seus propis videojocs, nivells i personatges. Grups reduïts per edats, presencial a Vilafranca i online en directe. La primera classe és gratuïta.",
      vj_breadcrumb_current: "Videojocs per a nens a Vilafranca",
      vj_course_name: "Classes de creació de videojocs per a nens i joves",
      vj_teach_design: "Disseny de videojocs",
      vj_h1: "Classes de creació de videojocs per a nens i joves a Vilafranca del Penedès",
      vj_lead: "A Pixel Penedès els nens i nenes no només juguen: dissenyen nivells, personatges i mecàniques i construeixen el seu propi videojoc, de la idea inicial a la versió jugable. Grups reduïts i un mentor a prop de cada pantalla.",
      vj_intro_eyebrow: "Videojocs per a nens",
      vj_intro_title: "Del joc que juguen al joc que creen",
      vj_intro_p1: "Als nens i nenes els encanten els videojocs. A Pixel Penedès aprofitem aquesta motivació perquè passin de ser jugadors a ser creadors: pensen una idea, la dissenyen i la fan funcionar.",
      vj_intro_p2: "Comencen amb eines pensades per a la seva edat, com els primers mons a Minecraft Education, i avancen cap a jocs complets a Roblox Studio i, més endavant, motors com Unity.",
      vj_intro_p3: "Pel camí practiquen la lògica, la creativitat i la constància, perquè han de fer que el seu propi joc funcioni.",
      vj_steps_eyebrow: "Procés de creació",
      vj_steps_title: "Com es crea un videojoc, pas a pas",
      vj_steps_lead: "Cada projecte segueix el mateix camí que un joc de debò.",
      vj_step1_title: "Idea i disseny",
      vj_step1_desc: "Decideixen quin tipus de joc volen fer, com serà el protagonista i quin món recorrerà.",
      vj_step2_title: "Nivells i personatges",
      vj_step2_desc: "Construeixen escenaris, dissenyen personatges i defineixen les regles del joc.",
      vj_step3_title: "Mecàniques i codi",
      vj_step3_desc: "Donen vida al joc amb blocs o amb codi, segons l'edat: moviment, punts, objectius.",
      vj_step4_title: "Versió jugable",
      vj_step4_desc: "Proven el joc, el milloren i el deixen a punt perquè altres el puguin jugar.",
      vj_tools_eyebrow: "Eines",
      vj_tools_title: "Amb quines eines creen els jocs",
      vj_ages_eyebrow: "Per edats",
      vj_ages_title: "Quin videojoc crea cada edat",
      vj_age1_desc: "Primers passos amb la programació per blocs, jugant i en grups molt reduïts.",
      vj_age2_desc: "Primers videojocs propis a Minecraft Education o Roblox Studio, amb projectes que s'allarguen diverses sessions.",
      vj_age3_desc: "Videojocs amb motors gràfics complets com Unity i amb el llenguatge Roblox Lua.",
      vj_age4_desc: "Projectes propis amb més abast i un portfoli personal.",
      vj_faq_title: "Preguntes sobre les classes de videojocs",
      vj_faq1_q: "Quins videojocs poden crear els nens?",
      vj_faq1_a: "Depèn de l'edat i de l'eina: des de mons i petites aventures a Minecraft Education fins a jocs complets a Roblox Studio o amb motors com Unity. El projecte sempre és seu.",
      vj_faq2_q: "A partir de quina edat poden crear videojocs?",
      vj_faq2_a: "Des dels 6 anys, amb eines adaptades a cada edat. Fins als 16, els grups s'organitzen per franja d'edat.",
      d3_wa_message: "Hola! Voldria informació sobre les classes d'impressió 3D de Pixel Penedès",
      d3_meta_title: "Classes d'impressió 3D per a nens a Vilafranca | Pixel Penedès",
      d3_meta_description: "Classes de disseny i impressió 3D per a nens i joves de 6 a 16 anys a Vilafranca del Penedès: modelen, preparen el fitxer i imprimeixen. Grups reduïts i primera classe gratuïta.",
      d3_og_title: "Classes de disseny i impressió 3D per a nens i joves a Vilafranca del Penedès",
      d3_og_description: "Dissenyen una peça a l'ordinador i la veuen sortir d'una impressora 3D. Grups reduïts per edats a Vilafranca del Penedès. La primera classe és gratuïta.",
      d3_breadcrumb_current: "Impressió 3D per a nens a Vilafranca",
      d3_course_name: "Classes de disseny i impressió 3D per a nens i joves",
      d3_teach_print: "Impressió 3D",
      d3_h1: "Disseny i impressió 3D per a nens i joves a Vilafranca del Penedès",
      d3_lead: "Els nens i nenes dissenyen un objecte a l'ordinador i el veuen sortir d'una impressora 3D. Modelen, preparen el fitxer i segueixen tot el procés d'impressió, amb grups reduïts i un mentor a prop.",
      d3_point2: "Impressores 3D a l'acadèmia",
      d3_intro_eyebrow: "Impressió 3D per a nens",
      d3_intro_title: "Dissenyar en 3D i tenir-ho a les mans",
      d3_intro_p1: "Dissenyar a l'ordinador és només el primer pas. El que ho fa memorable és veure com la seva idea surt de la impressora, en forma d'objecte que es pot tocar.",
      d3_intro_p2: "A l'acadèmia disposem de les impressores 3D i del programari necessari, de manera que els alumnes no han de comprar res: només aportar la imaginació.",
      d3_intro_p3: "Treballen la visió espacial i la constància: una peça es dissenya, es prepara i s'imprimeix, i cada projecte és seu de principi a fi.",
      d3_steps_eyebrow: "Procés",
      d3_steps_title: "De la idea a la peça imprimida",
      d3_steps_lead: "Aquest és el camí que segueix cada projecte.",
      d3_step1_title: "Idea",
      d3_step1_desc: "Decideixen què volen crear: una figura, un personatge, un objecte.",
      d3_step2_title: "Modelatge 3D",
      d3_step2_desc: "Ho dissenyen a l'ordinador i li donen forma amb programari de modelatge.",
      d3_step3_title: "Preparar el fitxer",
      d3_step3_desc: "Preparen el model per imprimir-lo amb Bambu Studio.",
      d3_step4_title: "Impressió",
      d3_step4_desc: "Segueixen tot el procés d'impressió i veuen la seva peça fer-se realitat.",
      d3_tools_eyebrow: "Eines",
      d3_tools_title: "Amb què treballen",
      d3_ages_eyebrow: "Per edats",
      d3_ages_title: "Disseny 3D, etapa per etapa",
      d3_age1_desc: "Primeres formes senzilles en 3D, jugant i en grups molt reduïts.",
      d3_age2_desc: "Modelatge 3D llest per imprimir.",
      d3_age3_desc: "Disseny 3D més tècnic i peces més elaborades.",
      d3_age4_desc: "Projectes propis amb més abast i un portfoli personal.",
      d3_faq_title: "Preguntes sobre les classes d'impressió 3D",
      d3_faq1_q: "Cal saber dissenyar en 3D per començar?",
      d3_faq1_a: "No. Es comença des de zero amb formes senzilles i cada grup s'adapta al nivell real dels nens i nenes que el formen.",
      d3_faq2_q: "Des de quina edat poden fer disseny 3D?",
      d3_faq2_a: "Des dels 6 anys, amb formes senzilles. Amb l'edat, el disseny es va fent més tècnic.",
      d3_faq3_q: "Amb quin programari preparen les peces?",
      d3_faq3_a: "Amb Bambu Studio, el programari que fem servir a l'acadèmia per preparar el fitxer abans d'imprimir.",
      ex_wa_message: "Hola! Voldria informació sobre les extraescolars de tecnologia de Pixel Penedès",
      ex_meta_title: "Extraescolars de tecnologia a Vilafranca per a nens i joves | Pixel Penedès",
      ex_meta_description: "Extraescolars de programació, videojocs i impressió 3D per a nens i joves de 6 a 16 anys a Vilafranca del Penedès. Presencial i online en directe, grups reduïts i primera classe gratuïta.",
      ex_og_title: "Extraescolars de tecnologia per a nens i joves a Vilafranca del Penedès",
      ex_og_description: "Programació, videojocs, disseny i impressió 3D i creació de contingut en una mateixa acadèmia. Presencial i online en directe. La primera classe és gratuïta.",
      ex_breadcrumb_current: "Extraescolars de tecnologia a Vilafranca",
      ex_h1: "Extraescolars de tecnologia per a nens i joves a Vilafranca del Penedès",
      ex_lead: "Programació, videojocs, disseny i impressió 3D i creació de contingut en una mateixa acadèmia. Classes presencials a Vilafranca i online en directe per a nens i nenes de 6 a 16 anys, amb grups reduïts i la primera classe gratuïta.",
      ex_intro_eyebrow: "Què fem",
      ex_intro_title: "Una extraescolar on creen, no només escolten",
      ex_intro_p1: "Les nostres classes són una activitat extraescolar on els nens i joves aprenen tecnologia fent projectes propis: un videojoc, una peça en 3D, un programa o un vídeo. No són fitxes ni exercicis a mig fer.",
      ex_intro_p2: "Els grups són reduïts i s'organitzen per franja d'edat, amb un mentor a prop de cada pantalla. No cal experiència prèvia ni comprar material.",
      ex_intro_p3: "Les famílies poden escollir classes presencials a Vilafranca del Penedès o online en directe.",
      ex_areas_eyebrow: "Àrees",
      ex_areas_title: "Què poden aprendre",
      ex_areas_lead: "Escull l'àrea que més els motiva o combina-les.",
      ex_modes_lead: "Escull la modalitat que millor s'adapti a la família.",
      ex_start_eyebrow: "Primer pas",
      ex_start_title: "Com començar a Pixel Penedès",
      ex_start1_title: "Reserva la classe gratuïta",
      ex_start1_desc: "Omple el formulari d'aquesta pàgina o escriu-nos per WhatsApp.",
      ex_start2_title: "Et confirmem dia i grup",
      ex_start2_desc: "Et contactem en menys de 24-48 hores laborables per confirmar dia i grup.",
      ex_start3_title: "Viuen una sessió real",
      ex_start3_desc: "Amb el grup que els correspon per edat i sense cap compromís de continuïtat.",
      ex_faq_title: "Preguntes sobre les extraescolars de tecnologia",
      ex_faq1_q: "Què són les extraescolars de tecnologia de Pixel Penedès?",
      ex_faq1_a: "Classes on els nens i joves aprenen programació, videojocs, disseny i impressió 3D i creació de contingut fent projectes propis, en grups reduïts per edats.",
      ex_faq2_q: "Per a quines edats són?",
      ex_faq2_a: "De 6 a 16 anys. Els grups s'organitzen per franja d'edat (6–8, 9–11, 12–14 i 15–16 anys)."
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
      hero_point4: "Clases semanales de 90 minutos",

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
      faq_dur_q: "¿Cuánto duran las clases?",
      faq_dur_a: "Cada alumno hace una clase semanal de 90 minutos, tanto en las clases presenciales como en las online en directo.",
      faq_desc_q: "¿Hay descuentos para familias?",
      faq_desc_a: "Sí. Aplicamos un 10% de descuento con el carné de familia numerosa, un 15% con el Carnet Joven y un 10% si el alumno tiene un hermano o hermana en el centro. Los descuentos no son acumulables.",
      faq5_q: "¿Qué incluye la clase gratuita?",
      faq5_a: "Una sesión real, con el grupo que le correspondería por edad, para que el niño o la niña la viva tal como será después. Sin ningún compromiso de continuidad.",
      faq6_q: "¿Cómo reservo la clase de prueba?",
      faq6_a: "Rellenando el formulario de esta página o escribiéndonos directamente por WhatsApp. Te contactamos para confirmar día y grupo en menos de 24-48 horas laborables.",

      res_eyebrow: "Sin compromiso",
      res_title: "Reserva la clase gratuita",
      res_lead: "Cuéntanos un poco sobre el niño o la niña y te confirmamos día y grupo. Sin compromiso, sin letra pequeña.",
      res_descomptes: "Descuentos para familias: 10% con carné de familia numerosa · 15% con el Carnet Joven · 10% si tiene un hermano o hermana en el centro. No acumulables.",
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

      footer_logo_alt: "Pixel Penedès - Academia de tecnología para niños y jóvenes",
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
      b2b_hero_meta: "Cursos presenciales y online · De 6 a 16 años · Clases semanales de 90 minutos · Durante todo el curso",
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
      b2b_cls_p2: "Programación, videojuegos, 3D y tecnología, con un profesor que les acompaña en directo y grupos reducidos adaptados a cada edad. Clases semanales de 90 minutos.",
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
      b2b_wa_message_label: "Mensaje",

      /* ---------- Página: programación para niños en Vilafranca ---------- */
      halloween_badge: "Novedad",
      halloween_title: "Especial Halloween",
      halloween_caption: "Túnel del Terror · 31 de octubre y 1 de noviembre · de 17.30h a 20.30h",
      halloween_img1_alt: "Cartel: ¿has encontrado la tarjeta del diablo? El poseedor y un acompañante podréis entrar gratis el 31 de octubre y el 1 de noviembre, de 17.30h a 20.30h",
      halloween_img2_alt: "Cartel del Túnel del Terror: ¿te atreves a entrar? 31 de octubre y 1 de noviembre, de 17.30h a 20.30h, 1 euro, calle Puigmoltó 5, Vilafranca",

      prog_index_link: "Clases de programación en Vilafranca →",
      prog_wa_message: "¡Hola! Me gustaría información sobre las clases de programación de Pixel Penedès",
      prog_meta_title: "Clases de programación para niños en Vilafranca | Pixel Penedès",
      prog_meta_description: "Clases de programación para niños y jóvenes de 6 a 16 años en Vilafranca del Penedès: Scratch, Python, Roblox y Unity. Grupos reducidos y primera clase gratuita.",
      prog_og_title: "Clases de programación para niños y jóvenes en Vilafranca del Penedès",
      prog_og_description: "Programación, videojuegos y 3D con proyectos propios. Grupos reducidos por edades, presencial en Vilafranca y online en directo. La primera clase es gratuita.",
      prog_breadcrumb_aria: "Migas de pan",
      prog_breadcrumb_current: "Programación para niños en Vilafranca",
      prog_h1: "Clases de programación para niños y jóvenes en Vilafranca del Penedès",
      prog_lead: "Los niños y niñas aprenden a programar haciendo lo que más les motiva: crear sus propios videojuegos y proyectos. De los primeros bloques de colores al código real, con grupos reducidos y un mentor cerca de cada pantalla.",
      prog_point1: "De 6 a 16 años",
      prog_point2: "Presencial en Vilafranca y online en directo",

      prog_intro_eyebrow: "Programación para niños",
      prog_intro_title: "Aprender a programar es aprender a crear",
      prog_intro_p1: "En Pixel Penedès la programación no es un temario de fichas. Los alumnos plantean un proyecto propio (un juego, un personaje, un mundo) y aprenden lo necesario para hacerlo funcionar: secuencias, bucles, condiciones, variables y lógica.",
      prog_intro_p2: "Trabajamos con herramientas pensadas para cada edad. Los más pequeños empiezan con programación por bloques; a partir de los 11-12 años dan el salto al código escrito de verdad, con Python y con los lenguajes de los motores de juego.",
      prog_intro_p3: "Así entienden cómo funciona la tecnología que usan cada día, en lugar de limitarse a consumirla.",

      prog_stages_eyebrow: "Un camino, cuatro etapas",
      prog_stages_title: "Cómo aprenden a programar, etapa por etapa",
      prog_stages_lead: "Cada franja de edad tiene su propio grupo y su propio ritmo.",
      prog_stage1: "Pensamiento computacional y programación por bloques. Aprenden las ideas básicas (orden, repetición, causa y efecto) jugando y en grupos muy reducidos.",
      prog_stage2: "Scratch avanzado y primeros videojuegos propios en Minecraft Education o Roblox Studio, con proyectos que se alargan varias sesiones.",
      prog_stage3: "Salto al código escrito: Python para entender la lógica de fondo y los lenguajes de los motores de juego, como Roblox Lua o Unity.",
      prog_stage4: "Proyectos propios con más alcance, portfolio personal y orientación hacia bachillerato tecnológico o ciclos formativos.",

      prog_tools_eyebrow: "Herramientas y lenguajes",
      prog_tools_title: "Con qué programan",
      prog_tools_lead: "Elegimos la herramienta según la edad y el nivel de cada grupo.",

      prog_how_eyebrow: "En el aula",
      prog_how_title: "Cómo son nuestras clases de programación",
      prog_how1_title: "Grupos reducidos por edades",
      prog_how1_desc: "Los grupos se organizan por franja de edad (6–8, 9–11, 12–14 y 15–16 años) para que el ritmo de cada sesión tenga sentido para todos.",
      prog_how2_title: "Un mentor cerca",
      prog_how2_desc: "Cada alumno avanza en su proyecto con un mentor que le acompaña y le resuelve las dudas en el momento.",
      prog_how3_title: "Sin experiencia previa",
      prog_how3_desc: "La mayoría de alumnos empiezan de cero. Cada grupo se adapta al nivel real de los niños y niñas que lo forman.",
      prog_how4_title: "Proyectos propios",
      prog_how4_desc: "Cada proyecto es suyo, de la idea inicial a la versión jugable. No son ejercicios a medias.",
      prog_how5_title: "Material incluido",
      prog_how5_desc: "En la academia disponemos del hardware y el software necesarios. Solo hace falta venir con ganas de probar cosas.",
      prog_how6_title: "Presencial u online",
      prog_how6_desc: "Clases presenciales en Vilafranca del Penedès u online en directo por Zoom, con profesor en directo (no vídeos grabados).",

      prog_more_title: "Más que programación",
      prog_more_lead: "Programar es solo una parte de lo que hacemos. Descubre las otras áreas de la academia.",
      prog_more1: "Diseñan sus propios videojuegos en Minecraft Education o Roblox Studio.",
      prog_more2: "Modelan en 3D y ven su idea salir de una impresora 3D.",
      prog_more3: "Graban, editan y publican vídeos sobre sus propios proyectos.",
      prog_more_link: "Ver en la página principal →",

      prog_faq_title: "Preguntas sobre las clases de programación",
      prog_faq_age_q: "¿Desde qué edad pueden empezar a programar?",
      prog_faq_age_a: "Desde los 6 años. Hasta los 16, los grupos se organizan por franja de edad: 6–8, 9–11, 12–14 y 15–16 años.",
      prog_faq_lang_q: "¿Qué lenguajes de programación aprenden?",
      prog_faq_lang_a: "Depende de la edad: bloques y Scratch los primeros años y, a partir de los 11-12 años, Python y los lenguajes de los motores de juego, como Roblox Lua o Unity.",

      /* ---------- Cookies ---------- */
      ck_banner_aria: "Aviso de cookies",
      ck_banner_title: "Tus cookies",
      ck_banner_text: "Usamos cookies analíticas (Google Analytics) para entender cómo se utiliza la web y mejorarla. Solo se activan si las aceptas. Puedes cambiar tu decisión cuando quieras.",
      ck_accept: "Aceptar",
      ck_reject: "Rechazar",
      ck_more: "Más información",
      ck_footer_link: "Cookies",
      ck_meta_title: "Política de cookies | Pixel Penedès",
      ck_meta_description: "Información sobre las cookies que usa Pixel Penedès, para qué sirven y cómo aceptarlas, rechazarlas o cambiar tu decisión.",
      ck_breadcrumb: "Política de cookies",
      ck_h1: "Política de cookies",
      ck_updated: "Última actualización: 20 de octubre de 2026",
      ck_s1_title: "Quién es el responsable",
      ck_s1_p: "Gloria Gany Cruz Paredes (autónoma, nombre comercial Pixel Penedès) · NIF 49768223H · Calle Puigmoltó, 5, 08720 Vilafranca del Penedès · pixelpenedes@gmail.com · 633 454 159",
      ck_s2_title: "Qué son las cookies",
      ck_s2_p: "Las cookies son pequeños archivos que una web guarda en tu navegador. Sirven, por ejemplo, para recordar una decisión o para medir cuántas personas visitan la web.",
      ck_s3_title: "Cuáles usamos",
      ck_tech_title: "Técnicas (siempre activas)",
      ck_tech_p: "Guardamos en tu navegador (almacenamiento local) la decisión que tomas sobre las cookies, para no tener que volver a preguntártelo en cada visita. No contiene datos personales.",
      ck_an_title: "Analíticas (solo si las aceptas)",
      ck_an_p: "Usamos Google Analytics para saber, de forma agregada, qué páginas se visitan y cómo llegan las personas a la web. Google Analytics guarda cookies como _ga y _ga_G-JGKTFHFFLJ, que pueden durar hasta 2 años. No usamos cookies publicitarias ni de marketing.",
      ck_s4_title: "Cómo cambiar o retirar el consentimiento",
      ck_s4_p: "Puedes cambiar tu decisión en cualquier momento con el botón siguiente, o borrando los datos de la web desde la configuración de tu navegador.",
      ck_change_btn: "Cambiar mi decisión",
      ck_s5_title: "Otros servicios",
      ck_s5_p: "Los enlaces a WhatsApp te llevan a un servicio externo, con su propia política de privacidad y de cookies.",
      ck_s6_title: "Contacto",
      ck_s6_p: "Si tienes cualquier duda sobre esta política, escríbenos a pixelpenedes@gmail.com.",

      /* ---------- Privacidad ---------- */
      pv_footer_link: "Privacidad",
      pv_meta_title: "Política de privacidad | Pixel Penedès",
      pv_meta_description: "Cómo tratamos los datos personales que nos facilitas en los formularios, por WhatsApp o por correo: responsable, finalidad, derechos y conservación.",
      pv_breadcrumb: "Política de privacidad",
      pv_h1: "Política de privacidad",
      pv_updated: "Última actualización: 20 de octubre de 2026",
      pv_s1_title: "Responsable del tratamiento",
      pv_s1_p: "Gloria Gany Cruz Paredes (autónoma, nombre comercial Pixel Penedès) · NIF 49768223H · Calle Puigmoltó, 5, 08720 Vilafranca del Penedès · pixelpenedes@gmail.com · 633 454 159",
      pv_s2_title: "Qué datos recogemos y para qué",
      pv_s2_p0: "Tratamos únicamente los datos que tú nos facilitas, con estas finalidades:",
      pv_s2_li1: "Reserva de clase gratuita (familias): nombre y edad del alumno/a, nombre del padre, madre o tutor/a, teléfono, correo electrónico (opcional) y comentario. Los usamos para confirmar día y grupo y ponernos en contacto contigo.",
      pv_s2_li2: "Programa para empresas: nombre, apellidos, empresa, cargo o departamento, correo corporativo, teléfono, número aproximado de empleados y de familias, modalidad de interés y mensaje. Los usamos para responderte y, si procede, enviarte la propuesta del programa.",
      pv_s2_li3: "Mensajes directos (WhatsApp o correo): los datos que nos envíes, solo para atender tu consulta.",
      pv_s3_title: "Cómo llegan los datos hasta nosotros",
      pv_s3_p: "Los formularios de la web no guardan los datos en ningún servidor de la web. Al enviarlos se abre WhatsApp con el mensaje ya escrito, y los datos solo nos llegan si tú pulsas «enviar». A partir de ahí, la conversación también se rige por las condiciones de WhatsApp (Meta).",
      pv_s4_title: "Base jurídica",
      pv_s4_p: "Tu consentimiento (art. 6.1.a RGPD), que das al enviar el formulario o el mensaje, y la aplicación de medidas precontractuales a petición tuya, como la reserva de una clase (art. 6.1.b RGPD).",
      pv_s5_title: "Menores de edad",
      pv_s5_p: "Los datos de los niños y jóvenes los facilita el padre, madre o tutor/a legal, que declara tener su representación y da el consentimiento en su nombre.",
      pv_s6_title: "Cuánto tiempo los conservamos",
      pv_s6_p: "Mientras gestionamos tu solicitud o se mantenga la relación con la familia o la empresa y, después, bloqueados, durante los plazos legales aplicables. Puedes pedir su supresión en cualquier momento.",
      pv_s7_title: "Destinatarios",
      pv_s7_p: "No cedemos tus datos a terceros, salvo obligación legal. Usamos servicios técnicos de otras empresas (como WhatsApp de Meta, el correo de Google y el proveedor de alojamiento de la web), que pueden tratar datos por cuenta nuestra. Si hay transferencias internacionales, se basan en las garantías adecuadas que prevé la normativa.",
      pv_s8_title: "Analítica web y cookies",
      pv_s8_p: "La analítica de la web solo se activa si la aceptas. Tienes toda la información en la política de cookies.",
      pv_cookies_link: "Política de cookies",
      pv_s9_title: "Tus derechos",
      pv_s9_p: "Puedes acceder a tus datos, rectificarlos, suprimirlos, oponerte al tratamiento, solicitar su limitación o portabilidad y retirar el consentimiento cuando quieras, escribiendo a pixelpenedes@gmail.com e indicando tu nombre y el derecho que quieres ejercer. Si consideras que no se han respetado tus derechos, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
      pv_s10_title: "Seguridad",
      pv_s10_p: "Aplicamos medidas técnicas y organizativas razonables para proteger los datos y solo accede a ellos la persona responsable de la academia.",
      priv_form_note: "Los datos solo se utilizan para responder a tu solicitud.",
      priv_link: "Política de privacidad",
      b2b_form_privacy_a: "Acepto la ",
      b2b_form_privacy_link: "política de privacidad",

      /* ---------- Aviso legal ---------- */
      lg_footer_link: "Aviso legal",
      lg_meta_title: "Aviso legal | Pixel Penedès",
      lg_meta_description: "Datos de identificación del titular de la web de Pixel Penedès, condiciones de uso, propiedad intelectual, responsabilidad y legislación aplicable.",
      lg_breadcrumb: "Aviso legal",
      lg_h1: "Aviso legal",
      lg_updated: "Última actualización: 20 de octubre de 2026",
      lg_s1_title: "Identificación del titular",
      lg_s1_p0: "En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que el titular de esta web es:",
      lg_s1_p: "Gloria Gany Cruz Paredes (autónoma, nombre comercial Pixel Penedès) · NIF 49768223H · Calle Puigmoltó, 5, 08720 Vilafranca del Penedès · pixelpenedes@gmail.com · 633 454 159",
      lg_s1_p2: "Actividad: academia de formación tecnológica (programación, videojuegos, diseño e impresión 3D, tecnología) para niños y jóvenes.",
      lg_s2_title: "Objeto y aceptación",
      lg_s2_p: "Esta web tiene carácter informativo y comercial sobre los servicios de Pixel Penedès. Acceder a ella y utilizarla implica aceptar este aviso legal; si no estás de acuerdo, te pedimos que no la utilices.",
      lg_s3_title: "Condiciones de uso",
      lg_s3_p: "Te comprometes a hacer un uso lícito, honesto y respetuoso de la web, sin dañar su funcionamiento, sin intentar acceder a áreas restringidas y sin utilizarla para fines ilegales o contrarios a la buena fe. Los datos que nos facilites en los formularios deben ser veraces y, en el caso de los menores, debe facilitarlos su padre, madre o tutor/a legal.",
      lg_s4_title: "Propiedad intelectual e industrial",
      lg_s4_p1: "Los textos, el diseño, el logotipo, las imágenes y el resto de contenidos de la web son titularidad de Pixel Penedès o se utilizan con autorización. No se permite reproducirlos, distribuirlos ni transformarlos sin permiso previo y por escrito, salvo los usos que permita la ley.",
      lg_s4_p2: "Las marcas, logotipos y nombres de terceros (como Roblox, Minecraft, Unity, Scratch, Python, AWS, Microsoft o Google) pertenecen a sus respectivos propietarios y se mencionan solo con finalidad informativa.",
      lg_s5_title: "Información de la web",
      lg_s5_p: "La información publicada es orientativa y no constituye una oferta contractual vinculante. Los horarios, los grupos, las plazas y, en el caso del programa para empresas, las condiciones concretas se confirman siempre de forma individual antes de cualquier inscripción o acuerdo.",
      lg_s6_title: "Responsabilidad",
      lg_s6_p: "Hacemos lo posible para que la web esté disponible y la información sea correcta, pero no garantizamos que no haya interrupciones ni errores, y nos reservamos el derecho de modificarla o retirar contenidos sin aviso previo. No nos hacemos responsables de los daños derivados de un uso inadecuado de la web.",
      lg_s7_title: "Enlaces a otras webs",
      lg_s7_p: "La web puede contener enlaces a servicios de terceros (por ejemplo, WhatsApp). No controlamos sus contenidos ni sus políticas y, por tanto, no somos responsables de ellos.",
      lg_s8_title: "Protección de datos y cookies",
      lg_s8_p: "Puedes consultar cómo tratamos tus datos personales y qué cookies usamos en la política de privacidad y en la política de cookies.",
      lg_s8_link1: "Política de privacidad",
      lg_s8_link2: "Política de cookies",
      lg_s9_title: "Legislación aplicable y jurisdicción",
      lg_s9_p: "Este aviso legal se rige por la legislación española. Para resolver cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan según la normativa aplicable y, si eres consumidor o usuario, a los de tu domicilio.",
      lg_s10_title: "Modificaciones y contacto",
      lg_s10_p: "Podemos actualizar este aviso legal cuando sea necesario; la fecha de actualización figura arriba. Para cualquier duda, escríbenos a pixelpenedes@gmail.com.",

      /* ---------- Pàgines de servei: videojocs, impressió 3D i extraescolars ---------- */
      svc_more_link: "Más información →",
      svc_prog_card: "Del bloque de colores al código real: Scratch, Python, Roblox Lua y Unity.",
      svc_others_title: "Otras áreas de la academia",
      svc_others_lead: "Descubre qué más hacen los niños y jóvenes en Pixel Penedès.",
      vj_index_link: "Clases de videojuegos en Vilafranca →",
      d3_index_link: "Clases de impresión 3D en Vilafranca →",
      ex_index_link: "Extraescolares de tecnología en Vilafranca",
      ex_footer_link: "Extraescolares de tecnología",
      vj_wa_message: "¡Hola! Me gustaría información sobre las clases de videojuegos de Pixel Penedès",
      vj_meta_title: "Clases de videojuegos para niños en Vilafranca | Pixel Penedès",
      vj_meta_description: "Curso de creación de videojuegos para niños y jóvenes de 6 a 16 años en Vilafranca del Penedès: Minecraft Education, Roblox Studio y Unity. Grupos reducidos y primera clase gratuita.",
      vj_og_title: "Clases de creación de videojuegos para niños y jóvenes en Vilafranca del Penedès",
      vj_og_description: "Diseñan sus propios videojuegos, niveles y personajes. Grupos reducidos por edades, presencial en Vilafranca y online en directo. La primera clase es gratuita.",
      vj_breadcrumb_current: "Videojuegos para niños en Vilafranca",
      vj_course_name: "Clases de creación de videojuegos para niños y jóvenes",
      vj_teach_design: "Diseño de videojuegos",
      vj_h1: "Clases de creación de videojuegos para niños y jóvenes en Vilafranca del Penedès",
      vj_lead: "En Pixel Penedès los niños y niñas no solo juegan: diseñan niveles, personajes y mecánicas y construyen su propio videojuego, de la idea inicial a la versión jugable. Grupos reducidos y un mentor cerca de cada pantalla.",
      vj_intro_eyebrow: "Videojuegos para niños",
      vj_intro_title: "Del juego que juegan al juego que crean",
      vj_intro_p1: "A los niños y niñas les encantan los videojuegos. En Pixel Penedès aprovechamos esa motivación para que pasen de ser jugadores a ser creadores: piensan una idea, la diseñan y la hacen funcionar.",
      vj_intro_p2: "Empiezan con herramientas pensadas para su edad, como los primeros mundos en Minecraft Education, y avanzan hacia juegos completos en Roblox Studio y, más adelante, motores como Unity.",
      vj_intro_p3: "Por el camino practican la lógica, la creatividad y la constancia, porque tienen que conseguir que su propio juego funcione.",
      vj_steps_eyebrow: "Proceso de creación",
      vj_steps_title: "Cómo se crea un videojuego, paso a paso",
      vj_steps_lead: "Cada proyecto sigue el mismo camino que un juego de verdad.",
      vj_step1_title: "Idea y diseño",
      vj_step1_desc: "Deciden qué tipo de juego quieren hacer, cómo será el protagonista y qué mundo recorrerá.",
      vj_step2_title: "Niveles y personajes",
      vj_step2_desc: "Construyen escenarios, diseñan personajes y definen las reglas del juego.",
      vj_step3_title: "Mecánicas y código",
      vj_step3_desc: "Dan vida al juego con bloques o con código, según la edad: movimiento, puntos, objetivos.",
      vj_step4_title: "Versión jugable",
      vj_step4_desc: "Prueban el juego, lo mejoran y lo dejan listo para que otros puedan jugarlo.",
      vj_tools_eyebrow: "Herramientas",
      vj_tools_title: "Con qué herramientas crean los juegos",
      vj_ages_eyebrow: "Por edades",
      vj_ages_title: "Qué videojuego crea cada edad",
      vj_age1_desc: "Primeros pasos con la programación por bloques, jugando y en grupos muy reducidos.",
      vj_age2_desc: "Primeros videojuegos propios en Minecraft Education o Roblox Studio, con proyectos que se alargan varias sesiones.",
      vj_age3_desc: "Videojuegos con motores gráficos completos como Unity y con el lenguaje Roblox Lua.",
      vj_age4_desc: "Proyectos propios con más alcance y un portfolio personal.",
      vj_faq_title: "Preguntas sobre las clases de videojuegos",
      vj_faq1_q: "¿Qué videojuegos pueden crear los niños?",
      vj_faq1_a: "Depende de la edad y de la herramienta: desde mundos y pequeñas aventuras en Minecraft Education hasta juegos completos en Roblox Studio o con motores como Unity. El proyecto siempre es suyo.",
      vj_faq2_q: "¿A partir de qué edad pueden crear videojuegos?",
      vj_faq2_a: "Desde los 6 años, con herramientas adaptadas a cada edad. Hasta los 16, los grupos se organizan por franja de edad.",
      d3_wa_message: "¡Hola! Me gustaría información sobre las clases de impresión 3D de Pixel Penedès",
      d3_meta_title: "Clases de impresión 3D para niños en Vilafranca | Pixel Penedès",
      d3_meta_description: "Clases de diseño e impresión 3D para niños y jóvenes de 6 a 16 años en Vilafranca del Penedès: modelan, preparan el archivo e imprimen. Grupos reducidos y primera clase gratuita.",
      d3_og_title: "Clases de diseño e impresión 3D para niños y jóvenes en Vilafranca del Penedès",
      d3_og_description: "Diseñan una pieza en el ordenador y la ven salir de una impresora 3D. Grupos reducidos por edades en Vilafranca del Penedès. La primera clase es gratuita.",
      d3_breadcrumb_current: "Impresión 3D para niños en Vilafranca",
      d3_course_name: "Clases de diseño e impresión 3D para niños y jóvenes",
      d3_teach_print: "Impresión 3D",
      d3_h1: "Diseño e impresión 3D para niños y jóvenes en Vilafranca del Penedès",
      d3_lead: "Los niños y niñas diseñan un objeto en el ordenador y lo ven salir de una impresora 3D. Modelan, preparan el archivo y siguen todo el proceso de impresión, con grupos reducidos y un mentor cerca.",
      d3_point2: "Impresoras 3D en la academia",
      d3_intro_eyebrow: "Impresión 3D para niños",
      d3_intro_title: "Diseñar en 3D y tenerlo en las manos",
      d3_intro_p1: "Diseñar en el ordenador es solo el primer paso. Lo que lo hace memorable es ver cómo su idea sale de la impresora, en forma de objeto que se puede tocar.",
      d3_intro_p2: "En la academia disponemos de las impresoras 3D y del software necesario, así que los alumnos no tienen que comprar nada: solo aportar la imaginación.",
      d3_intro_p3: "Trabajan la visión espacial y la constancia: una pieza se diseña, se prepara y se imprime, y cada proyecto es suyo de principio a fin.",
      d3_steps_eyebrow: "Proceso",
      d3_steps_title: "De la idea a la pieza impresa",
      d3_steps_lead: "Este es el camino que sigue cada proyecto.",
      d3_step1_title: "Idea",
      d3_step1_desc: "Deciden qué quieren crear: una figura, un personaje, un objeto.",
      d3_step2_title: "Modelado 3D",
      d3_step2_desc: "Lo diseñan en el ordenador y le dan forma con software de modelado.",
      d3_step3_title: "Preparar el archivo",
      d3_step3_desc: "Preparan el modelo para imprimirlo con Bambu Studio.",
      d3_step4_title: "Impresión",
      d3_step4_desc: "Siguen todo el proceso de impresión y ven su pieza hacerse realidad.",
      d3_tools_eyebrow: "Herramientas",
      d3_tools_title: "Con qué trabajan",
      d3_ages_eyebrow: "Por edades",
      d3_ages_title: "Diseño 3D, etapa por etapa",
      d3_age1_desc: "Primeras formas sencillas en 3D, jugando y en grupos muy reducidos.",
      d3_age2_desc: "Modelado 3D listo para imprimir.",
      d3_age3_desc: "Diseño 3D más técnico y piezas más elaboradas.",
      d3_age4_desc: "Proyectos propios con más alcance y un portfolio personal.",
      d3_faq_title: "Preguntas sobre las clases de impresión 3D",
      d3_faq1_q: "¿Hace falta saber diseñar en 3D para empezar?",
      d3_faq1_a: "No. Se empieza desde cero con formas sencillas y cada grupo se adapta al nivel real de los niños y niñas que lo forman.",
      d3_faq2_q: "¿Desde qué edad pueden hacer diseño 3D?",
      d3_faq2_a: "Desde los 6 años, con formas sencillas. Con la edad, el diseño se va haciendo más técnico.",
      d3_faq3_q: "¿Con qué software preparan las piezas?",
      d3_faq3_a: "Con Bambu Studio, el software que usamos en la academia para preparar el archivo antes de imprimir.",
      ex_wa_message: "¡Hola! Me gustaría información sobre las extraescolares de tecnología de Pixel Penedès",
      ex_meta_title: "Extraescolares de tecnología en Vilafranca para niños y jóvenes | Pixel Penedès",
      ex_meta_description: "Extraescolares de programación, videojuegos e impresión 3D para niños y jóvenes de 6 a 16 años en Vilafranca del Penedès. Presencial y online en directo, grupos reducidos y primera clase gratuita.",
      ex_og_title: "Extraescolares de tecnología para niños y jóvenes en Vilafranca del Penedès",
      ex_og_description: "Programación, videojuegos, diseño e impresión 3D y creación de contenido en una misma academia. Presencial y online en directo. La primera clase es gratuita.",
      ex_breadcrumb_current: "Extraescolares de tecnología en Vilafranca",
      ex_h1: "Extraescolares de tecnología para niños y jóvenes en Vilafranca del Penedès",
      ex_lead: "Programación, videojuegos, diseño e impresión 3D y creación de contenido en una misma academia. Clases presenciales en Vilafranca y online en directo para niños y niñas de 6 a 16 años, con grupos reducidos y la primera clase gratuita.",
      ex_intro_eyebrow: "Qué hacemos",
      ex_intro_title: "Una extraescolar donde crean, no solo escuchan",
      ex_intro_p1: "Nuestras clases son una actividad extraescolar en la que los niños y jóvenes aprenden tecnología haciendo proyectos propios: un videojuego, una pieza en 3D, un programa o un vídeo. No son fichas ni ejercicios a medias.",
      ex_intro_p2: "Los grupos son reducidos y se organizan por franja de edad, con un mentor cerca de cada pantalla. No hace falta experiencia previa ni comprar material.",
      ex_intro_p3: "Las familias pueden elegir clases presenciales en Vilafranca del Penedès u online en directo.",
      ex_areas_eyebrow: "Áreas",
      ex_areas_title: "Qué pueden aprender",
      ex_areas_lead: "Elige el área que más les motiva o combínalas.",
      ex_modes_lead: "Elige la modalidad que mejor se adapte a la familia.",
      ex_start_eyebrow: "Primer paso",
      ex_start_title: "Cómo empezar en Pixel Penedès",
      ex_start1_title: "Reserva la clase gratuita",
      ex_start1_desc: "Rellena el formulario de esta página o escríbenos por WhatsApp.",
      ex_start2_title: "Te confirmamos día y grupo",
      ex_start2_desc: "Te contactamos en menos de 24-48 horas laborables para confirmar día y grupo.",
      ex_start3_title: "Viven una sesión real",
      ex_start3_desc: "Con el grupo que les corresponde por edad y sin ningún compromiso de continuidad.",
      ex_faq_title: "Preguntas sobre las extraescolares de tecnología",
      ex_faq1_q: "¿Qué son las extraescolares de tecnología de Pixel Penedès?",
      ex_faq1_a: "Clases en las que los niños y jóvenes aprenden programación, videojuegos, diseño e impresión 3D y creación de contenido haciendo proyectos propios, en grupos reducidos por edades.",
      ex_faq2_q: "¿Para qué edades son?",
      ex_faq2_a: "De 6 a 16 años. Los grupos se organizan por franja de edad (6–8, 9–11, 12–14 y 15–16 años)."
    }
  };

  /* Cada idioma té la seva pròpia URL (català a l'arrel, castellà a /es/), de manera que
     Google pot indexar-los per separat. L'idioma de la pàgina el defineix <html lang>;
     les pàgines de /es/ es generen amb tools/build-es.js a partir d'aquest mateix diccionari. */
  var currentLang = "ca";

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

    // Estat visual dels enllaços d'idioma
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", isActive);
      if (isActive) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });

    // Etiqueta del botó de menú mòbil (respecta l'estat obert/tancat actual)
    var navToggleBtn = document.getElementById("navToggle");
    var mainNavEl = document.getElementById("main-nav");
    if (navToggleBtn && mainNavEl) {
      var isNavOpen = mainNavEl.classList.contains("is-open");
      navToggleBtn.setAttribute("aria-label", isNavOpen ? dict.nav_toggle_close : dict.nav_toggle_open);
    }

  }

  // Idioma de la pàgina: el que declara <html lang>. Els enllaços CAT | ES naveguen a l'altra URL.
  applyLanguage(document.documentElement.lang === "es" ? "es" : "ca");

  /* =========================================================
     Elements temporals (p. ex. Especial Halloween): s'amaguen sols
     a partir de la data indicada a data-hide-after (AAAA-MM-DD)
     ========================================================= */
  document.querySelectorAll("[data-hide-after]").forEach(function (el) {
    var limit = new Date(el.getAttribute("data-hide-after") + "T00:00:00");
    if (!isNaN(limit.getTime()) && new Date() >= limit) el.hidden = true;
  });

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
     Enllaços interns (#secció): si el contingut canvia d'alçada mentre
     es fa el scroll (imatges que acaben de carregar), tornem a ajustar
     la posició perquè sempre acabi a l'inici de la secció.
     ========================================================= */
  function realignTo(target) {
    var margin = parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
    var off = target.getBoundingClientRect().top - margin;
    if (Math.abs(off) > 6) {
      window.scrollBy({ top: off, left: 0, behavior: "auto" });
    }
  }
  document.addEventListener("click", function (e) {
    var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!link) return;
    var id = link.getAttribute("href").slice(1);
    var target = id && document.getElementById(id);
    if (!target) return;
    var tries = 0;
    (function check() {
      tries++;
      var before = window.pageYOffset;
      window.setTimeout(function () {
        if (window.pageYOffset !== before && tries < 6) {
          check(); /* encara s'està desplaçant */
        } else {
          realignTo(target);
        }
      }, 250);
    })();
  });

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
     Cookies: avís de consentiment. Google Analytics només es carrega
     si l'usuari accepta; si rebutja, no es desa cap cookie analítica.
     ========================================================= */
  (function cookieConsent() {
    var KEY = "pixelpenedes_cookie_consent";
    var GA_ID = "G-JGKTFHFFLJ";
    var MAX_AGE = 1000 * 60 * 60 * 24 * 365; // es torna a preguntar al cap d'un any

    function readChoice() {
      try {
        var v = JSON.parse(window.localStorage.getItem(KEY) || "null");
        if (v && (v.value === "granted" || v.value === "denied") && Date.now() - v.ts < MAX_AGE) return v.value;
      } catch (e) { /* localStorage no disponible: es tornarà a preguntar */ }
      return null;
    }
    function saveChoice(value) {
      try { window.localStorage.setItem(KEY, JSON.stringify({ value: value, ts: Date.now() })); } catch (e) { /* s'ignora */ }
    }
    function loadAnalytics() {
      if (window.__gaLoaded) return;
      window.__gaLoaded = true;
      window["ga-disable-" + GA_ID] = false;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      var s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
      document.head.appendChild(s);
      window.gtag("js", new Date());
      window.gtag("config", GA_ID);
    }
    function removeAnalyticsCookies() {
      window["ga-disable-" + GA_ID] = true;
      var host = window.location.hostname.replace(/^www\./, "");
      document.cookie.split(";").forEach(function (c) {
        var name = c.split("=")[0].trim();
        if (/^_ga(_|$)/.test(name) || name === "_gid" || name === "_gat") {
          [null, host, "." + host].forEach(function (domain) {
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + (domain ? "; domain=" + domain : "");
          });
        }
      });
    }
    function policyUrl() { return currentLang === "es" ? "/es/cookies/" : "/cookies/"; }
    function closeBanner() {
      var b = document.getElementById("cookieBanner");
      if (b && b.parentNode) b.parentNode.removeChild(b);
    }
    function showBanner() {
      closeBanner();
      var d = translations[currentLang] || translations.ca;
      var el = document.createElement("div");
      el.id = "cookieBanner";
      el.className = "cookie-banner";
      el.setAttribute("role", "dialog");
      el.setAttribute("aria-label", d.ck_banner_aria);
      el.innerHTML =
        '<div class="cookie-banner-text"><strong>' + d.ck_banner_title + "</strong><p>" + d.ck_banner_text +
        ' <a href="' + policyUrl() + '">' + d.ck_more + "</a></p></div>" +
        '<div class="cookie-banner-actions">' +
        '<button type="button" class="btn btn-ink btn-small" data-cookie="denied">' + d.ck_reject + "</button>" +
        '<button type="button" class="btn btn-ink btn-small" data-cookie="granted">' + d.ck_accept + "</button></div>";
      el.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-cookie]");
        if (!btn) return;
        var value = btn.getAttribute("data-cookie");
        saveChoice(value);
        if (value === "granted") loadAnalytics(); else removeAnalyticsCookies();
        closeBanner();
      });
      document.body.appendChild(el);
    }

    // Enllaç a la política al peu de pàgina
    var footerNav = document.querySelector(".footer-links");
    if (footerNav && !footerNav.querySelector("[data-cookie-link]")) {
      var link = document.createElement("a");
      link.href = policyUrl();
      link.setAttribute("data-cookie-link", "");
      link.textContent = (translations[currentLang] || translations.ca).ck_footer_link;
      footerNav.appendChild(link);
      var priv = document.createElement("a");
      priv.href = currentLang === "es" ? "/es/privacidad/" : "/privacitat/";
      priv.textContent = (translations[currentLang] || translations.ca).pv_footer_link;
      footerNav.appendChild(priv);
      var legal = document.createElement("a");
      legal.href = currentLang === "es" ? "/es/aviso-legal/" : "/avis-legal/";
      legal.textContent = (translations[currentLang] || translations.ca).lg_footer_link;
      footerNav.appendChild(legal);
    }
    // Botons "canviar la meva decisió"
    document.querySelectorAll("[data-cookie-settings]").forEach(function (b) {
      b.addEventListener("click", showBanner);
    });

    var choice = readChoice();
    if (choice === "granted") loadAnalytics();
    else if (choice === null) showBanner();
  })();

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
