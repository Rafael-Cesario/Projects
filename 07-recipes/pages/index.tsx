import Head from 'next/head';
import { Title } from '../components/title';
import { BookSVG } from '../public/svgs/book';
import { MenuSVG } from '../public/svgs/menu';
import { SearchSVG } from '../public/svgs/search';

const Home = () => {
	const showInput = (e: React.SyntheticEvent) => {
		const button = e.target as HTMLButtonElement;
		const input = button.previousSibling as HTMLInputElement;

		input.classList.toggle('hidden');
		input.focus();
	};

	return (
		<>
			<Head>
				<title>Recipes App</title>
			</Head>

			<header className='grid grid-cols-3 items-center justify-items-center m-5'>
				<button className='justify-self-start'>
					<MenuSVG />
				</button>

				<div>
					<Title>Recipes App</Title>
					<p className='text-neutral-400'>Save your recipes for latter</p>
				</div>

				<div className='justify-self-end flex items-center bg-neutral-800 px-5 rounded'>
					<input className='w-60 bg-transparent py-2 outline-none hidden' type='text' />
					<button className='text-main py-2' onClick={e => showInput(e)}>
						<SearchSVG />
					</button>
				</div>
			</header>
		</>
	);
};

export default Home;
