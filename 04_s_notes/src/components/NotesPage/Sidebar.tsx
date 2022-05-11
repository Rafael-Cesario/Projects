import React, { useContext, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { NotesContext } from "../../context/notesContext";
import { openSidebar } from "../../shared/animations";
import { fetchNotes } from "../../shared/request";

import { SidebarStyle } from "../../styles/NotesPage/sidebarstyle";

interface NBprops {
	NB: {
		name: string;
		id: number;
	};
	configs: boolean;
	setConfigs: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AllPagesProps {
	allPages: {};
	allPagesRef: React.RefObject<HTMLParagraphElement>;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<NBprops> = ({ NB, setConfigs, configs }) => {
	const { id } = useParams();
	const allPagesRef = useRef<HTMLParagraphElement>(null);
	const { pages, setPages, currentPage, setCurrentPage } = useContext(NotesContext);

	const showConfigs = () => {
		setConfigs(!configs);
	};

	const highlightPage = () => {
		const divPages = allPagesRef.current as HTMLDivElement;
		const pages = divPages.childNodes as NodeListOf<HTMLParagraphElement>;
		const page = pages[currentPage];

		pages.forEach((page) => (page.style.color = "white"));

		if (page) page.style.color = "crimson";
	};

	const attPages = async () => {
		const { pages } = await fetchNotes(id!);
		setPages(pages);
	};

	useEffect(() => {
		attPages();
	}, []);

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
				<button onClick={showConfigs}>Configs</button>
			</div>

			<h2>{NB.name}</h2>

			<AllPages allPages={pages} allPagesRef={allPagesRef} setCurrentPage={setCurrentPage} />
			<p>Nova página</p>
		</SidebarStyle>
	);
};

const AllPages: React.FC<AllPagesProps> = ({ allPages, allPagesRef, setCurrentPage }) => {
	const arrayPages = Object.keys(allPages);

	const renderNotes = (index: number) => {
		console.log(index);
		setCurrentPage(index);
	};

	const pages = arrayPages.map((page, index) => (
		<p key={page} onClick={(e) => renderNotes(index)}>
			{page}
		</p>
	));

	return <div ref={allPagesRef}>{pages}</div>;
};

export { Sidebar };
