import { MessageType } from '../../../message/messageType';

export interface INewList {
	props: {
		showNewList: boolean;
		setShowNewList: (showNewList: boolean) => void;

		lists: string[];
		setLists: (lists: string[]) => void;

		message: MessageType;
		setMessage: (OBJ: MessageType) => void;
	};
}
