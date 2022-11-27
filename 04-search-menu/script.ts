const searchGame = () => {
	const input = document.querySelector('#searchBar') as HTMLInputElement;
	const games = document.querySelectorAll('.game') as NodeListOf<HTMLSpanElement>;
	const textToSearch = input.value;

	for (let game of games) {
		const regex = new RegExp(textToSearch, 'gi');
		const gameDisplay = game.textContent?.match(regex) ? 'block' : 'none';
		game.style.display = gameDisplay;
	}
};
