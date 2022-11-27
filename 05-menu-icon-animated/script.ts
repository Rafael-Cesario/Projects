const menu = document.querySelector('.menu') as HTMLDivElement;
const [line1, line2, line3] = menu.querySelectorAll('hr') as NodeListOf<HTMLHRElement>;

const openMenu = () => {
	line1.style.transform = 'translate(0, 1.2rem)';
	line2.style.opacity = '0';
	line3.style.transform = 'translate(0, -1.2rem)';

	setTimeout(() => {
		line1.style.transform = 'translate(0, 1.2rem) rotate(40deg)';
		line3.style.transform = 'translate(0, -1.2rem) rotate(-40deg)';
	}, 500);
};

const closeMenu = () => {
	line1.style.transform = 'translate(0, 1.2rem) rotate(0)';
	line3.style.transform = 'translate(0, -1.2rem) rotate(0)';

	setTimeout(() => {
		line2.style.opacity = '1';
		line1.style.transform = 'translate(0, 0) rotate(0)';
		line3.style.transform = 'translate(0, 0) rotate(0)';
	}, 500);
};

const openCloseMenu = () => {
	menu.classList.toggle('active');
	const isMenuActive = menu.classList.contains('active');

	if (isMenuActive) return openMenu();
	else closeMenu();
};
