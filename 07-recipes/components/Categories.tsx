import { Categorie } from './categorie';
import { categoriesArray } from '../utils/categories';

export const Categories = () => {
	return (
		<div className='my-[10rem] mx-20'>
			<h1 className='text-2xl font-bold my-12 mx-8 text-center'>Categorias</h1>

			<div className='flex flex-wrap justify-center'>
				{categoriesArray.map(categorie => {
					return <Categorie key={categorie.title} props={{ ...categorie }} />;
				})}
			</div>
		</div>
	);
};
