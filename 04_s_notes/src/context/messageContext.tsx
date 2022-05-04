import React, { createContext, ReactNode, useState } from "react";

interface MessageContextProps {
	children: ReactNode;
}

interface ContextType {
	message: string;
	BGcolor: string;
	setMessage: React.Dispatch<React.SetStateAction<string>>;
	setBGcolor: React.Dispatch<React.SetStateAction<string>>;
}

const initialValue = {
	message: "",
	BGcolor: "crimson",
	setMessage: () => {},
	setBGcolor: () => {},
};

const MessageContext = createContext<ContextType>(initialValue);

const MessageContextProvider: React.FC<MessageContextProps> = ({ children }) => {
	const [message, setMessage] = useState(initialValue.message);
	const [BGcolor, setBGcolor] = useState(initialValue.BGcolor);

	return (
		<MessageContext.Provider
			value={{
				message,
				setMessage,
				BGcolor,
				setBGcolor,
			}}
		>
			{children}
		</MessageContext.Provider>
	);
};

export { MessageContext, MessageContextProvider };
