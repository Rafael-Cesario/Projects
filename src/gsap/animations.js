import gsap from "gsap";

export const animatedHover = (e) => {
  gsap.to(e.target, { scale: 1.08, duration: 0.5 });
};

export const animetedHoverOut = (e) => {
  gsap.to(e.target, { scale: 1 });
};

export const animationNext = (h2, inputAnswer, next02, e, find) => {
  const tl = gsap.timeline();

  tl.to(h2, { opacity: 0, duration: 0.1 })
    .to(inputAnswer, { borderBottom: "2px solid white", duration: 0.3 }, "<")
    .eventCallback("onComplete", next02, [e, find]);
};

export const animationNext01 = (find, h2, inputAnswer) => {
  const tl = gsap.timeline();

  const color = find ? "forestgreen" : "crimson";

  tl.to(h2, { color: color, duration: 0.1 })
    .to(h2, { opacity: 1, duration: 0.1 })
    .to(
      inputAnswer,
      { borderBottom: `2px solid ${color}`, duration: 0.1 },
      "<"
    );
};

export const next02FindAnimation = (remainWords) => {
  gsap.from(remainWords, { color: "green", opacity: 1 });
};

export const showFormsAnimation = (wordsBody, formsAddWord, c) => {
  const tl = gsap.timeline();
  if (!c) {
    tl.to(wordsBody, { y: 550 });
    tl.to(formsAddWord, { x: 0 }, "<");
  } else {
    tl.to(formsAddWord, { x: "-120vw" });
    tl.to(wordsBody, { y: 0 }, "<");
  }
};

export const showConfigsAnimation = (wordsBody, c) => {
  const config = document.querySelector(".configs-container");
  const tl = gsap.timeline();

  if (!c) {
    tl.to(config, { x: 0 });
  } else {
    tl.to(config, { x: "-120vw" });
  }
};

export const fakeComponents = () => {
  const tl = gsap.timeline();

  tl.from(".fake-components", {
    duration: 1,
    x: "-100vw",
    ease: "power2.out",
    opacity: 0,
  })
    .from(
      ".my-list-component",
      { duration: 1, x: "-100vw", ease: "power2.out", opacity: 0 },
      "<"
    )
    .from(
      ".header",
      { duration: 1, y: "-30", ease: "power2.out", opacity: 0 },
      "<"
    );
};

export const opening = () => {
  const tl = gsap.timeline();

  tl.from(".opening .img", {
    opacity: 0,
    x: "-120vw",
    ease: "power2.out",
    duration: 1.5,
    rotate: -10,
  }).from(
    ".opening .title",
    {
      scale: 0.99,
      x: 10,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=1"
  );
};

export const closures = () => {
  const tl = gsap.timeline();

  tl.to(".listas", { x: 0, duration: 1, ease: "power2.out" })
    .to(
      ".opening .title, .img",
      {
        opacity: 0,
        pointerEvents: "none",
        ease: "power2.out",
        zIndex: -1,
        display: "none",
      },
      "-=0.8"
    )
    .to(
      ".body-initial-screen .header",
      { opacity: 1, y: 0, ease: "power2.out", duration: 1 },
      "-=0.5"
    );
};

export const newList = (open) => {
  const tl = gsap.timeline();

  if (!open) {
    /* Abrir */
    tl.to("body", { overflow: "hidden" }).to(".listas", { y: 500 }, "<").fromTo(
      ".form-new-list",
      { opacity: 0, y: -50 },
      {
        display: "flex",
        position: "absolute",
        y: 100,
        opacity: 1,
      },
      "<"
    );
  } else {
    /* Fechar */
    tl.to("body", { overflow: "show" })
      .to(".listas", { y: 0 }, "<")
      .to(".form-new-list", { opacity: 0, y: -50, display: "none" }, "<");
  }
};

export const onFocusInput = (e) => {
  const tl = gsap.timeline();

  if (e.target.type === "text") {
    tl.to(".form-new-list .span-input", { y: 0, fontSize: "1rem" }).to(
      ".form-new-list input",
      { borderBottom: "1px solid rgba(255, 255, 255, 0.637)" },
      "<"
    );
  } else {
    tl.to(".form-new-list .span-textarea", { y: 0 }).to(
      ".form-new-list textarea",
      { borderBottom: "1px solid rgba(255,255,255,0.637" }
    );
  }
};

export const onBlurInput = (e) => {
  const tl = gsap.timeline();

  if (e.target.type === "text") {
    if (e.target.value) {
      return;
    } else {
      tl.to(".form-new-list .span-input", { y: 50, fontSize: "2rem" }).to(
        ".form-new-list input",
        { borderBottom: "1px solid rgba(255, 255, 255, 0.137)" },
        "<"
      );
    }
  } else {
    if (e.target.value) {
      return;
    } else {
      tl.to(".form-new-list .span-textarea", { y: 50 }).to(
        ".form-new-list textarea",
        { border: "1px solid rgba(255,255,255,0.137" }
      );
    }
  }
};
