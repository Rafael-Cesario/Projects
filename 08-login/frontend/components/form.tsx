import { useState } from 'react';
import { Field } from './field';
import { validateData } from '../utils/validateData';

interface FormProps {
	props: { active: 'Entrar' | 'Criar conta' };
}

const valuesOBJ = {
	Entrar: { email: '', password: '' },
	'Criar conta': { email: '', name: '', password: '', confirmPassword: '' },
};

export const Form = ({ props }: FormProps) => {
	const { active } = props;
	const [values, setValues] = useState(valuesOBJ);
	const fields = Object.keys(values[active]);

	const sendData = () => {
		const hasError = validateData(values, active);
		if (hasError) return;
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
