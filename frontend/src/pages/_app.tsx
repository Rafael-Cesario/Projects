import { AccountForm } from '../components/accountForm';
import { CreateAccountForm } from '../components/createAccountForm';
import { GlobalStyle } from '../style/global.style';
import { AppStyle } from '../style/app.style';
import { formAnimation } from '../utils/formAnimation';
import { useCallback, useState } from 'react';

const App = () => {
	const [isFormVisible, setIsFormVisible] = useState(false);

	const showCreateAccountForm = useCallback(() => {
		formAnimation(isFormVisible);

		setIsFormVisible(!isFormVisible);
	}, [isFormVisible]);

	return (
		<>
			<title>Recipes App</title>

			<AppStyle>
				<h1 className="icon">&#x2615;</h1>
				<h1 className="title">Recipes App</h1>
				<p className="paragraph">Salve suas receitas para mais tarde</p>
				<div className="buttons">
					<button className="login">Entrar</button>
					<button className="create-account" onClick={() => showCreateAccountForm()}>
						Criar uma conta
					</button>
				</div>

				<AccountForm title={'Criar Conta'}>
					<CreateAccountForm />
				</AccountForm>
			</AppStyle>

			<GlobalStyle />
		</>
	);
};

export default App;
