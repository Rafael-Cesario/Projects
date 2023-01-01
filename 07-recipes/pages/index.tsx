import Head from 'next/head';
import { Categories } from '../components/Categories';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Slide } from '../components/Slide';

export default function Home() {
	return (
		<>
			<Head>
				<title>Recipes</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex flex-col justify-between min-h-screen'>
				<Header />
				<Slide />
				<Categories />
				<Footer />
			</main>
		</>
	);
}
