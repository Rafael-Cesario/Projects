import { createGlobalStyle } from "styled-components";

type themeProps = {
	theme: {
		body: {
			backgroundColor: "string";
		};
	};
};

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      box-sizing:border-box;
    }
  
    body {
      background-color: ${(props: themeProps) => props.theme.body.backgroundColor};
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }
`;

export { GlobalStyle };
