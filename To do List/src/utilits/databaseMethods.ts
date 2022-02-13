const saveListOnDatabase = async (listName: string) => {
	const body = { listName: listName };

	const data = await fetch("http://localhost:4000/lists", {
		method: "POST",
		headers: { "Content-type": "application/json; charset=UTF-8" },
		body: JSON.stringify(body),
	});
};

const allLists = async () => {
	const lists = await fetch("http://localhost:4000/lists");
	return await lists.json();
};

const allTodos = async () => {
	const todos = await fetch("http://localhost:4000/todos");
	return await todos.json();
};

export { saveListOnDatabase, allLists, allTodos };
