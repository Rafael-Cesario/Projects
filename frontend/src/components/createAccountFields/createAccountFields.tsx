import { useState } from 'react';
import { CreateAccountFieldsStyle } from './createAccountFields.style';
import produce from 'immer';

export const CreateAccountFields = () => {
	const [inputType, setInputType] = useState('password');

	const [fieldsValue, setFieldsValue] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const changeInputType = () => {
		const newInputType = inputType === 'password' ? 'text' : 'password';
		setInputType(newInputType);
	};

	const changeFieldsValue = (e: React.SyntheticEvent) => {
		const input = e.target as HTMLInputElement;
		const value = input.value;
		const id = input.getAttribute('id');

		const newState = produce(fieldsValue, (draft) => {
			draft[id] = value;
		});

		setFieldsValue(newState);
	};

	return (
		<CreateAccountFieldsStyle>
			<div className="field">
				<input required id="name" type="text" onChange={(e) => changeFieldsValue(e)} />
				<label htmlFor="name">Nome</label>
			</div>

			<div className="field">
				<input required id="email" type="text" onChange={(e) => changeFieldsValue(e)} />
				<label htmlFor="email">Email</label>
			</div>

			<div className="field">
				<input required id="password" type={inputType} onChange={(e) => changeFieldsValue(e)} />
				<label htmlFor="password">
					Senha <span onClick={() => changeInputType()}>Mostrar Senha</span>
				</label>
			</div>

			<div className="field">
				<input required id="confirmPassword" type={inputType} onChange={(e) => changeFieldsValue(e)} />
				<label htmlFor="confirmPassword">
					Confirme sua senha <span onClick={() => changeInputType()}>Mostrar Senha</span>
				</label>
			</div>
		</CreateAccountFieldsStyle>
	);
};
