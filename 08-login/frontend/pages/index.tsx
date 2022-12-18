import Head from 'next/head';
import { useState } from 'react';
import { Form } from '../components/form';
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

					{active === 'Entrar' && <Form props={{ fields: loginFields, active }} />}
					{active === 'Criar conta' && <Form props={{ fields: createAccountFields, active }} />}
				</div>
			</main>
		</>
	);
};

export default Home;
