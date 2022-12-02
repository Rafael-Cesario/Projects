import { StyledMenu } from './styledMenu';
import { InterfaceMenu } from './interfaceMenu';
import { theme } from '../../styles/styledTheme';
import { TypeKey, keys } from '../../utils/shortcutes';

// Icons
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/Ti';
import { TbAlignLeft, TbAlignCenter, TbAlignRight } from 'react-icons/tb';
import { useCallback, useEffect } from 'react';

export const Menu = ({ props }: InterfaceMenu) => {
	const { themeName } = props;

	const formatText = (format: string) => document.execCommand(format);

	const execShortcut = useCallback((e: KeyboardEvent) => {
		const isAltPressed = e.altKey;
		const key = e.key as TypeKey;

		if (!isAltPressed) return;

		e.preventDefault();
		formatText(keys[key]);
	}, []);

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
					<button>
						<TiArrowUpThick />
					</button>
					<button>1</button>
					<button>
						<TiArrowDownThick />
					</button>
				</div>

				<div className='align'>
					<button>
						<TbAlignLeft />
					</button>
					<button>
						<TbAlignCenter />
					</button>
					<button>
						<TbAlignRight />
					</button>
				</div>

				<div className='colors'>
					<input type={'color'} defaultValue='#dddddd' />
					<input type={'color'} defaultValue='#555555' />
					<input type={'color'} defaultValue='#187cce' />
					<input type={'color'} defaultValue='#c22f2f' />
				</div>
			</StyledMenu>
		</>
	);
};
