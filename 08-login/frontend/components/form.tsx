import { verifyFields } from '../utils/verifyFields';
import { useState } from 'react';
import { Field } from './field';
import { changeInputStyle } from '../utils/changeInputStyle';
import { validateFields } from '../utils/validateFields';

interface FormProps {
	props: {
		active: 'Entrar' | 'Criar conta';
	};
}

export const Form = ({ props }: FormProps) => {
	const { active } = props;

	const [values, setValues] = useState({
		Entrar: {
			email: '',
			password: '',
		},

		'Criar conta': {
			email: '',
			name: '',
			password: '',
			confirmPassword: '',
		},
	});

	const fields = Object.keys(values[active]);

	const sendData = () => {
		const emptyFields = verifyFields(values, active);
		if (emptyFields.length) return changeInputStyle(emptyFields);

		if (active === 'Criar conta') {
			const notValidFields = validateFields(values, active);
			// if (notValidFields.length) return changeInputStyle(notValidFields);
		}
	};

	return (
		<>
			{fields.map(fieldName => {
				return <Field key={fieldName} props={{ fieldName, values, setValues, active }} />;
			})}

			<button onClick={() => sendData()} className='w-full text-center bg-neutral-900 rounded p-2 mt-8'>
				{active}
			</button>
		</>
	);
};
