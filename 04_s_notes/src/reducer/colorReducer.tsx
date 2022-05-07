import produce from "immer";

type action = { type: string; colorIndex: number; newColor: string };
type state = string[];

const colorReducer = (state: state, action: action) => {
	switch (action.type) {
		case "CHANGECOLOR":
			return produce(state, (draft) => {
				draft[action.colorIndex] = action.newColor;
			});

		default:
			return state;
	}
};

export { colorReducer };
