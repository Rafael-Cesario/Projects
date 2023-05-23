import { useEffect, useState } from "react";
import { StyledPublicity } from "./styles/styledPublicity";

export const Publicity = () => {
	const [slidePosition, setSlidePosition] = useState(0);

	const slides = [
		"pexels-advertising01.jpg",
		"pexels-advertising02.jpg",
		"pexels-advertising03.jpg",
		"pexels-advertising04.jpg",
		"pexels-advertising05.jpg",
	];

	const moveSlide = (newSlidePosition: number) => {
		const maxRangeSlides = (slides.length - 1) * 80;

		if (newSlidePosition < -maxRangeSlides) return setSlidePosition(0);
		if (newSlidePosition > 0) return setSlidePosition(-maxRangeSlides);

		setSlidePosition(newSlidePosition);
	};

	useEffect(() => {
		const changeSlide = setTimeout(() => {
			moveSlide(slidePosition - 80);
		}, 3000);

		return () => clearTimeout(changeSlide);
	}, [slidePosition]);

	return (
		<StyledPublicity>
			<button onClick={() => moveSlide(Number(slidePosition) + 80)}>{"<"}</button>

			<div className="carousel">
				{slides.map((slide) => (
					<div className="wrapper" key={slide} style={{ transform: `translate(${slidePosition}vw, 0)` }}>
						<img className="advertising" src={`/advertising/${slide}`} alt="advertising" />
					</div>
				))}
			</div>

			<div className="slides">
				{slides.map((slide, index) => (
					<button className={index * -80 === slidePosition ? "active" : ""} onClick={() => moveSlide(index * -80)} key={"button " + slide} />
				))}
			</div>

			<button onClick={() => moveSlide(Number(slidePosition) - 80)}>{">"}</button>
		</StyledPublicity>
	);
};
