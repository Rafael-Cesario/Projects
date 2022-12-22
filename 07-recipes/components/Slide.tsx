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

	return (
		<div className='h-52 m-16 mt-20 rounded p-8 flex items-center '>
			<ArrowL />

			<div className='overflow-x-auto overflow-y-hidden py-8 flex scrollbar-hide'>
				{foods.map((food, index) => {
					return <Food key={food.foodName + index} props={{ ...food }} />;
				})}
			</div>

			<ArrowR />
		</div>
	);
};
