import styled from "styled-components";

export const MenuBarStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	align-items: flex-center;

	@media (max-width: 800px) {
		.tag,
		.filter,
		.search {
			justify-self: start;
			margin: 10px 0;
		}
	}
`;
