import gsap from "gsap";

export const animatedHover = (e) => {
	gsap.to(e.target, { scale: 1.08, duration: 0.5 });
};

export const animatedHoverOut = (e) => {
	gsap.to(e.target, { scale: 1 });
};

export const animationNextQuestion = (next02, e, find) => {
	const tl = gsap.timeline();

	tl.to(".word02", { opacity: 0, duration: 0.1 }).to(".input-answer", { borderBottom: "2px solid white", duration: 0.3 }, "<").eventCallback("onComplete", next02, [e, find]);
};

export const animationCheckAnswer = (find) => {
	const tl = gsap.timeline();
	const color = find ? "forestgreen" : "crimson";

	tl.to(".word02", { color: color, duration: 0.1 })
		.to(".word02", { opacity: 1, duration: 0.1 })
		.to(".input-answer", { borderBottom: `2px solid ${color}`, duration: 0.1 }, "<");
};

export const next02FindAnimation = () => {
	gsap.from(".remain-words", { color: "green", opacity: 1, duration: 1 });
};

export const showFormsAnimation = (e, obj) => {
	const tl = gsap.timeline();

	switch (obj.menuOpen) {
		case false:
			tl.to(".words-body", { y: 550 });
			tl.to(".forms-add-word", { x: 0 }, "<");
			obj.menuOpen = "addWords";
			break;

		case "addWords":
			tl.to(".forms-add-word", { x: "-120vw" });
			tl.to(".words-body", { y: 0 }, "<");
			obj.menuOpen = false;
			break;

		default:
			obj.show(e, obj.menuOpen);
			obj.show(e, "addWords");
			break;
	}
};

export const showConfigsAnimation = (e, obj) => {
	const tl = gsap.timeline();

	switch (obj.menuOpen) {
		case false:
			tl.to(".configs-container", { x: 0 });
			obj.menuOpen = "configs";
			break;

		case "configs":
			tl.to(".configs-container", { x: "-120vw" });
			obj.menuOpen = false;
			break;

		default:
			obj.show(e, obj.menuOpen);
			obj.show(e, "configs");
			break;
	}
};

export const fakeComponents = () => {
	const tl = gsap.timeline();

	tl.from(".fake-components", { duration: 1, x: "-100vw", ease: "power2.out", opacity: 0 })
		.from(".my-list-component", { duration: 1, x: "-100vw", ease: "power2.out", opacity: 0 }, "<")
		.from(".header", { duration: 1, y: "-30", ease: "power2.out", opacity: 0 }, "<");
};

export const opening = () => {
	const tl = gsap.timeline();

	tl.fromTo(".opening .img", { opacity: 0, x: "-120vw" }, { opacity: 1, ease: "power2.out", duration: 1.5, rotate: -10, x: 0 }).fromTo(
		".opening .title",
		{ scale: 0.99, x: 10, opacity: 0, duration: 1, ease: "power2.out" },
		{ scale: 1, x: 0, opacity: 1 },
		"-=1"
	);
};

export const closures = () => {
	const tl = gsap.timeline();

	tl.to(".listas", { x: 0, duration: 1, ease: "power2.out" })
		.to(".opening .title, .img", { opacity: 0, pointerEvents: "none", ease: "power2.out", zIndex: -1, display: "none" }, "-=0.8")
		.to(".body-initial-screen .header", { opacity: 1, y: 0, ease: "power2.out", duration: 1 }, "-=0.5");
};

export const newList = (open) => {
	const tl = gsap.timeline();

	if (!open) {
		tl.to("body", { overflow: "hidden" }).to(".listas", { y: 500 }, "<").fromTo(".form-new-list", { opacity: 0, y: -50 }, { display: "flex", position: "absolute", y: 100, opacity: 1 }, "<");
	} else {
		tl.to(".listas", { y: 0 }, "<").to(".form-new-list", { opacity: 0, y: -50, display: "none" }, "<").to("body", { overflow: "auto" });
	}
};

export const onFocusInput = (e) => {
	const tl = gsap.timeline();

	if (e.target.type === "text") {
		tl.to(".form-new-list .span-input", { y: 0, fontSize: "1rem" });
	} else {
		tl.to(".form-new-list .span-textarea", { y: 0 });
	}
};

export const onBlurInput = (e) => {
	const tl = gsap.timeline();

	if (e.target.type === "text") {
		if (e.target.value) {
			return;
		} else {
			tl.to(".form-new-list .span-input", { y: 50, fontSize: "2rem" });
		}
	} else {
		if (e.target.value) {
			return;
		} else {
			tl.to(".form-new-list .span-textarea", { y: 50 });
		}
	}
};

export const individualWordListAnimation = () => {
	const tl = gsap.timeline();
	tl.to("body", { overflow: "hidden" });
	tl.fromTo(".individaul-word-list header", { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, "<");
	tl.fromTo(".container .info", { x: "-100vw", opacity: 0 }, { x: 0, opacity: 1 }, "<");
	tl.fromTo(".container .words", { x: "120vw", opacity: 0, width: "fitContent", right: 50 }, { x: 0, opacity: 1 }, "<");
	tl.to("body", { overflow: "unset" });
};

export const deleteTermAndDefinitionAnimation = (e, tdArray, index, deleteTermAndDefinition) => {
	e.preventDefault();
	const div = e.target.parentNode;
	const tl = gsap.timeline();

	tl.to(div, { scale: 0, duration: 0.5 })
		.call(deleteTermAndDefinition, [tdArray, index], "<")
		.from(`.words-textArea:nth-child(n + ${index + 2})`, { y: 90, duration: 0.5 }, "<");
};

export const typeWriterAnimation = ($class, time) => {};
