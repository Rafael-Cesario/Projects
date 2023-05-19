const showMenus = () => {
	const topNav = document.querySelector('#TopNav') as HTMLDivElement;
	topNav.classList.toggle('responsive');
};

const $icon = document.querySelector('.icon') as HTMLLinkElement;
$icon.addEventListener('click', () => showMenus());
