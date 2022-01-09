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
