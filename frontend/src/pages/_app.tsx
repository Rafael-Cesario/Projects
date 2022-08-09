import { GlobalStyle } from '../style/global.style';

const App = () => {
	return (
		<>
			<title>Recipes App</title>

			<div>
				<h1>&#x2615;</h1>
				<h1>Recipes App</h1>
				<p>Salve suas receitas para mais tarde</p>
				<div>
					<button>Entrar</button>
					<button>Criar uma conta</button>
				</div>
			</div>

			<GlobalStyle />
		</>
	);
};

export default App;
