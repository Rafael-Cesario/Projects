import { useState } from 'react';
import { Field } from './field';

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
		console.log({ values });
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
