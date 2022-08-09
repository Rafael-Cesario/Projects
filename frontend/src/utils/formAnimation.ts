import gsap from 'gsap';

export const formAnimation = (isVisible: boolean) => {
	const tl = gsap.timeline();

	if (isVisible) {
		tl.to('.icon, .title, .paragraph, .buttons', { x: '0vw' });
		tl.to('.account-form', { x: '0vw' }, '-=.5');
		return;
	}

	tl.to('.icon, .title, .paragraph, .buttons', { x: '-25vw' });
	tl.to('.account-form', { x: '-51vw' }, '-=.5');
};
