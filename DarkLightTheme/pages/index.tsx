import { StyledGlobal } from '../styles/styledGlobal';
import { theme, ThemeProvider } from '../styles/themeProvider';
import { useLocalTheme } from '../utils/useLocalTheme';

const Home = () => {
	const [themeName, setThemeName] = useLocalTheme('dark');

	const changeTheme = () => {
		const newThemeName = themeName === 'light' ? 'dark' : 'light';
		setThemeName(newThemeName);
	};

	return (
		<>
			<StyledGlobal theme={theme[themeName]} />

			<ThemeProvider theme={theme[themeName]}>
				<h1>Dark and Light theme with styled Components</h1>
				<button onClick={() => changeTheme()}>Change the theme</button>
			</ThemeProvider>
		</>
	);
};

export default Home;
