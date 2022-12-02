import { StyledTextContainer } from './styledTextContainer';
import { theme } from '../../styles/styledTheme';
import { InterfaceTextContainer } from './interfaceTextContainer';
import { useState } from 'react';

export const TextContainer = ({ props }: InterfaceTextContainer) => {
	const { themeName } = props;

	return (
		<StyledTextContainer theme={theme[themeName]}>
			<div className='text' contentEditable='true'></div>
		</StyledTextContainer>
	);
};
