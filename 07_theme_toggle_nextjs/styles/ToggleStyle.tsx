import styled from "styled-components";

type themeProps = {
	theme: {
		backgroundColor: string;
		translateX: string;
		blockColor: string;
		moon: string;
		sun: string;
	};
};

const ToggleStyle = styled.div`
	background-color: ${({ theme }: themeProps) => theme.backgroundColor};
	border-radius: 10px;
	cursor: pointer;
	width: 10rem;
	overflow: hidden;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	border: 2px solid ${({ theme }: themeProps) => theme.backgroundColor};

	.block {
		background-color: ${({ theme }: themeProps) => theme.blockColor};
		width: 7rem;
		height: 3rem;
		position: absolute;
		margin: -1rem;
		z-index: 0;
		transition: 0.2s;
		border-radius: 6px;
		pointer-events: none;
		transform: translateX(${(props) => props.theme.translateX});
	}

	.moon {
		pointer-events: none;
		color: ${({ theme }: themeProps) => theme.moon};
	}

	.sun {
		pointer-events: none;
		color: ${({ theme }: themeProps) => theme.sun};
	}
`;
export { ToggleStyle };
