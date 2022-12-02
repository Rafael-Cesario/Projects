import { StyledMenu } from './styledMenu';
import { InterfaceMenu } from './interfaceMenu';
import { theme } from '../../styles/styledTheme';
import { TypeKey, keys } from '../../utils/shortcutes';

// Icons
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/Ti';
import { TbAlignLeft, TbAlignCenter, TbAlignRight } from 'react-icons/tb';
import { useCallback, useEffect, useState } from 'react';

export const Menu = ({ props }: InterfaceMenu) => {
	const { themeName } = props;

	const formatText = (format: string, parameter?: string) => document.execCommand(format, false, parameter);

	const execShortcut = useCallback((e: KeyboardEvent) => {
		const isAltPressed = e.altKey;
		const key = e.key as TypeKey;

		if (!isAltPressed) return;

		e.preventDefault();
		formatText(keys[key]);
	}, []);

	const [size, setSize] = useState(3);

	const changeFontSize = (operation: string) => {
		let newSize = size;

		if (operation === 'increase' && size < 7) newSize = size + 1;
		if (operation === 'decrease' && size > 1) newSize = size - 1;

		setSize(newSize);
		formatText('fontSize', newSize.toString());
	};

	useEffect(() => {
		window.addEventListener('keydown', execShortcut);

		return () => {
			window.addEventListener('keydown', execShortcut);
		};
	}, []);

	return (
		<>
			<StyledMenu theme={theme[themeName]}>
				<div className='font-style'>
					<button onClick={() => formatText('bold')}>N</button>
					<button onClick={() => formatText('italic')}>I</button>
					<button onClick={() => formatText('underline')}>S</button>
				</div>

				<div className='font-size'>
					<button onClick={() => changeFontSize('increase')}>
						<TiArrowUpThick />
					</button>
					<button>{size}</button>
					<button onClick={() => changeFontSize('decrease')}>
						<TiArrowDownThick />
					</button>
				</div>

				<div className='align'>
					<button onClick={() => formatText('justifyLeft')}>
						<TbAlignLeft />
					</button>
					<button onClick={() => formatText('justifyCenter')}>
						<TbAlignCenter />
					</button>
					<button onClick={() => formatText('justifyRight')}>
						<TbAlignRight />
					</button>
				</div>

				<div className='colors'>
					<input type={'color'} defaultValue='#dddddd' onBlur={(e) => formatText('foreColor', e.target.value)} />
					<input type={'color'} defaultValue='#555555' onBlur={(e) => formatText('foreColor', e.target.value)} />
					<input type={'color'} defaultValue='#187cce' onBlur={(e) => formatText('foreColor', e.target.value)} />
					<input type={'color'} defaultValue='#c22f2f' onBlur={(e) => formatText('foreColor', e.target.value)} />
				</div>
			</StyledMenu>
		</>
	);
};
