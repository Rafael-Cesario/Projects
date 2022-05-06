import { warningMessage } from "../shared/warningMessage";
import { colors } from "../styles/Notebook.style";

type setMessage = React.Dispatch<React.SetStateAction<string>>;
type setBGcolor = React.Dispatch<React.SetStateAction<string>>;

const verifyInput = (value: string, setMessage: setMessage, setBGcolor: setBGcolor, NB: { name: string }) => {
	const valueREGX = new RegExp(value.trim(), "ig");
	const incorretValue = NB.name.search(valueREGX) === -1 ? true : false;

	if (!value) {
		warningMessage(setMessage, "Nenhum valor foi digitado para deletar o caderno", setBGcolor, colors.RedOne);
		return true;
	}

	if (incorretValue) {
		warningMessage(setMessage, "O Nome foi digitado incorretamente", setBGcolor, colors.RedOne);
		return true;
	}

	return false;
};

export { verifyInput };
