/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Field } from './field';
import { userQueries } from '../services/userQueries';
import { TypeValues, validateData } from '../utils/validateData';
import { useMessage } from '../utils/useMessage';

interface FormProps {
	props: {
		active: string;
		setActive: (active: string) => void;
	};
}

const valuesInitialState: TypeValues = {
	Entrar: { email: '', password: '' },
	'Criar conta': { email: '', name: '', password: '', confirmPassword: '' },
};

export const Form = ({ props }: FormProps) => {
	const { active, setActive } = props;

	const [values, setValues] = useState(valuesInitialState);
	const [showMessage, setShowMessage] = useMessage();

	const fields = Object.keys(values[active]);

	const sendData = async () => {
		const hasError = validateData(values, active);
		if (hasError) return;

		if (active === 'Criar conta') {
			const { email, name, password } = values[active];
			const user = { email, name, password };

			const createUserResponse = await userQueries.createUser(user);

			createUserResponse &&
				setShowMessage({
					show: true,
					color: 'forestgreen',
					message: 'Conta criada com sucesso',
				});

			setActive('Entrar');
			return;
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

			{showMessage.show && (
				<h1
					className='
						absolute bottom-10 right-10
						p-2 px-4 rounded
						shadow-black shadow-md
						'
					style={{ backgroundColor: showMessage.color }}>
					{showMessage.message}
				</h1>
			)}
		</>
	);
};
