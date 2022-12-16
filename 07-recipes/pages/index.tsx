import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Recipes App</title>
			</Head>

			<h1 className='text-4xl m-5 font-bold'>Recipes App</h1>
			<p className='m-5 text-gray-400'>Find the perfect recipe</p>
		</>
	);
};

export default Home;
