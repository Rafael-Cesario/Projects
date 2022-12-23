import { SearchIcon } from '../public/svgs/search';

export const Header = () => {
	return (
		<div className='p-8 px-28'>
			<div className='flex justify-between my-4'>
				<h1 className='text-4xl font-bold italic'>Recipes</h1>

				<div>
					<button className='mr-4 border-2 border-sky-500 px-8 py-1 rounded font-bold'>Login</button>
					<button className='text-neutral-100 bg-sky-700 px-8 py-1 rounded font-bold'>Cadastre-se</button>
				</div>
			</div>

			<hr className='my-4 border-sky-500' />

			<div className='flex justify-between'>
				<div>
					<button className='mr-4 text-neutral-400 hover:text-sky-500'>Receitas</button>
					<button className='mr-4 text-neutral-400 hover:text-sky-500'>Cardápio Semanal</button>
					<button className='mr-4 text-neutral-400 hover:text-sky-500'>Refeições</button>
					<button className='mr-4 text-neutral-400 hover:text-sky-500'>Bolos</button>
					<button className='mr-4 text-neutral-400 hover:text-sky-500'>Tortas</button>
					<button className='mr-4 text-neutral-400 hover:text-sky-500'>Sobremesas</button>
				</div>

				<div className='bg-neutral-800 rounded flex items-center py-1 px-4'>
					<SearchIcon />
					<input
						className='outline-none bg-transparent px-5'
						type='text'
						placeholder='Busque por uma receita'
					/>
				</div>
			</div>
		</div>
	);
};
