// EDIT HERE: change the hero and story-section names, subtitles, and gallery speeds.
const SITE_CONFIG = {
  hero: {
    eyebrow: "An album of forever",
    title: "Shubh Vivah",
    tagline: "Love, held close. Traditions, carried forward.",
    scrollLabel: "Scroll to wander"
  },
  sections: [
    {
      id: "prewedding", title: "Pre-Wedding", subtitle: "The Beginning of Forever", theme: "cream",
      gallery: "marquee-left", gallerySpeed: "44s",
      comparisons: [
        { before: "prewedding-ba-1-before", after: "prewedding-ba-1-after", caption: "From an unguarded afternoon to a palace-lit promise." },
        { before: "prewedding-ba-2-before", after: "prewedding-ba-2-after", caption: "The last warmth of day, kept for the two of them." }
      ]
    },
    {
      id: "bridal", title: "Bridal", subtitle: "The Royal Transformation", theme: "maroon",
      gallery: "marquee-right", gallerySpeed: "48s",
      comparisons: [
        { before: "bridal-ba-1-before", after: "bridal-ba-1-after", caption: "A quiet morning, then a bride in all her radiance." },
        { before: "bridal-ba-2-before", after: "bridal-ba-2-after", caption: "From the final pin to the portrait she will keep." }
      ]
    },
    {
      id: "functions", title: "Wedding Functions", subtitle: "Rituals, Rhythms & Blessings", theme: "cream",
      gallery: "vertical", gallerySpeed: "42s",
      comparisons: [
        { before: "functions-ba-1-before", after: "functions-ba-1-after", caption: "An empty mandap, transformed by flowers and family." },
        { before: "functions-ba-2-before", after: "functions-ba-2-after", caption: "A quiet courtyard, now holding seven promises." }
      ]
    }
  ],
  // EDIT HERE: tune the continuous photo-gallery speed using CSS time values.
  galleryPauseLabel: "Pause gallery motion"
};

const image = (id, name, src, alt, caption, focus, shape, suggestion) => ({
  id, name, src, alt, caption, focus, shape, suggestion
});

