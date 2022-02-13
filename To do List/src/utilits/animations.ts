import gsap from "gsap";

const closeLeftBar = () => {
	const button = document.querySelector(".button-close-side-bar") as HTMLButtonElement;
	const iconBars = button.children[1] as HTMLIFrameElement;
	const iconX = button.children[0] as HTMLIFrameElement;
	const buttonValue = button.value === "true" ? "false" : "true";
	const tl = gsap.timeline();

	const changeIcon = (iconXdisplay: string, iconBarsdisplay: string) => {
		iconX.style.display = iconXdisplay;
		iconBars.style.display = iconBarsdisplay;
	};

	if (button.value === "true") {
		tl.to(".div-side-bar", { x: "-30vw" }).call(changeIcon, ["none", "block"]).to(button, { x: "17vw", value: buttonValue }, "+0.5");
	}

	if (button.value === "false") {
		tl.to(button, { x: "0", value: buttonValue }).call(changeIcon, ["block", "none"]).to(".div-side-bar", { x: "-2" }, "<");
	}
};

export { closeLeftBar };
