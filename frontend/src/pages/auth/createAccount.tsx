import { AccountForm, CreateAccountFields } from '../../components';
import { CreateAccountStyle } from '../../style/auth/createAccount.style';
import { GlobalStyle } from '../../style/global.style';

const CreateAccount = () => {
	return (
		<CreateAccountStyle>
			<AccountForm title={'Criar conta'}>
				<CreateAccountFields />
			</AccountForm>

			<GlobalStyle />
		</CreateAccountStyle>
	);
};

export default CreateAccount;
