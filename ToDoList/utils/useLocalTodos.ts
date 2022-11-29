import { useEffect, useState } from 'react';
import { TTodos } from './todosType';

let isLoading = true;

export const useLocalTodos = (key: string) => {
	const [todos, setTodos] = useState<TTodos>({
		next: [],
		current: [],
		done: [],
	});

	useEffect(() => {
		const localList = localStorage.getItem(key);
		if (!localList) return;
		setTodos(JSON.parse(localList) as TTodos);
		isLoading = false;
	}, [key]);

	useEffect(() => {
		if (!isLoading) {
			const todosJson = JSON.stringify(todos);
			localStorage.setItem(key, todosJson);
		}
	}, [todos]);

	return [todos, setTodos] as [todos: TTodos, setTodos: (todos: TTodos) => void];
};
