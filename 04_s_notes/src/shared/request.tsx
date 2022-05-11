const URL = "http://localhost:3000/notebooks";
const HEADERS = { "Content-Type": "application/json" };

interface NB {
	name: string;
	pages: {};
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

const fetchOneNB = async (id: number) => {
	const request = await fetch(`${URL}?id=${id}`);
	const [notebook] = await request.json();
	return notebook;
};

const deleteNB = async (id: number) => {
	const options = {
		headers: HEADERS,
		method: "DELETE",
	};

	await fetch(`${URL}/${id}`, options);
};

const saveNotesOnDB = async (id: string, name: string, notes: string) => {
	const body = { name, notes };

	const options = {
		headers: HEADERS,
		method: "PATCH",
		body: JSON.stringify(body),
	};

	await fetch(`${URL}/${id}`, options);
};

const fetchNotes = async (id: string) => {
	try {
		const request = await fetch(`${URL}/${id}`);
		const response = await request.json();
		return response;
	} catch (error: any) {
		console.log(error.message);
	}
};

const saveColorsDB = async (colors: {}, id: string) => {
	const body = {
		favColors: colors,
	};

	const options = {
		headers: HEADERS,
		method: "PATCH",
		body: JSON.stringify(body),
	};

	await fetch(`${URL}/${id}`, options);
};

const saveNewPageName = async (pageName: string, id: string) => {
	fetch(`${URL}/${id}`);
};

export { fetchNotebooks, saveOnDB, filterNotebooks, fetchOneNB, deleteNB, saveNotesOnDB, fetchNotes, saveColorsDB, saveNewPageName };
