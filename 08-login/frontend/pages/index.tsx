import Head from 'next/head';
import { useState } from 'react';
import { Field } from '../components/field';
import { Menu } from '../components/menu';

const Home = () => {
	const loginFields = ['Email', 'Senha'];
	const createAccountFields = ['Email', 'Nome', 'Senha', 'Confirmar senha'];

	const [active, setActive] = useState('Entrar');

	return (
		<>
			<Head>
				<title>Login Page</title>
			</Head>

			<main className='flex justify-center items-center min-h-screen'>
				<div className='bg-neutral-800 rounded p-4 px-8 shadow-sm shadow-neutral-900'>
					<div className='flex justify-evenly'>
						<Menu props={{ title: 'Entrar', active, setActive }} />
						<Menu props={{ title: 'Criar conta', active, setActive }} />
					</div>

					<div className='mt-12'>
						{active === 'Entrar' &&
							loginFields.map(fieldName => <Field key={fieldName} props={{ fieldName }} />)}

						{active === 'Criar conta' &&
							createAccountFields.map(fieldName => <Field key={fieldName} props={{ fieldName }} />)}
					</div>

					<button className='w-full text-center bg-neutral-900 rounded p-2 mt-8'>{active}</button>
				</div>
			</main>
		</>
	);
};

export default Home;