// EDIT HERE: every photo slot is configured here. Keep each key and id unique.
const IMAGE_CONFIG = {
  // Hero frame names, image paths, alt text, and labels.
  "hero-frame-1": image("hero-frame-1", "Haldi Glow", "/images/hero-frame-1.jpg", "A bride glowing with turmeric at her haldi celebration", "Haldi Glow", "center", "frame-round", "Bride at haldi"),
  "hero-frame-2": image("hero-frame-2", "Mehendi Hands", "/images/hero-frame-2.jpg", "Intricate mehendi being applied to a bride's hands", "Mehendi Hands", "center", "frame-round", "Mehendi hands"),
  "hero-frame-3": image("hero-frame-3", "Royal Baraat", "/images/hero-frame-3.jpg", "A joyful baraat arriving for a royal wedding", "Royal Baraat", "center", "frame-round", "Baraat celebration"),
  "hero-frame-4": image("hero-frame-4", "Mandap Moments", "/images/hero-frame-4.jpg", "A floral mandap prepared for the wedding ceremony", "Mandap Moments", "center", "frame-round", "Floral mandap"),
  "hero-frame-5": image("hero-frame-5", "Family Blessings", "/images/hero-frame-5.jpg", "Family offering blessings to the newlyweds", "Family Blessings", "center", "frame-round", "Family blessings"),

  // Pre-Wedding before/after image pairs.
  "prewedding-ba-1-before": image("prewedding-ba-1-before", "Pre-Wedding Pair 1 Before", "/images/prewedding-ba-1-before.jpg", "The couple in a relaxed candid moment before their shoot", "Before", "center", "frame-wide", "Casual candid couple portrait"),
  "prewedding-ba-1-after": image("prewedding-ba-1-after", "Pre-Wedding Pair 1 After", "/images/prewedding-ba-1-after.jpg", "The couple in royal couture at a palace after their transformation", "After", "center", "frame-wide", "Royal couture palace portrait"),
  "prewedding-ba-2-before": image("prewedding-ba-2-before", "Pre-Wedding Pair 2 Before", "/images/prewedding-ba-2-before.jpg", "A daytime portrait of the couple in simple attire", "Before", "center", "frame-wide", "Daytime casual portrait"),
  "prewedding-ba-2-after": image("prewedding-ba-2-after", "Pre-Wedding Pair 2 After", "/images/prewedding-ba-2-after.jpg", "The couple in an elegant golden-hour palace shoot", "After", "center", "frame-wide", "Golden-hour palace shoot"),

  // Pre-Wedding gallery image names, paths, and captions.
  "prewedding-gallery-1": image("prewedding-gallery-1", "Pre-Wedding Gallery 1", "/images/prewedding-gallery-1.jpg", "A couple sharing a candid pre-wedding laugh", "A laugh that needed no direction", "center", "frame-arch", "Candid couple laugh"),
  "prewedding-gallery-2": image("prewedding-gallery-2", "Pre-Wedding Gallery 2", "/images/prewedding-gallery-2.jpg", "A couple walking together in a palace courtyard", "A little closer with every step", "center", "frame-rect", "Palace courtyard walk"),
  "prewedding-gallery-3": image("prewedding-gallery-3", "Pre-Wedding Gallery 3", "/images/prewedding-gallery-3.jpg", "A soft portrait of the couple in traditional clothing", "Tradition, worn with ease", "center top", "frame-wide", "Traditional couple portrait"),
  "prewedding-gallery-4": image("prewedding-gallery-4", "Pre-Wedding Gallery 4", "/images/prewedding-gallery-4.jpg", "The couple framed by a palace arch at sunset", "A palace holding the last light", "center", "frame-oval", "Sunset palace arch"),
  "prewedding-gallery-5": image("prewedding-gallery-5", "Pre-Wedding Gallery 5", "/images/prewedding-gallery-5.jpg", "A quiet moment between the couple before the wedding", "Their own little world", "center", "frame-squircle", "Quiet couple moment"),
  "prewedding-gallery-6": image("prewedding-gallery-6", "Pre-Wedding Gallery 6", "/images/prewedding-gallery-6.jpg", "A joyful portrait in the garden before the ceremony", "Green paths, golden plans", "center", "frame-rect", "Garden portrait"),
  "prewedding-gallery-7": image("prewedding-gallery-7", "Pre-Wedding Gallery 7", "/images/prewedding-gallery-7.jpg", "The couple looking toward one another in warm evening light", "Evening found them smiling", "center", "frame-arch", "Golden-hour portrait"),
  "prewedding-gallery-8": image("prewedding-gallery-8", "Pre-Wedding Gallery 8", "/images/prewedding-gallery-8.jpg", "A wide view of the couple in a palace garden", "A day made for remembering", "center", "frame-wide", "Palace garden couple"),

  // Bridal before/after image pairs.
  "bridal-ba-1-before": image("bridal-ba-1-before", "Bridal Pair 1 Before", "/images/bridal-ba-1-before.jpg", "The bride in a simple outfit before bridal styling", "Before", "center top", "frame-wide", "Bride before styling"),
  "bridal-ba-1-after": image("bridal-ba-1-after", "Bridal Pair 1 After", "/images/bridal-ba-1-after.jpg", "The bride in a complete lehenga, jewelry, makeup, and mehendi look", "After", "center top", "frame-wide", "Complete royal bridal look"),
  "bridal-ba-2-before": image("bridal-ba-2-before", "Bridal Pair 2 Before", "/images/bridal-ba-2-before.jpg", "A candid moment while the bride is getting ready", "Before", "center", "frame-wide", "Bride getting ready"),
  "bridal-ba-2-after": image("bridal-ba-2-after", "Bridal Pair 2 After", "/images/bridal-ba-2-after.jpg", "The bride's final portrait in her wedding attire", "After", "center top", "frame-wide", "Final bridal portrait"),

  // Bridal gallery image names, paths, and captions.
  "bridal-gallery-1": image("bridal-gallery-1", "Bridal Gallery 1", "/images/bridal-gallery-1.jpg", "A bride in a richly embroidered traditional lehenga", "Heirlooms stitched into every detail", "center top", "frame-arch", "Bridal lehenga portrait"),
  "bridal-gallery-2": image("bridal-gallery-2", "Bridal Gallery 2", "/images/bridal-gallery-2.jpg", "The bride's mehendi and wedding jewelry", "A story written on her hands", "center", "frame-oval", "Mehendi and jewelry"),
  "bridal-gallery-3": image("bridal-gallery-3", "Bridal Gallery 3", "/images/bridal-gallery-3.jpg", "A close portrait of the bride beneath her dupatta", "A veil, a breath, a beginning", "center top", "frame-rect", "Bridal dupatta portrait"),
  "bridal-gallery-4": image("bridal-gallery-4", "Bridal Gallery 4", "/images/bridal-gallery-4.jpg", "The bride sharing a private smile with her family", "Her favorite people, just nearby", "center", "frame-wide", "Bride with family"),
  "bridal-gallery-5": image("bridal-gallery-5", "Bridal Gallery 5", "/images/bridal-gallery-5.jpg", "A detailed view of the bride's traditional jewelry", "Small treasures, deep roots", "center", "frame-squircle", "Bridal jewelry details"),
  "bridal-gallery-6": image("bridal-gallery-6", "Bridal Gallery 6", "/images/bridal-gallery-6.jpg", "The bride surrounded by soft wedding flowers", "A little stillness in the celebration", "center top", "frame-rect", "Bride with wedding flowers"),
  "bridal-gallery-7": image("bridal-gallery-7", "Bridal Gallery 7", "/images/bridal-gallery-7.jpg", "The bride's final portrait in full wedding attire", "The moment she became the memory", "center top", "frame-arch", "Full bridal portrait"),
  "bridal-gallery-8": image("bridal-gallery-8", "Bridal Gallery 8", "/images/bridal-gallery-8.jpg", "A joyful candid of the bride before the ceremony", "Joy, before the first step", "center", "frame-wide", "Bride candid"),

  // Wedding Functions before/after image pairs.
  "functions-ba-1-before": image("functions-ba-1-before", "Functions Pair 1 Before", "/images/functions-ba-1-before.jpg", "An empty undecorated mandap before the wedding", "Before", "center", "frame-wide", "Empty undecorated mandap"),
  "functions-ba-1-after": image("functions-ba-1-after", "Functions Pair 1 After", "/images/functions-ba-1-after.jpg", "The mandap fully decorated with flowers and warm lights", "After", "center", "frame-wide", "Decorated floral mandap"),
  "functions-ba-2-before": image("functions-ba-2-before", "Functions Pair 2 Before", "/images/functions-ba-2-before.jpg", "A quiet wedding venue before the family gathers", "Before", "center", "frame-wide", "Quiet wedding venue"),
  "functions-ba-2-after": image("functions-ba-2-after", "Functions Pair 2 After", "/images/functions-ba-2-after.jpg", "The couple's pheras surrounded by family", "After", "center", "frame-wide", "Pheras with family"),

  // Wedding Functions gallery image names, paths, and captions.
  "functions-gallery-1": image("functions-gallery-1", "Functions Gallery 1", "/images/functions-gallery-1.jpg", "A flower-covered mandap prepared for the ceremony", "A canopy made for their promises", "center", "frame-arch", "Floral mandap"),
  "functions-gallery-2": image("functions-gallery-2", "Functions Gallery 2", "/images/functions-gallery-2.jpg", "A joyful baraat dancing toward the wedding venue", "The music arrived before the guests", "center", "frame-rect", "Baraat dancing"),
  "functions-gallery-3": image("functions-gallery-3", "Functions Gallery 3", "/images/functions-gallery-3.jpg", "The couple exchanging varmala garlands", "A garland, a promise, a cheer", "center", "frame-oval", "Varmala ceremony"),
  "functions-gallery-4": image("functions-gallery-4", "Functions Gallery 4", "/images/functions-gallery-4.jpg", "The couple taking their pheras around the sacred fire", "Seven steps, held by many hands", "center", "frame-wide", "Pheras around the fire"),
  "functions-gallery-5": image("functions-gallery-5", "Functions Gallery 5", "/images/functions-gallery-5.jpg", "Family offering blessings to the bride and groom", "Blessings spoken softly", "center", "frame-squircle", "Family blessings"),
  "functions-gallery-6": image("functions-gallery-6", "Functions Gallery 6", "/images/functions-gallery-6.jpg", "Relatives laughing together at the wedding", "Laughter carried through the night", "center", "frame-rect", "Family laughter"),
  "functions-gallery-7": image("functions-gallery-7", "Functions Gallery 7", "/images/functions-gallery-7.jpg", "A tender emotional moment during the vidaai", "A goodbye filled with every blessing", "center", "frame-arch", "Vidaai moment"),
  "functions-gallery-8": image("functions-gallery-8", "Functions Gallery 8", "/images/functions-gallery-8.jpg", "The newlyweds celebrating with their friends and relatives", "Everyone they love, in one frame", "center", "frame-wide", "Wedding family celebration")
};

