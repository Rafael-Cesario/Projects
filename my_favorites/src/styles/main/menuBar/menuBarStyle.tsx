import styled from "styled-components";

export const MenuBarStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	align-items: flex-center;

	@media (max-width: 800px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		.tag,
		.filter,
		.search {
			justify-self: center;
			margin: 10px 10px;
		}
	}
`;
