const warningMessage = (setState: (message: string) => void, txtMessage: string, setBGcolor: (color: string) => void, BGcolor: string) => {
	setState(txtMessage);
	setBGcolor(BGcolor);

	setTimeout(() => {
		setState("");
	}, 5000);
};

export { warningMessage };
