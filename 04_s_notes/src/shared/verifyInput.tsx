import { colors } from "../styles/Notebook.style";

type warningMessage = (message: string, bgColor: string) => void;

const verifyInput = (value: string, warningMessage: warningMessage, NB: { name: string }) => {
	const valueREGX = new RegExp(value.trim(), "ig");
	const incorretValue = NB.name.search(valueREGX) === -1 ? true : false;

	if (!value) {
		warningMessage("Nenhum valor foi digitado para deletar o caderno", colors.RedOne);
		return true;
	}

	if (incorretValue) {
		warningMessage("O Nome foi digitado incorretamente", colors.RedOne);
		return true;
	}

	return false;
};

export { verifyInput };
