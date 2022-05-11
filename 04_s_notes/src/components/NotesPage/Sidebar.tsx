import React, { useContext, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { NotesContext } from "../../context/notesContext";
import { openSidebar } from "../../shared/animations";
import { fetchNotes } from "../../shared/request";
import { colors } from "../../styles/Notebook.style";

import { SidebarStyle } from "../../styles/NotesPage/sidebarstyle";

interface NBprops {
	NB: {
		name: string;
		id: number;
	};
}

interface AllPagesProps {
	allPages: {};
	allPagesRef: React.RefObject<HTMLParagraphElement>;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<NBprops> = ({ NB }) => {
	const { id } = useParams();
	const allPagesRef = useRef<HTMLParagraphElement>(null);
	const { pages, setPages, currentPage, setCurrentPage, pageName, configs, setConfigs } = useContext(NotesContext);

	const showConfigs = () => {
		setConfigs(!configs);
	};

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
				<button onClick={e => showConfigs()}>Configs</button>
			</div>

			<h2>{NB.name}</h2>

			<AllPages allPages={pages} allPagesRef={allPagesRef} setCurrentPage={setCurrentPage} />
			<p>Nova página</p>
		</SidebarStyle>
	);
};

const AllPages: React.FC<AllPagesProps> = ({ allPages, allPagesRef, setCurrentPage }) => {
	const arrayPages = Object.keys(allPages);

	const pages = arrayPages.map((page, index) => (
		<p key={page} onClick={(e) => setCurrentPage(index)}>
			{page}
		</p>
	));

	return <div ref={allPagesRef} className="all-pages">{pages}</div>;
};

export { Sidebar };
