import { useEffect, useState } from 'react';

let isLoading = true;

export const useLocalLists = (initialState: string[], key: string) => {
	const [lists, setLists] = useState(initialState);

	useEffect(() => {
		const localList = localStorage.getItem(key);
		if (!localList) return;
		setLists(JSON.parse(localList) as string[]);
		isLoading = false;
	}, []);

	useEffect(() => {
		if (!isLoading) {
			const listsJson = JSON.stringify(lists);
			localStorage.setItem(key, listsJson);
		}
	}, [lists]);

	return [lists, setLists] as [string[], (lists: string[]) => void];
};
