import { MessageStyle } from './messageStyle';
import { IMessage } from './messageInterface';

export const Message = ({ props }: IMessage) => {
	const { message, color } = props;

	return (
		<MessageStyle color={color}>
			<span className='message'>{message}</span>
		</MessageStyle>
	);
};
