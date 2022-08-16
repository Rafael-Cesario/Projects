import router from 'next/router';
import { AppStyle } from '../style/app.style';
import { GlobalStyle } from '../style/global.style';

const Index = () => {
	return (
		<>
			<title>Recipes App</title>

			<AppStyle>
				<h1 className="icon">&#x2615;</h1>
				<h1 className="title">Recipes App</h1>
				<p className="paragraph">Salve suas receitas para mais tarde</p>

				<div className="buttons">
					<button className="login">Entrar</button>
					<button className="create-account" onClick={() => router.push('/auth/createAccount')}>
						Criar uma conta
					</button>
				</div>
			</AppStyle>

			<GlobalStyle />
		</>
	);
};

export default Index;
