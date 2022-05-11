const URL = "http://localhost:3000/notebooks";
const HEADERS = { "Content-Type": "application/json" };

type configs = {
	NBname: string,
	favColors: string[],
	pages: {},
	pageName: {
		oldPageName: string,
		newPageName: string
	}
}


const replaceName = (OBJ: any, newName: string, oldName: string) => {
	OBJ[newName] = OBJ[oldName];
	delete OBJ[oldName];
};

export const fetchNotebooks = async (setNotebooks: React.Dispatch<React.SetStateAction<never[]>>) => {
	const request = await fetch(`${URL}?_sort=id&_order=desc`);
	const res = await request.json();
	setNotebooks(res);
};

export const saveOnDB = async (name: string) => {
	const content = {
		name: name,
		pages: {
			Pagina01: "<font color=\"#d8d8d8\" face=\"Segoe UI\">Altere o nome da página clicando nele...</font>"
		},
	};

	const options = { headers: HEADERS, body: JSON.stringify(content), method: "POST" }

	await fetch(URL, options);
};

export const filterNotebooks = async (notebookName: string, setNotebooks: React.Dispatch<React.SetStateAction<never[]>>) => {
	const request = await fetch(`${URL}?q=${notebookName}`);
	const response = await request.json();
	setNotebooks(response);
};

export const fetchOneNB = async (id: number) => {
	const request = await fetch(`${URL}?id=${id}`);
	const [notebook] = await request.json();
	return notebook;
};

export const deleteNB = async (id: number) => {
	const options = { headers: HEADERS, method: "DELETE" };

	await fetch(`${URL}/${id}`, options);
};

export const saveNotesOnDB = async (id: string, pages: {}, pageName: string, notes: string) => {
	const body = { pages: { ...pages, [pageName]: notes } };
	const options = { headers: HEADERS, method: "PATCH", body: JSON.stringify(body) };
	await fetch(`${URL}/${id}`, options);
};

export const fetchNotes = async (id: string) => {
	const request = await fetch(`${URL}/${id}`);
	const response = await request.json();
	return response;
};

export const saveColorsDB = async (colors: {}, id: string) => {
	const body = { favColors: colors };
	const options = { headers: HEADERS, method: "PATCH", body: JSON.stringify(body) };
	await fetch(`${URL}/${id}`, options);
};

export const saveNewPageNameDB = async (id: string, pages: any, oldName: string, newName: string) => {
	replaceName(pages, newName, oldName);
	const body = { pages: { ...pages } };
	const options = { headers: HEADERS, method: "PATCH", body: JSON.stringify(body) };
	await fetch(`${URL}/${id}`, options);
};

export const saveConfigsDB = async (id: string, configs: configs) => {
	replaceName(configs.pages, configs.pageName.newPageName, configs.pageName.oldPageName);
	const pages = { ...configs.pages }
	const body = { name: configs.NBname, favColors: configs.favColors, pages: pages }
	const options = { headers: HEADERS, method: "PATCH", body: JSON.stringify(body) };
	await fetch(`${URL}/${id}`, options)
}
