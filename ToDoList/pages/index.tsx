import Head from 'next/head';
import { AppStyle } from '../styles/appStyle';

export default function Home() {
	return (
		<>
			<Head>
				<link href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap' rel='stylesheet' />
				<title>To Do List</title>
			</Head>

			<AppStyle>
				<header>
					<div className='title'>
						<h1>To Do List</h1>
						<p>Seu Aplicativo de tarefas</p>
					</div>

					<div className='menus'>
						<button>Criar Nova Lista</button>
						<button>Minhas Listas</button>
						<button>Página no Github</button>
					</div>
				</header>

				<main>
					<div className='lists'>
						<button>Programação</button>
						<button>Programação</button>
						<button>Programação</button>
					</div>
				</main>
			</AppStyle>
		</>
	);
}
