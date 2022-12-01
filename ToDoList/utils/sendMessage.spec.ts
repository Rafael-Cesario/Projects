import { MessageType } from '../components/message/messageType';
import { sendMessage } from './sendMessage';
import { it, expect, vi } from 'vitest';

it('Sets a message to send to the user', () => {
	vi.useFakeTimers();

	let message: MessageType = {
		show: false,
		content: '',
		color: '#000',
	};

	const setMessage = (OBJ: MessageType) => {
		message = OBJ;
	};

	sendMessage(message, setMessage, 'This is a message', '#222');

	expect(message.show).toBe(true);

	vi.runAllTimers();
	expect(message.show).toBe(false);
});
