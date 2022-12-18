import { useState } from 'react';
import { Field } from './field';

interface FormProps {
	props: {
		fields: string[];
		active: string;
	};
}

export const Form = ({ props }: FormProps) => {
	const { fields, active } = props;
	const [values, setValues] = useState({
		Entrar: {},
		'Criar conta': {},
	});

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
