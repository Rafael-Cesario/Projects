import { useState } from 'react';
import { CreateAccountFormStyle } from './createAccountFields.style';

export const CreateAccountForm = () => {
	const [inputType, setInputType] = useState('password');

	const changeInputType = () => {
		const newInputType = inputType === 'password' ? 'text' : 'password';
		setInputType(newInputType);
	};

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
				<input required id="password" type={inputType} />
				<label htmlFor="password">
					Senha <span onClick={() => changeInputType()}>Mostrar Senha</span>
				</label>
			</div>

			<div className="field">
				<input required id="confirmPassword" type={inputType} />
				<label htmlFor="confirmPassword">
					Confirme sua senha <span onClick={() => changeInputType()}>Mostrar Senha</span>
				</label>
			</div>
		</CreateAccountFormStyle>
	);
};
