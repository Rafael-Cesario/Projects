import { MenuSVG } from '../public/svgs/menu';
import { SearchSVG } from '../public/svgs/search';

const Header = () => {
	const showInput = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const input = button.previousSibling as HTMLInputElement;

		input.classList.toggle('hidden');
		input.focus();
	};

	return (
		<header className='grid grid-cols-3 items-center justify-items-center m-8'>
			<button className='justify-self-start'>
				<MenuSVG />
			</button>

			<div>
				<h1 className='text-3xl text-main font-bold  text-center'>Recipes App</h1>
				<p className='text-neutral-400 text-center'>Save your recipes for latter</p>
			</div>

			<div className='justify-self-end flex items-center bg-neutral-800 px-5 rounded'>
				<input className='w-60 bg-transparent py-2 outline-none hidden' type='text' />
				<button className='text-main py-2' onClick={e => showInput(e)}>
					<SearchSVG />
				</button>
			</div>
		</header>
	);
};

export { Header };
