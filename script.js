function ajustarAlturaFondo() {
  const img = new Image();
  img.src = "assets/images/castle_town_bg.png";
  img.onload = () => {
    const aspectRatio = img.naturalHeight / img.naturalWidth;
    const altoCalculado = window.innerWidth * aspectRatio;
    document.body.style.height = `${altoCalculado}px`;
  };
}

window.addEventListener("load", ajustarAlturaFondo);
window.addEventListener("resize", ajustarAlturaFondo);

const arrow = document.getElementById("arrow");
let timeoutInactividad;

function comprobarYMostrarFlecha() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = window.innerHeight;

  const enElFinal = scrollTop + clientHeight >= scrollHeight - 10;

  if (enElFinal) {
    ocultarFlecha();
    return;
  }

  clearTimeout(timeoutInactividad);
  timeoutInactividad = setTimeout(() => {
    const actualScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    const actualEnElFinal = actualScrollTop + clientHeight >= scrollHeight - 10;

    if (!actualEnElFinal) {
      arrow.classList.remove("oculta");
      arrow.classList.add("visible");
    }
  }, 5000);
}

function ocultarFlecha() {
  clearTimeout(timeoutInactividad);
  arrow.classList.remove("visible");
  arrow.classList.add("oculta");
}

window.addEventListener("scroll", () => {
  ocultarFlecha();
  comprobarYMostrarFlecha();
});

comprobarYMostrarFlecha();

// ==========================================
// EFECTOS DE SONIDO (SFX) PARA INTERACCIONES
// ==========================================
const sfxMove = new Audio("assets/snd_menu_move.wav");
const sfxSelect = new Audio("assets/snd_select.wav");

function playMove() {
  sfxMove.currentTime = 0;
  sfxMove.play().catch(() => {});
}

function playSelect() {
  sfxSelect.currentTime = 0;
  sfxSelect.play().catch(() => {});
}

const interactiveElements = document.querySelectorAll(
  ".enlace-red-grande, .player-btn, .btn-lang",
);
interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    playMove();
  });
});

// ==========================================
// TRADUCCIÓN / I18N (ESPAÑOL <-> INGLÉS)
// ==========================================

