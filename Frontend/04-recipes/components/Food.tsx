import Image from 'next/image';
import { AiFillClockCircle } from 'react-icons/ai';
import { GiKnifeFork } from 'react-icons/gi';

interface FoodProps {
	props: {
		src: string;
		foodName: string;
		time: string;
		plates: string;
	};
}

export const Food = ({ props }: FoodProps) => {
	const { src, foodName, time, plates } = props;

	return (
		<a href='#' className='mx-4 rounded bg-neutral-800'>
			<div className='h-[150px] w-[200px] overflow-hidden rounded'>
				<Image src={src} alt={'food image'} width={200} height={150} className='object-center' />
			</div>

			<div className='p-4'>
				<h1 className='text-xl font-bold mb-2 text-white'>{foodName}</h1>

				<div className='flex flex-col text-neutral-300'>
					<div className='flex items-center mr-4'>
						<AiFillClockCircle className='inline mr-1' />
						<p>{time}</p>
					</div>

					<div className='flex items-center mr-4'>
						<GiKnifeFork className='inline mr-1' />
						<p>{plates}</p>
					</div>
				</div>
			</div>
		</a>
	);
};
