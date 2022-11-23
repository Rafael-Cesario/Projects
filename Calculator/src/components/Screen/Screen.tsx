import { ScreenStyle } from './ScreenStyle';
import { IScreen } from './ScreenInterface';

export const Screen = ({ props }: IScreen) => {
	const { screen, preview } = props;

	return (
		<ScreenStyle>
			<p className='current'>{screen}</p>
			<p className='preview'>{preview}</p>
		</ScreenStyle>
	);
};