const translations = {
  es: {
    devlog_title: "ESTADO DEL PROYECTO",
    devlog_text:
      "Estamos adaptando Deltarune al hardware real de la Sega Genesis / Mega Drive usando C y SGDK.",
    devlog_li1:
      "Party System: Kris, Ralsei y Susie con seguimiento de movimiento.",
    devlog_li2:
      "Y-Sorting: Profundidad y ordenamiento de sprites en tiempo real.",
    devlog_li3:
      "Audio YM2612: Música chiptune 16-bit procesada con el driver XGM.",
    devlog_li4: "Próximamente: Sistema de diálogos e interfaz de menú.",

    specs_title: "ESPECIFICACIONES TÉCNICAS",
    specs_text:
      "Diseñado para exprimir al máximo las capacidades de los 16 bits:",
    specs_li1:
      "Resolución nativa: 320x224 píxeles optimizada para pantallas retro.",
    specs_li2:
      "Paleta de colores: 64 colores simultáneos en pantalla de una paleta de 512.",
    specs_li3:
      "Almacenamiento: La Genesis podía almacenar hasta unos 12 a 16 megas antes de crashear, intentemos.",
    specs_li4:
      "Procesamiento de Audio: Driver XGM para síntesis FM en chips YM2612 y PSG.",

    roadmap_title: "HOJA DE RUTA (ROADMAP)",
    roadmap_text: "Las etapas clave planificadas para completar el desarrollo:",
    roadmap_li1:
      "Fase 1: Motores base, tiles de mapas y movimiento con party system (Completado).",
    roadmap_li2:
      "Fase 2: Sistema de combate por turnos, diálogos e interfaz de menú (En desarrollo).",
    roadmap_li3:
      "Fase 3: Implementación completa del Capítulo 1 y optimización de audio FM/Sega CD (Próximamente).",

    faq_title: "PREGUNTAS FRECUENTES (FAQ)",
    faq_q1: "¿Funcionará en consola real?",
    faq_a1:
      "Dentro de lo posible, sí. De todas formas, teniendo en cuenta la inmensa cantidad de canciones de la banda sonora original de Toby Fox, es muy probable que terminemos apuntando a <strong>Sega CD</strong>. Básicamente es la misma arquitectura pero con una capacidad de almacenamiento gigante, lo que incluso nos permitiría meter todos los capítulos en un único CD sin tener que recurrir a cartuchos con tecnología Lock-On para transferir guardados.",
    faq_q2: "¿Qué emulador recomiendan?",
    faq_a2:
      "Para mayor comodidad recomendamos usar <strong>RetroArch</strong> con el núcleo <strong>Genesis Plus GX</strong>, siendo una opción super práctica y sólida. Si buscas máxima precisión con el hardware real, <strong>BlastEm</strong> es una excelente alternativa.",
    faq_q3: "¿El proyecto será Open Source / Código Abierto?",
    faq_a3:
      "¡Sí! Una vez completado el Capítulo 1, se liberará públicamente la ROM, todo el código fuente y los assets. El objetivo es que cualquier desarrollador o fan pueda usar este demake como base de aprendizaje, crear sus propios mods, o extraer mecánicas independientes para sus propios proyectos de Sega Genesis (como el sistema de party/seguimiento de Kris, el cuadro de diálogos, HUD, etc.).",

    team_title: "ÚNETE AL EQUIPO",
    team_text:
      "Buscamos personas motivadas con ganas de ayudar a hacer este demake realidad:",
    team_r1: "Pixel Artists",
    team_r2: "Compositores FM",
    team_r3: "Programadores SGDK",

    gallery_title: "GALERÍA Y COMPARATIVA",
    gallery_text:
      "Un vistazo al proceso de traducción visual del estilo moderno al entorno clásico de 16-bit:",
    gallery_item1: "Gestión de Sprites y Y-Sorting",
    gallery_item2: "Diseño de Tiles en Castle Town",

    link_discord: "Unirse al Discord",
    link_aseprite: "Aseprite de paga",
    link_libresprite: "LibreSprite free",
  },
  en: {
    devlog_title: "PROJECT STATUS",
    devlog_text:
      "We are porting Deltarune to real Sega Genesis / Mega Drive hardware using C and SGDK.",
    devlog_li1: "Party System: Kris, Ralsei, and Susie with motion tracking.",
    devlog_li2: "Y-Sorting: Real-time sprite depth sorting.",
    devlog_li3:
      "YM2612 Audio: 16-bit chiptune music processed with the XGM driver.",
    devlog_li4: "Coming Soon: Dialogue system and menu interface.",

    specs_title: "TECHNICAL SPECIFICATIONS",
    specs_text: "Designed to push 16-bit capabilities to their absolute limit:",
    specs_li1: "Native resolution: 320x224 pixels optimized for retro screens.",
    specs_li2:
      "Color palette: 64 simultaneous colors on screen from a palette of 512.",
    specs_li3:
      "Storage: Genesis could handle around 12 to 16 MB before crashing, let's try it.",
    specs_li4:
      "Audio Processing: XGM driver for FM synthesis on YM2612 and PSG chips.",

    roadmap_title: "ROADMAP",
    roadmap_text: "Key milestones planned to complete development:",
    roadmap_li1:
      "Phase 1: Core engine, map tiles, and party system movement (Completed).",
    roadmap_li2:
      "Phase 2: Turn-based battle system, dialogues, and menu interface (In development).",
    roadmap_li3:
      "Phase 3: Full Chapter 1 implementation and FM/Sega CD audio optimization (Coming Soon).",

    faq_title: "FREQUENTLY ASKED QUESTIONS (FAQ)",
    faq_q1: "Will it work on real hardware?",
    faq_a1:
      "As much as possible, yes. However, considering the huge soundtrack by Toby Fox, we will likely target <strong>Sega CD</strong>. It uses essentially the same architecture with massive storage, allowing us to fit all chapters onto a single CD without needing Lock-On technology cartridges for save transfers.",
    faq_q2: "Which emulator do you recommend?",
    faq_a2:
      "For convenience, we recommend <strong>RetroArch</strong> with the <strong>Genesis Plus GX</strong> core. If you're looking for maximum hardware accuracy, <strong>BlastEm</strong> is an excellent choice.",
    faq_q3: "Will the project be Open Source?",
    faq_a3:
      "Yes! Once Chapter 1 is finished, the ROM, source code, and assets will be released publicly. The goal is to allow developers and fans to learn from it, create mods, or extract standalone mechanics (like Kris's party tracking, dialogue box, HUD, etc.).",

    team_title: "JOIN THE TEAM",
    team_text:
      "We are looking for motivated people to help make this demake a reality:",
    team_r1: "Pixel Artists",
    team_r2: "FM Composers",
    team_r3: "SGDK Programmers",

    gallery_title: "GALLERY & COMPARISON",
    gallery_text:
      "A glimpse into translating modern visuals into a classic 16-bit environment:",
    gallery_item1: "Sprite Management & Y-Sorting",
    gallery_item2: "Castle Town Tile Design",

    link_discord: "Join Discord",
    link_aseprite: "Paid Aseprite",
    link_libresprite: "Free LibreSprite",
  },
};

let currentLang = "es";
const btnLang = document.getElementById("btn-lang");

if (btnLang) {
  btnLang.addEventListener("click", () => {
    playSelect();
    currentLang = currentLang === "es" ? "en" : "es";
    btnLang.textContent = currentLang === "es" ? "EN" : "ES";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });
  });
}

// ==========================================
// LÓGICA DEL REPRODUCTOR DE MÚSICA CON BLEND (CROSSFADE)
// ==========================================

