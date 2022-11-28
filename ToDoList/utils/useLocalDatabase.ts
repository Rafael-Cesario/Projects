import { useEffect, useState } from 'react';

export const useLocalDatabase = (initialState: string[]) => {
	const [lists, setLists] = useState<string[]>(initialState);

	useEffect(() => {
		const localList = localStorage.getItem('lists');
		if (!localList) return;
		setLists(JSON.parse(localList) as string[]);
	}, []);

	useEffect(() => {
		if (lists.length > 0) {
			const listsJson = JSON.stringify(lists);
			localStorage.setItem('lists', listsJson);
		}
	}, [lists]);

	return [lists, setLists] as [string[], (lists: string[]) => void];
};
