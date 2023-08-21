import { StyledApp } from "./styles/app-style";

const App = () => {
	return (
		<StyledApp>
			<span className="current-question">5 / 10</span>

			<div className="question">
				<h1 className="title">Pergunta</h1>
				<p className="text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quia veniam est reprehenderit illum amet ab neque sunt dolore ex. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Cum, reprehenderit.
				</p>
			</div>

			<div className="options">
				<button className="answer">Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</button>
				<button className="answer">Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</button>
				<button className="answer">Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</button>
				<button className="answer">Lorem ipsum dolor sit amet consectetur Lorem, ipsum.</button>
			</div>

			<div className="navigation">
				<button className="next">Próxima</button>
				<button className="back">Anterior</button>
			</div>
		</StyledApp>
	);
};

export default App;
