import gsap from "gsap";

export const animatedHover = (e) => {
  gsap.to(e.target, { scale: 1.08, duration: 0.5 });
};

export const animetedHoverOut = (e) => {
  gsap.to(e.target, { scale: 1 });
};
