import Image from 'next/image';

interface CategorieProps {
	props: {
		title: string;
		types: string[];
		src: string;
	};
}

export const Categorie = ({ props }: CategorieProps) => {
	const { title, types, src } = props;

	return (
		<div className='flex'>
			<div className='border border-sky-500 p-4 rounded w-fit relative mx-8'>
				<Image className='absolute -top-5 left-3' src={src} width={30} height={30} alt={'cake png'} />
				<h1 className='text-xl font-bold'>{title}</h1>
				<div className='flex flex-col px-4'>
					{types.map(type => {
						return (
							<a key={type} className='text-neutral-400 hover:text-neutral-200 my-1' href='#'>
								{type}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};
