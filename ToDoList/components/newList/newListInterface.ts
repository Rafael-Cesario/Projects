export interface INewList {
	props: {
		newList: boolean;
		setNewList: (showNewList: boolean) => void;

		lists: string[];
		setLists: (lists: string[]) => void;
	};
}
