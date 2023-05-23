import { Header } from "./features/header/header";
import { Publicity } from "./features/publicity/publicity";
import { StyledGlobal } from "./styles/styledGlobal";

const App = () => {
	return (
		<>
			<StyledGlobal />

			<Header />
			<Publicity />
		</>
	);
};

export default App;
