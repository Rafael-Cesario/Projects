import produce from 'immer';

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
		fieldName: string;
		values: TypeValues;
		// eslint-disable-next-line no-unused-vars
		setValues: (newValues: TypeValues) => void;
	};
}

export const Field = ({ props }: FieldProps) => {
	const { fieldName, values, setValues, active } = props;

	const changeValue = (input: HTMLInputElement) => {
		const value = input.value;

		const newValues = produce(values, (draft: TypeDraft) => {
			draft[active][fieldName] = value;
		});

		setValues(newValues);
	};

	return (
		<div className='flex flex-col my-8'>
			<label
				className='
				text-sm
				m-2
				text-neutral-500
				'
				htmlFor={fieldName}>
				{fieldName}
			</label>
			<input
				className='
					bg-neutral-900
					placeholder-neutral-500
					text-neutral-100
					p-2 px-4 rounded
					outline-none
					focus:drop-shadow-md
					w-96
					border-2
					border-transparent
					valid:border-green-700
					'
				required
				id={fieldName}
				type='text'
				placeholder={fieldName + '...'}
				onChange={e => changeValue(e.target)}
			/>
		</div>
	);
};
