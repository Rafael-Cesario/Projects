import Head from 'next/head';
import { Cards } from '../components/cards';
import { Header } from '../components/header';
import { StarSVG } from '../public/svgs/start';

const Home = () => {
	return (
		<>
			<Head>
				<title>Recipes App</title>
			</Head>

			<Header />

			<main className='my-20 p-20 bg-neutral-800'>
				<h1 className='text-4xl col-span-3 text-center mb-20'>Recipes</h1>
				<Cards />
			</main>
		</>
	);
};

export default Home;
