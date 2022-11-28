import { useEffect, useState } from 'react';

export const useLocalLists = (initialState: string[], key: string) => {
	const [lists, setLists] = useState(initialState);

	useEffect(() => {
		const localList = localStorage.getItem(key);
		if (!localList) return;
		setLists(JSON.parse(localList) as string[]);
	}, []);

	useEffect(() => {
		if (lists.length > 0) {
			const listsJson = JSON.stringify(lists);
			localStorage.setItem(key, listsJson);
		}
	}, [lists]);

	return [lists, setLists] as [string[], (lists: string[]) => void];
};
