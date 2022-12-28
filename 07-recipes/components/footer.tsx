import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className='mt-[5rem] flex justify-between bg-neutral-800 p-12'>
			<div>
				<h1 className='mb-4'>Acompanhe a gente pelas redes sociais!</h1>

				<div className='flex  bg-neutral-800 rounded w-fit'>
					<Image className='mr-[1rem]' src='/svgs/twitter.png' width={30} height={30} alt='instagram icon' />
					<Image className='mr-[1rem]' src='/svgs/instagram.png' width={30} height={30} alt='instagram icon' />
					<Image className='mr-[1rem]' src='/svgs/youtube.png' width={30} height={30} alt='instagram icon' />
					<Image className='mr-[1rem]' src='/svgs/tiktok.png' width={30} height={30} alt='instagram icon' />
				</div>
			</div>

			<div className='flex flex-col text-right'>
				<a className='hover:text-white' href='#'>
					Sobre Nós
				</a>
				<a className='hover:text-white' href='#'>
					Termos de uso
				</a>
				<a className='hover:text-white' href='#'>
					Trabalhe com a gente
				</a>
				<a className='hover:text-white' href='#'>
					Envie um prato
				</a>
			</div>
		</footer>
	);
};
