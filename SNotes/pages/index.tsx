import { useState } from 'react';
import { Menu } from '../components/menu/menu';
import { TextContainer } from '../components/textContainer/textContainer';
import { StyledGlobal } from '../styles/styledGlobal';
import { theme, TypeThemeName } from '../styles/styledTheme';

const Home = () => {
	const [themeName, setThemeName] = useState<TypeThemeName>('dark');

	return (
		<>
			<StyledGlobal theme={theme[themeName]} />
			<h1 className='title'>SNotes</h1>

			<Menu props={{ themeName }} />
			<TextContainer props={{ themeName }} />
		</>
	);
};

export default Home;
