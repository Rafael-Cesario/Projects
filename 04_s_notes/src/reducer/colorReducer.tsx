type state = { color: string[] };
type action = { type: "CHANGECOLOR"; payload: { colorIndex: number; newColor: string } } | { type: "ATTCOLORS"; payload: { colors: { color: string[] } } };

const colorReducer = (state: state, action: action) => {
	switch (action.type) {
		case "CHANGECOLOR": {
			state.color[action.payload.colorIndex] = action.payload.newColor;
			return state;
		}

		case "ATTCOLORS":
			return action.payload.colors;

		default:
			return state;
	}
};

export { colorReducer };