const byId = id => IMAGE_CONFIG[id];
const imageMarkup = (item, options = {}) => {
  const duplicate = options.duplicate === true;
  const clone = options.clone === true;
  const idAttribute = clone ? "" : ` id="${item.id}"`;
  const alt = duplicate ? "" : item.alt;
  const hidden = duplicate ? " aria-hidden=\"true\"" : "";
  const mobileHidden = options.mobileHidden ? " data-mobile-hidden=\"true\"" : "";
  const caption = options.caption === false ? "" : `<figcaption class="frame-caption">${item.caption}</figcaption>`;
  return `<figure${idAttribute} class="image-frame ${options.className || ""}" data-frame-name="${item.name}"${hidden}${mobileHidden}>
    <span class="image-surface ${item.shape}"><span class="image-backdrop" aria-hidden="true"></span><span class="image-placeholder" aria-hidden="true">❋</span>
      <img src="${item.src}" alt="${alt}" loading="lazy" decoding="async" style="object-position:${item.focus}">
    </span>${caption}
  </figure>`;
};

const renderHero = () => {
  const stage = document.querySelector("#hero-frames");
  const frames = Object.values(IMAGE_CONFIG).filter(item => item.id.startsWith("hero-frame-"));
  stage.innerHTML = `${frames.map(item => {
    const position = item.id.slice(-1);
    return imageMarkup(item, { className: `hero-frame hero-frame-${position}`, caption: true });
  }).join("")}
  <div class="hero-copy">
    <p class="eyebrow">${SITE_CONFIG.hero.eyebrow}</p>
    <h1>${SITE_CONFIG.hero.title}</h1>
    <p class="hero-subtitle">${SITE_CONFIG.hero.tagline}</p>
    <a class="scroll-cue" href="#${SITE_CONFIG.sections[0].id}" aria-label="Scroll to the wedding stories">
      <span class="scroll-lotus" aria-hidden="true">❋</span><span>${SITE_CONFIG.hero.scrollLabel}</span>
    </a>
  </div>`;
};

