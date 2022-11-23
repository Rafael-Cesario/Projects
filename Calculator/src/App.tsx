import { Screen } from './components/Screen/Screen';
import { AppStyle } from './appStyle';
import { Keyboard } from './components/keyboard/keyboard';
import { useState } from 'react';

const App = () => {
	const [screen, setScreen] = useState('');

	return (
		<AppStyle>
			<Screen screen={screen} />
			<Keyboard screen={screen} setScreen={setScreen} />
		</AppStyle>
	);
};

export default App;
