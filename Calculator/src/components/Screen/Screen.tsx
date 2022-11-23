import { useState } from 'react';
import { ScreenStyle } from './ScreenStyle';

interface IScreen {
	screen: string;
}

export const Screen = ({ screen }: IScreen) => {
	return (
		<ScreenStyle>
			<p className='current'>{screen}</p>
		</ScreenStyle>
	);
};
