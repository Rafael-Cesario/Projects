const tabs = document.querySelectorAll('.tab') as NodeListOf<HTMLButtonElement>;

const openCity = (text: string) => {
	const contents = document.querySelectorAll('.content') as NodeListOf<HTMLDivElement>;

	for (let content of contents) {
		content.style.display = content.getAttribute('id') === text ? 'block' : 'none';
	}

	for (let tab of tabs) {
		tab.textContent === text ? (tab.className += ' active') : tab.classList.remove('active');
	}
};

for (let tab of tabs) {
	const text = tab.textContent as string;
	tab.addEventListener('click', () => openCity(text));
	tab.id.includes('default-open') && tab.click();
}
