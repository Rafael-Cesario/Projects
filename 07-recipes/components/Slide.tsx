import { ArrowL, ArrowR } from '../public/svgs/arrows';
import { Food } from './Food';
import { foods } from '../utils/foods';

export const Slide = () => {
	const slideGoTo = (goTo: string) => {
		const values = { left: -500, right: 500 } as { [key: string]: number };
		const slide = document.querySelector('#slide') as HTMLDivElement;

		slide.scrollBy({ left: values[goTo], behavior: 'smooth' });
	};

	return (
		<div className=' flex px-[8rem]	mt-[5rem] bg-neutral-800'>
			<button onClick={() => slideGoTo('left')}>
				<ArrowL />
			</button>

			<div
				id='slide'
				className='overflow-x-auto overflow-y-hidden py-8 flex scrollbar-hide bg-neutral-800 rounded mx-4'>
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
