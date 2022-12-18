import Head from 'next/head';
import { Field } from '../components/field';

const Home = () => {
	const loginFields = ['Email', 'Senha'];

	return (
		<>
			<Head>
				<title>Login Page</title>
			</Head>

			<main className='flex justify-center items-center min-h-screen'>
				<div className='bg-neutral-800 rounded p-4 shadow-sm shadow-neutral-900'>
					<div className='flex justify-evenly'>
						<button className=''>Login</button>
						<button className='text-neutral-500'>Criar conta</button>
					</div>

					<div className='mt-8'>
						{loginFields.map(fieldName => (
							<Field key={fieldName} props={{ fieldName }} />
						))}
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
