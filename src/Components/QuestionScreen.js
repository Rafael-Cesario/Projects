import { animationNextQuestion, animationCheckAnswer, next02FindAnimation } from "../gsap/animations";
import { WordListStore } from "../context/WordListStore";
import { useContext } from "react";
import { useState } from "react";

const QuestionScreen = ({ study, setScreen01, params }) => {
	const { wordListStore } = useContext(WordListStore);
	const inputAnswer = document.querySelector(".input-answer");
	const [whichFuncCall, setWhichFuncCall] = useState("checkAnswer");
	const [inputAnswerValue, setInputAnswerValue] = useState("");
	const [indexWord, setIndexWord] = useState(0);
	const [changeToRightAnswer, setChangeToRightAnswer] = useState(false);
	const [isRigthAnswer, setIsRightAnswer] = useState(false);

	const answerWith = [
		wordListStore[params.id].individualWordList[params.index].answerWith,
		wordListStore[params.id].individualWordList[params.index].answerWith === "Definition" ? "Term" : "Definition",
	];

	const next = (e) => {
		e.preventDefault();
		switch (whichFuncCall) {
			case "checkAnswer":
				finding();
				animationCheckAnswer(finding());
				setWhichFuncCall("NextQuestion");
				break;

			case "NextQuestion":
				animationNextQuestion(nextQuestion, e, isRigthAnswer);
				setWhichFuncCall("checkAnswer");
				break;

			default:
				console.log("erro");
				return;
		}
	};

	const nextQuestion = (e, isRigthAnswer) => {
		if (isRigthAnswer === true) {
			next02FindAnimation();
			study.studying.splice(indexWord, 1);

			if (study.toStudy.length > 0) {
				study.studying.push({
					Term: study.toStudy[0][0],
					Definition: study.toStudy[0][1],
				});
				study.toStudy.shift();
			}
		}

		if (study.studying.length === 0) {
			setScreen01(false);
			return;
		}

		if (isRigthAnswer === false) {
			setIndexWord(indexWord + 1);
		}

		if (indexWord === study.studying.length - 1 || study.studying.length === 1) {
			setIndexWord(0);
		}

		setChangeToRightAnswer(false);
		setInputAnswerValue("");
		inputAnswer.focus();
	};

	const finding = () => {
		let word01 = study.studying[indexWord][answerWith[0]].trim().toUpperCase();
		let word02 = inputAnswerValue.trim().toUpperCase();

		if (word01 === word02 || word01.split(", ").indexOf(word02) > -1) {
			setIsRightAnswer(true);
			return true;
		}

		setIsRightAnswer(false);
		setChangeToRightAnswer(true);
		return false;
	};

	const markAnswerAsRight = (e) => {
		const find = true;
		animationNextQuestion(nextQuestion, e, find);
		setWhichFuncCall("checkAnswer");
	};

	return (
		<div className="container">
			<h2 className="word01">{study.studying[indexWord][answerWith[1]]}</h2>

			<h2 className="word02">{study.studying[indexWord][answerWith[0]]}</h2>

			{changeToRightAnswer && (
				<button type="button" onClick={(e) => markAnswerAsRight(e)}>
					Marcar resposta como correta
				</button>
			)}

			<form onSubmit={(e) => next(e)} className="form-answer">
				<input type="text" placeholder="Resposta" value={inputAnswerValue} onChange={(e) => setInputAnswerValue(e.target.value)} className="input-answer" />
				<div className="buttons">
					<button>Confirmar</button>
					<button>Não sei</button>
				</div>
			</form>

			<p className="remain-words">{study.toStudy.length + study.studying.length} Palavras até terminar a lista </p>
		</div>
	);
};

export default QuestionScreen;
