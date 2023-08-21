import { useRef, useState } from "react";
import { StyledApp } from "./styles/app-style";
import { agileQuizQuestions } from "./utils/questions";

type QuestionStates = "question" | "show answer";

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswer, setUserAnswer] = useState("");
	const [feedback, setFeedback] = useState("");
	const [correctCounter, setCorrectCounter] = useState(0);
	const [questionState, setQuestionState] = useState<QuestionStates>("question");

	const answerButtonsRef = {
		A: useRef<HTMLButtonElement>(null),
		B: useRef<HTMLButtonElement>(null),
		C: useRef<HTMLButtonElement>(null),
		D: useRef<HTMLButtonElement>(null),
	};

	const goToNextQuestion = () => {};

	const verifyAnswer = () => {
		if (!userAnswer) return setFeedback("Nenhuma alternativa foi escolhida, por favor escolha uma.");
		setFeedback("");

		const correctAlternative = agileQuizQuestions[currentQuestion].correctAnswer;
		const isCorrectAnswer = userAnswer === correctAlternative;

		if (isCorrectAnswer) setCorrectCounter(correctCounter + 1);

		if (!isCorrectAnswer) {
			const userAnswerButton = answerButtonsRef[userAnswer as keyof typeof answerButtonsRef].current;
			userAnswerButton?.classList.add("wrong");
		}

		const correctButton = answerButtonsRef[correctAlternative as keyof typeof answerButtonsRef].current;
		correctButton?.classList.add("right");

		setQuestionState("show answer");
	};

	return (
		<StyledApp>
			<span className="current-question">
				{currentQuestion + 1} / {agileQuizQuestions.length}
			</span>

			<div className="question">
				<h1 className="title">Pergunta</h1>
				<p className="text">{agileQuizQuestions[currentQuestion].question}</p>
			</div>

			<div className="options">
				<button ref={answerButtonsRef.A} className="answer" onClick={() => setUserAnswer("A")}>
					{agileQuizQuestions[currentQuestion].options.A}
				</button>
				<button ref={answerButtonsRef.B} className="answer" onClick={() => setUserAnswer("B")}>
					{agileQuizQuestions[currentQuestion].options.B}
				</button>
				<button ref={answerButtonsRef.C} className="answer" onClick={() => setUserAnswer("C")}>
					{agileQuizQuestions[currentQuestion].options.C}
				</button>
				<button ref={answerButtonsRef.D} className="answer" onClick={() => setUserAnswer("D")}>
					{agileQuizQuestions[currentQuestion].options.D}
				</button>
			</div>

			<div className="navigation">
				{feedback && <span className="feedback">{feedback}</span>}

				{questionState === "question" && (
					<button className="next" onClick={() => verifyAnswer()}>
						Confirmar resposta
					</button>
				)}

				{questionState === "show answer" && (
					<button className="next" onClick={() => goToNextQuestion()}>
						Próxima
					</button>
				)}

				<button className="back">Anterior</button>
			</div>
		</StyledApp>
	);
};

export default App;
