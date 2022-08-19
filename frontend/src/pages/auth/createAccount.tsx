import { Create } from '../../components';
import { CreateAccountStyle } from '../../style/auth/createAccount.style';
import { GlobalStyle } from '../../style/global.style';

const CreateAccount = () => {
	return (
		<CreateAccountStyle>
			<Create title={'Criar conta'} />
			<GlobalStyle />
		</CreateAccountStyle>
	);
};

export default CreateAccount;
