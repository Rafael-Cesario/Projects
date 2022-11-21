import React, { useContext, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { MessageContext } from "../../context/messageContext";
import { NotesContext } from "../../context/notesContext";
import { openSidebar } from "../../shared/animations";
import { createNewPageDB, fetchNotes } from "../../shared/request";
import { colors } from "../../styles/Notebook.style";

import { SidebarStyle } from "../../styles/NotesPage/sidebarstyle";

interface NBprops {
	NB: {
		name: string;
		id: number;
	};
}

interface AllPagesProps {
	allPagesRef: React.RefObject<HTMLParagraphElement>;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<NBprops> = ({ NB }) => {
	const { id } = useParams();
	const allPagesRef = useRef<HTMLParagraphElement>(null);
	
	const { warningMessage } = useContext(MessageContext)
	const { pages, setPages, currentPage, setCurrentPage, pageName, configs, setConfigs, tips, setTips } = useContext(NotesContext);


	const highlightPage = () => {
		const divPages = allPagesRef.current as HTMLDivElement;
		const pages = divPages.childNodes as NodeListOf<HTMLParagraphElement>;
		const page = pages[currentPage];

		pages.forEach((page) => (page.style.color = "#d1d1d1"));

		if (page) page.style.color = colors.BlueTwo;
	};


	const attPages = async () => {
		const { pages } = await fetchNotes(id!);
		setPages(pages);
	};

	const showConfigs = () => {
		setConfigs(!configs)
	}

	const showTips = () => {
		setTips(!tips)
	}

	const createNewPage = async () => {

		const hasPage = () => {
			const pagesArray = Object.keys(pages);
			return pagesArray.indexOf('NovaPágina');
		}

		if (hasPage() > -1) return warningMessage("Uma nova página já foi criada", colors.RedOne);

		await createNewPageDB(id!, pages);
		warningMessage("Uma nova página foi criada", colors.Green);
		attPages();
	}

	useEffect(() => {
		attPages();
	}, [pageName]);


	useEffect(() => {
		highlightPage();
	}, [pages, currentPage]);


	return (
		<SidebarStyle className="sidebar">

			<div className="buttons">

				<button className="close-side-bar" onClick={(e) => openSidebar(true)}>
					<GiHamburgerMenu className="icon" />
				</button>

				<Link to={"/"}>Voltar</Link>

				<button onClick={e => showTips()}>Dicas</button>

				<button onClick={e => showConfigs()}>Configs</button>

			</div>

			<h2>{NB.name}</h2>

			<AllPages allPagesRef={allPagesRef} setCurrentPage={setCurrentPage} />

			<button className="new-page" onClick={e => createNewPage()}>Nova página</button>
		</SidebarStyle>
	);
};


const AllPages: React.FC<AllPagesProps> = ({ allPagesRef, setCurrentPage }) => {
	const { pages } = useContext(NotesContext)

	useEffect(() => { renderPages() }, [pages])

	const arrayPages = Object.keys(pages);

	const renderPages = () => arrayPages.map((page, index) => (
		<p key={page} onClick={(e) => setCurrentPage(index)}>
			{page}
		</p>
	));

	return <div ref={allPagesRef} className="all-pages">{renderPages()}</div>;
};

export { Sidebar };
