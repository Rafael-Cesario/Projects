import { useEffect, useState } from 'react';

type TypeTheme = 'light' | 'dark';

export const useLocalTheme = (initialState: TypeTheme) => {
	const [theme, setTheme] = useState(initialState);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const storage = localStorage.getItem('theme') as TypeTheme;
		const themeName = (JSON.parse(storage) as TypeTheme) || initialState;
		setTheme(themeName);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		if (!isLoading) localStorage.setItem('theme', JSON.stringify(theme));
	}, [theme]);

	return [theme, setTheme] as [TypeTheme, (theme: TypeTheme) => void];
};
