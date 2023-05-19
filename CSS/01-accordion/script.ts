const accordion = document.querySelectorAll('.accordion') as NodeListOf<HTMLButtonElement>;

for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', () => {
		accordion[i].classList.toggle('active');

		const panel = accordion[i].nextElementSibling as HTMLDivElement;
		const panelStyle = panel.style.maxHeight ? null : panel.scrollHeight + 'px';

		panel.style.maxHeight = panelStyle!;
	});
}
