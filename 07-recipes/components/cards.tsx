import { StarSVG } from '../public/svgs/start';

export const Cards = () => {
	const recipes = [
		{
			src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
			alt: 'Salmon sea food',
			type: 'Seafood',
			title: 'Salmon Fish',
		},
		{
			src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
			alt: 'Salmon sea food',
			type: 'Seafood',
			title: 'Salmon Fish',
		},
		{
			src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
			alt: 'Salmon sea food',
			type: 'Seafood',
			title: 'Salmon Fish',
		},
		{
			src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
			alt: 'Salmon sea food',
			type: 'Seafood',
			title: 'Salmon Fish',
		},
		{
			src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
			alt: 'Salmon sea food',
			type: 'Seafood',
			title: 'Salmon Fish',
		},
		{
			src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
			alt: 'Salmon sea food',
			type: 'Seafood',
			title: 'Salmon Fish',
		},
		{
			src: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
			alt: 'Salmon sea food',
			type: 'Seafood',
			title: 'Salmon Fish',
		},
	];

	return (
		<div className='flex flex-wrap justify-center'>
			{recipes.map(recipe => {
				const { src, alt, type, title } = recipe;

				return (
					<div
						key={alt}
						className='
						bg-neutral-800 
						overflow-hidden 
						rounded shadow-md 
						shadow-neutral-900 
						relative 
						max-w-xs 
						cursor-pointer 
						hover:scale-105 
						transition-transform 
						m-8'>
						<img src={src} alt={alt} />
						<span className='m-4 text-neutral-500 block'>{type}</span>
						<h1 className='m-4'>{title}</h1>
						<button className='absolute top-0 right-0 m-4 bg-neutral-800 p-2 rounded-full shadow'>
							<StarSVG />
						</button>
					</div>
				);
			})}
		</div>
	);
};
