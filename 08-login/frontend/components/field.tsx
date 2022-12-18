interface FieldProps {
	props: {
		fieldName: string;
	};
}

export const Field = ({ props }: FieldProps) => {
	const { fieldName } = props;

	return (
		<div className='flex flex-col my-8'>
			<label
				className='
				text-sm
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
					'
				id={fieldName}
				type='text'
				placeholder={fieldName + '...'}
			/>
		</div>
	);
};