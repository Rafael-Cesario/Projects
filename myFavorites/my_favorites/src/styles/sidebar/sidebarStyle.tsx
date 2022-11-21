import styled from "styled-components";
import { colors } from "../globalStyle";

const SidebarStyle = styled.div`
	min-height: 100vh;
	background-color: #101010;
	padding: 1rem;

	.new-favorite {
		padding: 5px;
		background-color: ${colors.fontBlue};
		color: white;

		.icon,
		.txt {
			margin: 0 5px;
		}
	}
`;

export { SidebarStyle };
