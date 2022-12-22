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
		<div className='bg-neutral-800 rounded shadow-neutral-900 shadow-md mx-8'>
			<div className='h-36 overflow-hidden rounded'>
				<Image src={src} alt={'food image'} width={350} height={100} className='object-cover' />
			</div>

			<div className='p-4 w-72'>
				<h1 className='text-xl font-bold mb-2 text-sky-500'>{foodName}</h1>

				<div className='flex text-neutral-300'>
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
		</div>
	);
};
