import { ArrowL, ArrowR } from '../public/svgs/arrows';
import { Food } from './Food';

export const Slide = () => {
	const foods = [
		{
			src: '/images/hamburguer.jpeg',
			foodName: 'Hambúrguer',
			time: '40 min',
			plates: '12 Porções',
		},
		{
			src: '/images/pizza.jpeg',
			foodName: 'Pizza',
			time: '1 hr',
			plates: '4 pizzas',
		},
		{
			src: '/images/macarrão.jpeg',
			foodName: 'Macarrão',
			time: '30 min',
			plates: '10 Porções',
		},
	];

	const slideGoTo = (goTo: string) => {
		const values = { left: -250, right: 250 } as { [key: string]: number };
		const slide = document.querySelector('#slide') as HTMLDivElement;

		slide.scrollBy({ left: values[goTo], behavior: 'smooth' });
	};

	return (
		<div className='h-52 m-16 mt-20 rounded p-8 flex items-center justify-center'>
			<button onClick={() => slideGoTo('left')}>
				<ArrowL />
			</button>

			<div
				id='slide'
				className='overflow-x-auto overflow-y-hidden py-8 flex scrollbar-hide'>
				{foods.map((food, index) => {
					return <Food key={food.foodName + index} props={{ ...food }} />;
				})}
			</div>

			<button onClick={() => slideGoTo('right')}>
				<ArrowR />
			</button>
		</div>
	);
};
