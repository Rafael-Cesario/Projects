import { Screen } from './components/Screen/Screen';
import { AppStyle } from './appStyle';
import { Keyboard } from './components/keyboard/keyboard';

const App = () => {
	return (
		<AppStyle>
			<Screen />
			<Keyboard />
		</AppStyle>
	);
};

export default App;
