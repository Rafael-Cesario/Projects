import { CreateAccountFormStyle } from './createAccountForm.style';

export const CreateAccountForm = () => {
	return (
		<CreateAccountFormStyle>
			<div className="field">
				<input required id="name" type="text" />
				<label htmlFor="name">Nome</label>
			</div>

			<div className="field">
				<input required id="email" type="text" />
				<label htmlFor="email">Email</label>
			</div>

			<div className="field">
				<input required id="password" type="text" />
				<label htmlFor="password">Senha</label>
			</div>

			<div className="field">
				<input required id="confirmPassword" type="text" />
				<label htmlFor="confirmPassword">Confirme sua senha</label>
			</div>
		</CreateAccountFormStyle>
	);
};
