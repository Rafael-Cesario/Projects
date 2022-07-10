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
	if (newName === oldName || !newName) return
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
			Pagina01: "<div><font face=\"Segoe UI\" color=\"#307eac\" size=\"5\"><b style=\"\">Configs</b></font></div><div><font face=\"Segoe UI\" color=\"#cfcfcf\">O menu configs fica na barra lateral a esquerda&nbsp;da tela, nele você pode alterar coisas como suas cores favoritas ou o nome da página atual.&nbsp;</font></div><div><font face=\"Segoe UI\" color=\"#cfcfcf\"><br></font></div><div><font face=\"Segoe UI\" color=\"#cfcfcf\"><br></font></div><div><b style=\"color: rgb(156, 48, 48); font-family: &quot;Segoe UI&quot;; font-size: x-large;\">Teclas de atalho</b><br></div><div><div><div><font color=\"#cfcfcf\" face=\"Segoe UI\">Também existem algumas teclas de atalho que você pode usar para agilizar sua escrita, você pode encontrar&nbsp;elas no menu dicas na barra lateral.</font></div></div></div><div><font color=\"#cfcfcf\" face=\"Segoe UI\"><br></font></div><div><font size=\"5\" color=\"#dfba16\" face=\"Segoe UI\"><b>Salvamento</b></font></div><div><font color=\"#d8d8d8\" face=\"Segoe UI\">Suas notas são salvas a cada 1 minuto, mas você pode salvar elas apertando </font><font size=\"2\" color=\"#dfba16\" face=\"Segoe UI\"><b style=\"\">[ ALT+ S ]</b></font><font color=\"#d8d8d8\" face=\"Segoe UI\">&nbsp;, você vera uma notificação confirmando que suas notas foram salvas.</font></div><div><font color=\"#cfcfcf\" face=\"Segoe UI\"><br></font></div><div><font color=\"#cfcfcf\" face=\"Segoe UI\"><br></font></div>"
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

// export const saveNewPageNameDB = async (id: string, pages: any, oldName: string, newName: string) => {
// 	replaceName(pages, newName, oldName);
// 	const body = { pages: { ...pages } };
// 	const options = { headers: HEADERS, method: "PATCH", body: JSON.stringify(body) };
// 	await fetch(`${URL}/${id}`, options);
// };

export const saveConfigsDB = async (id: string, configs: configs) => {
	replaceName(configs.pages, configs.pageName.newPageName, configs.pageName.oldPageName);
	const pages = { ...configs.pages }
	const body = { name: configs.NBname, favColors: configs.favColors, pages: pages }
	const options = { headers: HEADERS, method: "PATCH", body: JSON.stringify(body) };
	await fetch(`${URL}/${id}`, options)
}

export const createNewPageDB = async (id: string, pages: {}) => {
	pages = { ...pages, NovaPágina: "<font color=\"#d8d8d8\" face=\"Segoe UI\">Altere o nome da página clicando nele...</font>" }
	const body = { pages }
	const options = { headers: HEADERS, method: 'PATCH', body: JSON.stringify(body) }
	await fetch(`${URL}/${id}`, options)
}

export const deleteCurrentPageDB = async (id: string, pages: any, currentPageName: string) => {
	delete pages[currentPageName]
	const body = { pages }
	const options = { headers: HEADERS, method: 'PATCH', body: JSON.stringify(body) }

	try {
		fetch(`${URL}/${id}`, options)
		console.log('Pagina deletada')
	} catch (error: any) {
		if (error) return console.log(error.message)
	}

}