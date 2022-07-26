import React, { createContext, ReactNode, useState } from "react";

interface MessageContextProps {
	children: ReactNode;
}

interface ContextType {
	message: string;
	BGcolor: string;
	warningMessage: (txtMessage: string, BGcolor: string) => void;
	setMessage: React.Dispatch<React.SetStateAction<string>>;
	setBGcolor: React.Dispatch<React.SetStateAction<string>>;
}

const initialValue = {
	message: "",
	BGcolor: "crimson",
	warningMessage: () => {},
	setMessage: () => {},
	setBGcolor: () => {},
};

const MessageContext = createContext<ContextType>(initialValue);

const MessageContextProvider: React.FC<MessageContextProps> = ({ children }) => {
	const [message, setMessage] = useState(initialValue.message);
	const [BGcolor, setBGcolor] = useState(initialValue.BGcolor);

	const warningMessage = (txtMessage: string, BGcolor: string) => {
		setMessage(txtMessage);
		setBGcolor(BGcolor);

		setTimeout(() => {
			setMessage("");
		}, 5000);
	};

	return (
		<MessageContext.Provider
			value={{
				message,
				setMessage,
				BGcolor,
				setBGcolor,
				warningMessage,
			}}
		>
			{children}
		</MessageContext.Provider>
	);
};

export { MessageContext, MessageContextProvider };
