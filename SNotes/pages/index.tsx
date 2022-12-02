import { useState } from 'react';
import { StyledGlobal } from '../styles/styledGlobal';
import { theme, TypeThemeName } from '../styles/styledTheme';

const Home = () => {
	const [themeName, setThemeName] = useState<TypeThemeName>('dark');

	return (
		<>
			<StyledGlobal theme={theme[themeName]} />
			<h1>Hello World</h1>
		</>
	);
};

export default Home;
