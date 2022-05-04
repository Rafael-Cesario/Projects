const URL = "http://localhost:3000/notebooks";
const HEADERS = { "Content-Type": "application/json" };

interface NB {
	name: string;
	id: number;
}

const fetchNotebooks = async (setNotebooks: React.Dispatch<React.SetStateAction<never[]>>) => {
	const request = await fetch(`${URL}?_sort=id&_order=desc`);
	const res = await request.json();
	setNotebooks(res);
};

const saveOnDB = async (name: string) => {
	const content = { name };

	fetch(URL, {
		headers: HEADERS,
		body: JSON.stringify(content),
		method: "POST",
	});
};

const filterNotebooks = async (notebookName: string, setNotebooks: React.Dispatch<React.SetStateAction<never[]>>) => {
	const request = await fetch(`${URL}?q=${notebookName}`);
	const response = await request.json();
	setNotebooks(response);
};

const fetchOneNB = async (id: number, setData: React.Dispatch<React.SetStateAction<NB>>) => {
	const request = await fetch(`${URL}?id=${id}`);
	const [notebook] = await request.json();
	console.log(notebook);
	setData(notebook);
};

export { fetchNotebooks, saveOnDB, filterNotebooks, fetchOneNB };
