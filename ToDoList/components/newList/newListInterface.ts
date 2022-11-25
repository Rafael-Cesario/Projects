import { MessageType } from '../../utils/messageType';

export interface INewList {
	props: {
		newList: boolean;
		setNewList: (showNewList: boolean) => void;

		lists: string[];
		setLists: (lists: string[]) => void;

		message: MessageType;
		setMessage: (OBJ: MessageType) => void;
	};
}
