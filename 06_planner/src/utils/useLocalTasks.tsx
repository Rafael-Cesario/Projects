import React, { useEffect, useState } from "react";

const useLocalTasks = (key: string, initialValue: unknown): [unknown, React.Dispatch<unknown>] => {
	const [state, setState] = useState(initialValue);

	useEffect(() => {
		const storageData = JSON.parse(localStorage.getItem(key));
		setState(storageData);
	}, []);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, setState];
};

export { useLocalTasks };
