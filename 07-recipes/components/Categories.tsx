import { Categorie } from './categorie';
import { categoriesArray } from '../utils/categories';

export const Categories = () => {
	return (
		<div className='my-[10rem] mx-20'>
			<h1 className='text-2xl font-bold my-12 mx-8'>Categorias</h1>

			{categoriesArray.map(categorie => {
				return <Categorie key={categorie.title} props={{ ...categorie }} />;
			})}
		</div>
	);
};
