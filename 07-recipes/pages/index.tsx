import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/footer';
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
			<main>
				<Header />
				<Slide />
				<Footer />
			</main>
		</>
	);
}
