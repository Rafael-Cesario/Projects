import { useEffect, useState } from 'react';

export const useLocalLists = (initialState: string[], key: string) => {
	const [lists, setLists] = useState(initialState);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const localList = localStorage.getItem(key);
		setIsLoading(false);
		if (!localList) return;
		setLists(JSON.parse(localList) as string[]);
	}, []);

	useEffect(() => {
		if (!isLoading) {
			const listsJson = JSON.stringify(lists);
			localStorage.setItem(key, listsJson);
		}
	}, [lists]);

	return [lists, setLists] as [string[], (lists: string[]) => void];
};