const renderComparison = (pair, index, section) => {
  const before = byId(pair.before);
  const after = byId(pair.after);
  return `<article class="comparison-card reveal" aria-label="${pair.caption}">
    <div class="comparison-slider" data-before="${before.id}" data-after="${after.id}">
      ${imageMarkup(before, { className: "comparison-layer comparison-before", caption: false })}
      ${imageMarkup(after, { className: "comparison-layer comparison-after", caption: false })}
      <span class="comparison-tag tag-before">Before</span><span class="comparison-tag tag-after">After</span>
      <span class="slider-handle" aria-hidden="true">❋</span>
      <input class="comparison-input" type="range" min="0" max="100" value="50" aria-label="Compare ${before.name} with ${after.name}" aria-valuetext="Half before, half after">
    </div>
    <p class="comparison-caption">${pair.caption}</p>
  </article>`;
};

const renderMarquee = (section, items) => {
  const copy = items.map((item, index) => imageMarkup(item, {
    className: "gallery-frame",
    duplicate: true,
    clone: true,
    mobileHidden: index >= 5
  })).join("");
  const original = items.map((item, index) => imageMarkup(item, {
    className: "gallery-frame",
    mobileHidden: index >= 5
  })).join("");
  return `<div class="gallery-viewport marquee-viewport ${section.gallery} reveal" style="--gallery-speed:${section.gallerySpeed}" aria-label="${section.title} photo gallery">
    <div class="marquee-track"><div class="marquee-set">${original}</div><div class="marquee-set" aria-hidden="true">${copy}</div></div>
  </div>`;
};

const renderVerticalGallery = (section, items) => {
  const columns = [items.slice(0, 4), items.slice(4, 8)];
  return `<div class="gallery-columns reveal" style="--gallery-speed:${section.gallerySpeed}" aria-label="${section.title} photo gallery">
    ${columns.map((column, columnIndex) => {
      const direction = columnIndex === 0 ? "vertical-up" : "vertical-down";
      const makeTrack = duplicate => `<div class="vertical-set"${duplicate ? " aria-hidden=\"true\"" : ""}>${column.map((item, itemIndex) => imageMarkup(item, {
        className: "gallery-frame",
        duplicate,
        clone: duplicate,
        mobileHidden: itemIndex === 3
      })).join("")}</div>`;
      return `<div class="vertical-gallery ${direction}"><div class="vertical-track">${makeTrack(false)}${makeTrack(true)}</div></div>`;
    }).join("")}
  </div>`;
};

