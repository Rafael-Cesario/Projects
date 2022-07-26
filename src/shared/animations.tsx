import gsap from "gsap";

export const openSidebar = (open: boolean) => {
	const tl = gsap.timeline();

	!open ? tl.to(".sidebar", { left: "0" }) : tl.to(".sidebar", { left: "-30rem" });
};
