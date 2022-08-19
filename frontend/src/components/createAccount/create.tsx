import { CreateStyle } from './create.style';
import { useRouter } from 'next/router';
import { useState } from 'react';
import produce from 'immer';
import { verifyFields } from './utils/verifyFields';
import { sendErrorMessage } from './utils/sendErrorMessage';

export const Create = ({ title }) => {
	const router = useRouter();

	const [inputType, setInputType] = useState('password');

	const [fieldValues, setFieldValues] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const changeInputType = () => {
		const newInputType = inputType === 'password' ? 'text' : 'password';
		setInputType(newInputType);
	};

	const changeFieldValues = (e: React.SyntheticEvent) => {
		const input = e.target as HTMLInputElement;
		const value = input.value;
		const id = input.getAttribute('id');

		const newState = produce(fieldValues, (draft) => {
			draft[id] = value;
		});

		setFieldValues(newState);
	};

	const createNewAccount = () => {
		const hasInvalidFields = verifyFields(fieldValues);
		if (hasInvalidFields) return sendErrorMessage(hasInvalidFields);

		return;
	};

	return (
		<CreateStyle className="account-form" data-testid="formAccount">
			<button className="button-close" onClick={() => router.push('/')}>
				{'<'} Voltar
			</button>
			<h1 className="form-title">{title}</h1>

			<div className="fields">
				<div className="field">
					<input required id="name" type="text" onChange={(e) => changeFieldValues(e)} />
					<label htmlFor="name">Nome</label>
				</div>

				<div className="field">
					<input required id="email" type="text" onChange={(e) => changeFieldValues(e)} />
					<label htmlFor="email">Email</label>
				</div>

				<div className="field">
					<input required id="password" type={inputType} onChange={(e) => changeFieldValues(e)} />
					<label htmlFor="password">
						Senha <span onClick={() => changeInputType()}>Mostrar Senha</span>
					</label>
				</div>

				<div className="field">
					<input required id="confirmPassword" type={inputType} onChange={(e) => changeFieldValues(e)} />
					<label htmlFor="confirmPassword">
						Confirme sua senha <span onClick={() => changeInputType()}>Mostrar Senha</span>
					</label>
				</div>
			</div>

			<button className="button" onClick={() => createNewAccount()}>
				{title}
			</button>
		</CreateStyle>
	);
};
