import React, { useEffect, useState } from "react";

import { GlobalStyle } from "../styles/global";
import { ToggleStyle } from "../styles/ToggleStyle";
import { themes } from "../styles/themes";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const App = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";

		localStorage.setItem("Theme", newTheme);
		setTheme(newTheme);
	};

	useEffect(() => {
		const storageTheme = localStorage.getItem("Theme");
		setTheme(storageTheme);
	}, []);

	return (
		<>
			<GlobalStyle theme={themes[theme]} />
			<ToggleStyle onClick={toggleTheme} theme={themes[theme]}>
				<div className="block"></div>
				<BsFillSunFill className="sun" />
				<BsFillMoonFill className="moon" />
			</ToggleStyle>
		</>
	);
};

export default App;
