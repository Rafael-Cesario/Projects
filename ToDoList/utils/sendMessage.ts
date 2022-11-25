import produce from 'immer';
import { MessageType } from './messageType';

export const sendMessage = (message: MessageType, setMessage: (OBJ: MessageType) => void, content: string, color: string) => {
	const showMessage = produce(message, (draft) => {
		draft['show'] = true;
		draft['content'] = content;
		draft['color'] = color;
	});

	const hideMessage = produce(message, (draft) => {
		draft['show'] = false;
	});

	setMessage(showMessage);
	setTimeout(() => setMessage(hideMessage), 5000);
};