const playlist = [
  {
    title: "Castle Funk",
    artist: "zaiden",
    src: "assets/music/deltarune - Castle Funk.mp3",
    cover: "assets/music creators/zaiden.jpg",
  },
  {
    title: "My Castle Town",
    artist: "Clingojam",
    src: "assets/music/deltarune - My Castle Town.mp3",
    cover: "assets/music creators/Clingojam.jpg",
  },
  {
    title: "Lancer Theme",
    artist: "underplanet4911",
    src: "assets/music/deltarune - Lancer Theme.mp3",
    cover: "assets/music creators/underplanet4911.jpg",
  },
  {
    title: "Thousand Cafe Zukan",
    artist: "xyz",
    src: "assets/music/deltarune - Thousand Cafe Zukan.mp3",
    cover: "assets/music creators/xyz.jpg",
  },
  {
    title: "Can You Really Call This...",
    artist: "Soshu",
    src: "assets/music/undertale - Can you really call this a hotel....mp3",
    cover: "assets/music creators/Soshu.jpg",
  },
  {
    title: "Shop",
    artist: "xyz",
    src: "assets/music/undertale - shop.mp3",
    cover: "assets/music creators/xyz.jpg",
  },
  {
    title: "Uwa!! So Temperate",
    artist: "John Joy",
    src: "assets/music/undertale - Uwa!! So Temperate.mp3",
    cover: "assets/music creators/John Joy Tay.jpg",
  },
  {
    title: "Lost Girl",
    artist: "DeepFriedIdaho",
    src: "assets/music/deltarune - Lost Girl.mp3",
    cover: "assets/music creators/DeepFriedIdaho.jpg",
  },
];

let currentTrackIndex = 0;
let activeLayer = 1;

const audioElement = document.getElementById("audio-element");
const btnPlay = document.getElementById("btn-play");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const volumeSlider = document.getElementById("volume-slider");

const cover1 = document.getElementById("track-cover-1");
const cover2 = document.getElementById("track-cover-2");
const info1 = document.getElementById("track-info-1");
const info2 = document.getElementById("track-info-2");

function cambiarPistaConBlend(nuevoIndex) {
  currentTrackIndex = nuevoIndex;
  const track = playlist[currentTrackIndex];

  const nextLayer = activeLayer === 1 ? 2 : 1;

  const targetCover = nextLayer === 1 ? cover1 : cover2;
  const targetInfo = nextLayer === 1 ? info1 : info2;

  targetCover.src = track.cover;
  targetInfo.querySelector(".track-title").textContent = track.title;
  targetInfo.querySelector(".track-artist").textContent = track.artist;

  if (nextLayer === 1) {
    cover1.classList.add("active");
    cover2.classList.remove("active");
    info1.classList.add("active");
    info2.classList.remove("active");
  } else {
    cover2.classList.add("active");
    cover1.classList.remove("active");
    info2.classList.add("active");
    info1.classList.remove("active");
  }

  activeLayer = nextLayer;

  audioElement.src = track.src;
  audioElement.play();
  btnPlay.textContent = "||";
}

function inicializarReproductor() {
  const track = playlist[currentTrackIndex];
  cover1.src = track.cover;
  info1.querySelector(".track-title").textContent = track.title;
  info1.querySelector(".track-artist").textContent = track.artist;
  cover1.classList.add("active");
  info1.classList.add("active");
  audioElement.src = track.src;
}

function togglePlay() {
  if (audioElement.paused) {
    audioElement.play();
    btnPlay.textContent = "||";
  } else {
    audioElement.pause();
    btnPlay.textContent = ">";
  }
}

btnPlay.addEventListener("click", () => {
  playSelect();
  togglePlay();
});

btnPrev.addEventListener("click", () => {
  playSelect();
  const nuevoIndex =
    (currentTrackIndex - 1 + playlist.length) % playlist.length;
  cambiarPistaConBlend(nuevoIndex);
});

btnNext.addEventListener("click", () => {
  playSelect();
  const nuevoIndex = (currentTrackIndex + 1) % playlist.length;
  cambiarPistaConBlend(nuevoIndex);
});

audioElement.addEventListener("ended", () => {
  const nuevoIndex = (currentTrackIndex + 1) % playlist.length;
  cambiarPistaConBlend(nuevoIndex);
});

volumeSlider.addEventListener("input", (e) => {
  audioElement.volume = e.target.value;
});

inicializarReproductor();

// ==========================================
// EFECTO DE PROFUNDIDAD 3D EN HEADER Y DIÁLOGO
// ==========================================

const titulo = document.querySelector(".titulo-superior");
const dialogo = document.querySelector(".contenedor-dialogo");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled < 800) {
    const factor = scrolled / 800;
    const translateZ = scrolled * -0.8;
    const translateY = scrolled * -0.4;
    const rotateX = scrolled * 0.08;
    const opacity = Math.max(0, 1 - factor * 1.5);

    if (titulo) {
      titulo.style.transform = `translate3d(0px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg)`;
      titulo.style.opacity = opacity;
    }

    if (dialogo) {
      dialogo.style.transform = `translate3d(0px, ${translateY * 0.8}px, ${translateZ * 0.6}px) rotateX(${rotateX * 0.6}deg)`;
      dialogo.style.opacity = opacity;
    }
  }
});
