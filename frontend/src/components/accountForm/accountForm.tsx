import { AccountFormStyle } from './accountForm.style';

export const AccountForm = ({ title, children }) => {
	return (
		<AccountFormStyle className="account-form" data-testid="formAccount">
			<button className="button-close">{'<'} Voltar</button>
			<h1 className="form-title">{title}</h1>

			{children}

			<button className="button">{title}</button>
		</AccountFormStyle>
	);
};
