import { useEffect, useState } from 'react';
import { TTodos } from '../components/pages/todo/interface/todosType';

export const useLocalTodos = (key: string) => {
	const [todos, setTodos] = useState<TTodos>({
		next: [],
		current: [],
		done: [],
	});

	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		const localList = localStorage.getItem(key);
		setIsloading(false);
		if (!localList) return;
		setTodos(JSON.parse(localList) as TTodos);
	}, [key]);

	useEffect(() => {
		if (!isLoading) {
			const todosJson = JSON.stringify(todos);
			localStorage.setItem(key, todosJson);
		}
	}, [todos]);

	return [todos, setTodos] as [todos: TTodos, setTodos: (todos: TTodos) => void];
};
