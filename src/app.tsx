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
	const [endQuiz, setEndQuiz] = useState(false);

	const answerButtonsRef = {
		A: useRef<HTMLButtonElement>(null),
		B: useRef<HTMLButtonElement>(null),
		C: useRef<HTMLButtonElement>(null),
		D: useRef<HTMLButtonElement>(null),
	};

	const updateButtonsClass = (isCorrectAnswer: boolean, correctAlternative: string) => {
		if (!isCorrectAnswer) {
			const userAnswerButton = answerButtonsRef[userAnswer as keyof typeof answerButtonsRef].current;
			userAnswerButton?.classList.toggle("wrong");
		}

		const correctButton = answerButtonsRef[correctAlternative as keyof typeof answerButtonsRef].current;
		correctButton?.classList.toggle("right");
	};

	const goToNextQuestion = () => {
		const maxRange = agileQuizQuestions.length - 1;
		if (currentQuestion + 1 > maxRange) return setEndQuiz(true);

		const correctAlternative = agileQuizQuestions[currentQuestion].correctAnswer;
		const isCorrectAnswer = userAnswer === correctAlternative;

		updateButtonsClass(isCorrectAnswer, correctAlternative);
		setCurrentQuestion(currentQuestion + 1);
		setQuestionState("question");
		setUserAnswer("");
	};

	const verifyAnswer = () => {
		if (!userAnswer) return setFeedback("Nenhuma alternativa foi escolhida, por favor escolha uma.");
		setFeedback("");

		const correctAlternative = agileQuizQuestions[currentQuestion].correctAnswer;
		const isCorrectAnswer = userAnswer === correctAlternative;

		if (isCorrectAnswer) setCorrectCounter(correctCounter + 1);

		updateButtonsClass(isCorrectAnswer, correctAlternative);
		setQuestionState("show answer");
	};

	if (endQuiz)
		return (
			<StyledApp>
				<h1>Fim</h1>
				<p>Acertos: {correctCounter}</p>
			</StyledApp>
		);

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
				<button ref={answerButtonsRef.A} className="answer" disabled={questionState === "show answer" && true} onClick={() => setUserAnswer("A")}>
					{agileQuizQuestions[currentQuestion].options.A}
				</button>
				<button ref={answerButtonsRef.B} className="answer" disabled={questionState === "show answer" && true} onClick={() => setUserAnswer("B")}>
					{agileQuizQuestions[currentQuestion].options.B}
				</button>
				<button ref={answerButtonsRef.C} className="answer" disabled={questionState === "show answer" && true} onClick={() => setUserAnswer("C")}>
					{agileQuizQuestions[currentQuestion].options.C}
				</button>
				<button ref={answerButtonsRef.D} className="answer" disabled={questionState === "show answer" && true} onClick={() => setUserAnswer("D")}>
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