const renderSection = (section, index) => {
  const galleryItems = Array.from({ length: 8 }, (_, itemIndex) => byId(`${section.id}-gallery-${itemIndex + 1}`));
  const gallery = section.gallery === "vertical" ? renderVerticalGallery(section, galleryItems) : renderMarquee(section, galleryItems);
  return `<section class="story-section story-${section.theme}" id="${section.id}" aria-labelledby="${section.id}-title">
    <svg class="section-watermark" viewBox="0 0 240 240" aria-hidden="true"><circle cx="120" cy="120" r="105"/><circle cx="120" cy="120" r="72"/><path d="M120 15v210M15 120h210M46 46l148 148M194 46 46 194"/><path d="M120 48c-45 33-45 111 0 144 45-33 45-111 0-144Zm0 0c33 45 33 99 0 144-33-45-33-99 0-144Z"/></svg>
    <header class="story-heading reveal">
      <h2 class="section-title" id="${section.id}-title" data-shimmer="${section.title}">${section.title}</h2>
      <p class="eyebrow section-subtitle">${section.subtitle}</p>
      <div class="gold-divider" aria-hidden="true"><span></span><b>❋</b><span></span></div>
    </header>
    <div class="comparison-grid">${section.comparisons.map((pair, pairIndex) => renderComparison(pair, pairIndex, section)).join("")}</div>
    <div class="gallery-heading"><span></span><p class="eyebrow">Little moments, kept forever</p><span></span></div>
    ${gallery}
    <div class="gallery-controls"><button class="gallery-toggle" type="button" aria-label="${SITE_CONFIG.galleryPauseLabel}" aria-pressed="false"><span aria-hidden="true">Ⅱ</span></button></div>
    ${index < SITE_CONFIG.sections.length - 1 ? "<div class=\"section-lotus-divider\" aria-hidden=\"true\"><span></span><b>❋</b><span></span></div>" : ""}
  </section>`;
};

renderHero();
document.querySelector("#stories").innerHTML = SITE_CONFIG.sections.map(renderSection).join("");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const intro = document.querySelector("#intro");
const closeIntro = () => {
  if (!intro || intro.classList.contains("is-opening")) return;
  intro.classList.add("is-opening");
  document.body.classList.remove("is-intro");
  window.setTimeout(() => intro.remove(), 1350);
};
document.querySelector("#skip-intro").addEventListener("click", closeIntro);
if (reduceMotion) closeIntro();
else window.setTimeout(closeIntro, 3600);

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    entry.target.querySelectorAll(".image-frame").forEach((frame, frameIndex) => {
      window.setTimeout(() => frame.classList.add("is-visible"), reduceMotion ? 0 : frameIndex * 75);
    });
    observer.unobserve(entry.target);
  });
}, { threshold: 0.08 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const fitImageToFrame = imageElement => {
  const frame = imageElement.closest(".image-frame");
  const surface = imageElement.closest(".image-surface");
  if (!frame || !surface || !imageElement.naturalWidth || !imageElement.naturalHeight) return;
  imageElement.classList.add("is-loaded");
  surface.classList.add("image-loaded");
  const frameRatio = surface.clientWidth / surface.clientHeight;
  const imageRatio = imageElement.naturalWidth / imageElement.naturalHeight;
  const mismatch = Math.max(frameRatio / imageRatio, imageRatio / frameRatio);
  if (mismatch > 2.35) {
    surface.classList.add("has-backdrop");
    surface.querySelector(".image-backdrop").style.backgroundImage = `url("${imageElement.currentSrc || imageElement.src}")`;
    imageElement.classList.add("contain-image");
  }
};

document.querySelectorAll(".image-frame img").forEach(imageElement => {
  imageElement.addEventListener("load", () => fitImageToFrame(imageElement));
  imageElement.addEventListener("error", () => imageElement.closest(".image-frame")?.classList.add("is-missing"));
  if (imageElement.complete && imageElement.naturalWidth) fitImageToFrame(imageElement);
});

document.querySelectorAll(".comparison-slider").forEach(slider => {
  const input = slider.querySelector(".comparison-input");
  const updateSplit = () => {
    slider.style.setProperty("--split", `${input.value}%`);
    input.setAttribute("aria-valuetext", `${input.value}% before, ${100 - Number(input.value)}% after`);
  };
  let userControlled = false;
  const cancelDemo = () => { userControlled = true; };
  input.addEventListener("input", updateSplit);
  input.addEventListener("pointerdown", cancelDemo, { once: true });
  input.addEventListener("keydown", cancelDemo, { once: true });
  updateSplit();

  if (reduceMotion) return;
  let demoStarted = false;
  const demoObserver = new IntersectionObserver((entries, observer) => {
    if (!entries.some(entry => entry.isIntersecting) || demoStarted) return;
    demoStarted = true;
    observer.disconnect();
    [16, 84, 50].forEach((value, step) => {
      window.setTimeout(() => {
        if (userControlled) return;
        input.value = String(value);
        updateSplit();
      }, 550 + step * 1050);
    });
  }, { threshold: 0.45 });
  demoObserver.observe(slider);
});

document.querySelectorAll(".gallery-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const section = button.closest(".story-section");
    const paused = section.classList.toggle("gallery-paused");
    button.setAttribute("aria-pressed", String(paused));
    button.setAttribute("aria-label", paused ? "Resume gallery motion" : SITE_CONFIG.galleryPauseLabel);
    button.querySelector("span").textContent = paused ? "▶" : "Ⅱ";
  });
});

