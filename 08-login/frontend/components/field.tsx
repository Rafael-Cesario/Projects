import produce from 'immer';
import { useState } from 'react';
import { PasswordButton } from './passwordButton';

type TypeDraft = { [OperationName: string]: { [fieldName: string]: string } };

type TypeValues = {
	Entrar: {
		email: string;
		password: string;
	};
	'Criar conta': {
		email: string;
		name: string;
		password: string;
		confirmPassword: string;
	};
};

interface FieldProps {
	props: {
		active: string;
		fieldName: 'email' | 'name' | 'password' | 'confirmPassword';
		values: TypeValues;
		// eslint-disable-next-line no-unused-vars
		setValues: (newValues: TypeValues) => void;
	};
}

export const Field = ({ props }: FieldProps) => {
	const { fieldName, values, setValues, active } = props;
	const fieldType = fieldName.match(/password/i) ? 'password' : 'text';
	const [showPassword, setShowPassword] = useState(false);

	const names = {
		email: 'Email',
		password: 'Senha',
		name: 'Nome',
		confirmPassword: 'Confirmar senha',
	};

	const changeValue = (input: HTMLInputElement) => {
		const value = input.value;

		const newValues = produce(values, (draft: TypeDraft) => {
			draft[active][fieldName] = value;
		});

		setValues(newValues);
	};

	return (
		<div className='flex flex-col my-8 relative'>
			<label
				className='
				text-sm
				text-neutral-500
				w-80
				mb-2
				'
				htmlFor={fieldName}>
				{names[fieldName]}
			</label>
			<input
				className='
					bg-neutral-900
					placeholder-neutral-500
					text-neutral-100
					p-2 px-4 pr-12 rounded
					outline-none
					focus:drop-shadow-md
					w-80
					border-2
					border-transparent
					'
				required
				id={fieldName}
				type={showPassword ? 'text' : fieldType}
				placeholder={names[fieldName] + '...'}
				onChange={e => changeValue(e.target)}
			/>

			{fieldType === 'password' && <PasswordButton props={{ showPassword, setShowPassword }} />}
		</div>
	);
};
