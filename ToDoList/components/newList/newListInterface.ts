import { MessageType } from '../../utils/messageType';

export interface INewList {
	props: {
		newList: boolean;
		setNewList: (showNewList: boolean) => void;

		lists: Set<string>;
		setLists: (lists: Set<string>) => void;

		message: MessageType;
		setMessage: (OBJ: MessageType) => void;
	};
}
