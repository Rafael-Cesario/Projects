import { MessageType } from '../../utils/messageType';

export interface ILists {
	props: {
		lists: string[];
		setLists: (lists: string[]) => void;
		showNewList: boolean;
		setShowNewList: (showNewList: boolean) => void;
		message: MessageType;
		setMessage: (OBJ: MessageType) => void;
	};
}
