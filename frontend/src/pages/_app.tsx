import { GlobalStyle } from '../style/global.style';
import { AppStyle } from '../style/app.style';
import { useRouter } from 'next/router';

const App = () => {
	const router = useRouter();

	return (
		<>
			<title>Recipes App</title>

			<AppStyle>
				<h1 className="icon">&#x2615;</h1>
				<h1 className="title">Recipes App</h1>
				<p className="paragraph">Salve suas receitas para mais tarde</p>

				<div className="buttons">
					<button className="login">Entrar</button>
					<button className="create-account" onClick={() => router.push('/createAccount')}>
						Criar uma conta
					</button>
				</div>
			</AppStyle>

			<GlobalStyle />
		</>
	);
};

export default App;
