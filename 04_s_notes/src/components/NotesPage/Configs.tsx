import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MessageContext } from "../../context/messageContext";
import { NotesContext } from "../../context/notesContext";
import { fetchNotes, saveConfigsDB } from "../../shared/request";
import { colors } from "../../styles/Notebook.style";
import { ConfigsStyle } from "../../styles/NotesPage/configsStyle";
import { DeleteNB } from "./deleteNB";

interface NBprops {
	NB: { name: string; id: number };
}

const Configs: React.FC<NBprops> = ({ NB }) => {
	const { id } = useParams()
	const { favColors, setFavColors, pageName, pages, setConfigs, configs } = useContext(NotesContext)
	const { warningMessage } = useContext(MessageContext)
	const [showDeleteDiv, setShowDeleteDiv] = useState(false);
	const [inputColors, setInputColors] = useState(favColors)
	const [notebookName, setNotebookName] = useState(NB.name)
	const [currentPageName, setCurrentPageName] = useState(pageName)


	const changeValueColorInput = (index: number, value: string) => {
		const newColorArray = [...inputColors]
		newColorArray[index] = value
		setInputColors(newColorArray)
	}

	const saveConfigs = async () => {

		const configs = {
			NBname: notebookName,
			favColors: inputColors,
			pages: pages,
			pageName: {
				oldPageName: pageName,
				newPageName: currentPageName
			}
		}

		await saveConfigsDB(id!, configs)
		warningMessage("Suas Configurações foram salvas, a págiva irá recarregar", colors.Green)
		setTimeout(() => location.reload(), 1000)
	}

	const attColors = async () => {
		const { favColors } = await fetchNotes(id!);
		if (favColors?.length > 0) setFavColors(favColors);
	};

	useEffect(() => { attColors() }, [])
	useEffect(() => { setInputColors(favColors) }, [favColors])

	return (
		<ConfigsStyle className="config-div">

			<div className="head">
				<h1>Configs</h1>
				<button onClick={e => setConfigs(false)}>x</button>
			</div>

			<div className="configs">
				<div className="config">
					<p>Nome do Caderno</p>
					<input type="text" placeholder={NB.name} onChange={e => setNotebookName(e.target.value)} />
				</div>

				<div className="config">
					<p>Nome da página atual</p>
					<input type="text" placeholder={pageName} onChange={e => setCurrentPageName(e.target.value)} />
				</div>

				<div className="config">
					<p>Cores Favoritas</p>
					<input type="color" value={inputColors[0]} onChange={e => changeValueColorInput(0, e.target.value)} />
					<input type="color" value={inputColors[1]} onChange={e => changeValueColorInput(1, e.target.value)} />
					<input type="color" value={inputColors[2]} onChange={e => changeValueColorInput(2, e.target.value)} />
					<input type="color" value={inputColors[3]} onChange={e => changeValueColorInput(3, e.target.value)} />
				</div>

			</div>


			<div className="buttons">
				<button onClick={e => saveConfigs()}>Salvar</button>
				<button onClick={(e) => setShowDeleteDiv(!showDeleteDiv)}>Deletar Caderno</button>
			</div>

			{showDeleteDiv && <DeleteNB NB={NB} setShowDeleteDiv={setShowDeleteDiv} />}
		</ConfigsStyle>
	);
};

export { Configs };