document.querySelectorAll(".gallery-viewport, .gallery-columns").forEach(gallery => {
  gallery.addEventListener("pointerenter", () => gallery.closest(".story-section").classList.add("gallery-hover-paused"));
  gallery.addEventListener("pointerleave", () => gallery.closest(".story-section").classList.remove("gallery-hover-paused"));
  gallery.addEventListener("pointerdown", () => gallery.closest(".story-section").classList.add("gallery-touch-paused"));
  gallery.addEventListener("pointerup", () => {
    window.setTimeout(() => gallery.closest(".story-section")?.classList.remove("gallery-touch-paused"), 1200);
  });
});

const progressLine = document.querySelector("#progress-line");
let scrollQueued = false;
window.addEventListener("scroll", () => {
  if (scrollQueued) return;
  scrollQueued = true;
  window.requestAnimationFrame(() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progressLine.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
    document.querySelectorAll(".section-watermark").forEach(ornament => {
      const bounds = ornament.closest(".story-section").getBoundingClientRect();
      ornament.style.setProperty("--parallax", `${Math.max(-18, Math.min(18, bounds.top * -.035))}px`);
    });
    scrollQueued = false;
  });
}, { passive: true });

const petalField = document.querySelector("#petal-field");
const addFallingPetal = () => {
  if (reduceMotion || document.hidden) return;
  const petal = document.createElement("span");
  petal.className = "falling-petal";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.setProperty("--drift", `${Math.round(Math.random() * 150 - 75)}px`);
  petal.style.animationDuration = `${Math.random() * 7 + 11}s`;
  petalField.append(petal);
  window.setTimeout(() => petal.remove(), 19000);
};
if (!reduceMotion) window.setInterval(addFallingPetal, 1250);

const cursor = document.querySelector("#flower-cursor");
if (window.matchMedia("(pointer: fine)").matches && !reduceMotion) {
  let targetX = -40;
  let targetY = -40;
  let cursorX = targetX;
  let cursorY = targetY;
  let lastTrail = 0;
  window.addEventListener("mousemove", event => {
    targetX = event.clientX;
    targetY = event.clientY;
    const now = performance.now();
    if (now - lastTrail > 95) {
      const trail = document.createElement("span");
      trail.className = "trail-petal";
      trail.style.left = `${targetX + 5}px`;
      trail.style.top = `${targetY + 5}px`;
      document.body.append(trail);
      window.setTimeout(() => trail.remove(), 800);
      lastTrail = now;
    }
  }, { passive: true });
  const moveCursor = () => {
    cursorX += (targetX - cursorX) * .19;
    cursorY += (targetY - cursorY) * .19;
    cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0)`;
    window.requestAnimationFrame(moveCursor);
  };
  moveCursor();
  document.addEventListener("pointerover", event => {
    cursor.classList.toggle("is-active", Boolean(event.target.closest("a, button, .image-frame, .comparison-slider")));
  });
  window.addEventListener("mousedown", event => {
    for (let index = 0; index < 7; index += 1) {
      const petal = document.createElement("span");
      const angle = (Math.PI * 2 * index) / 7;
      petal.className = "burst-petal";
      petal.style.left = `${event.clientX}px`;
      petal.style.top = `${event.clientY}px`;
      petal.style.setProperty("--x", `${Math.cos(angle) * 30}px`);
      petal.style.setProperty("--y", `${Math.sin(angle) * 30}px`);
      document.body.append(petal);
      window.setTimeout(() => petal.remove(), 700);
    }
  });
}