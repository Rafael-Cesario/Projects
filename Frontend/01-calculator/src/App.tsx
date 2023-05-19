import { Screen } from './components/Screen/Screen';
import { AppStyle } from './appStyle';
import { Keyboard } from './components/keyboard/keyboard';
import { useState } from 'react';

const App = () => {
	const [screen, setScreen] = useState('');
	const [preview, setPreview] = useState('');

	return (
		<AppStyle>
			<Screen
				props={{
					screen,
					preview,
				}}
			/>

			<Keyboard
				props={{
					screen,
					setScreen,
					preview,
					setPreview,
				}}
			/>
		</AppStyle>
	);
};

export default App;
