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
		<div className='px-28 py-8'>
			<div id='slide' className='flex overflow-x-auto overflow-y-hidden scrollbar-hide'>
				{foods.map((food, index) => {
					return <Food key={food.foodName + index} props={{ ...food }} />;
				})}
			</div>

			<div className='flex justify-center items-center my-8'>
				<button className='flex justify-center' onClick={() => slideGoTo('left')}>
					<ArrowL />
				</button>
				<button className='flex justify-center' onClick={() => slideGoTo('right')}>
					<ArrowR />
				</button>
			</div>
		</div>
	);
};
