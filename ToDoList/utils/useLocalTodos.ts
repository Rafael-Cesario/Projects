import { useEffect, useState } from 'react';
import { TTodos } from './todosType';

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
	}, [key]);

	useEffect(() => {
		const hasValue = Object.values(todos.current).length > 0 || Object.values(todos.done).length > 0 || Object.values(todos.next).length > 0;

		if (hasValue) {
			const todosJson = JSON.stringify(todos);
			localStorage.setItem(key, todosJson);
		}
	}, [todos]);

	return [todos, setTodos] as [todos: TTodos, setTodos: (todos: TTodos) => void];
};
