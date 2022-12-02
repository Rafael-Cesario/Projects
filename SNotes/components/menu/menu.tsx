import { StyledMenu } from './styledMenu';
import { InterfaceMenu } from './interfaceMenu';
import { theme } from '../../styles/styledTheme';

// Icons
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/Ti';
import { TbAlignLeft, TbAlignCenter, TbAlignRight } from 'react-icons/tb';

export const Menu = ({ props }: InterfaceMenu) => {
	const { themeName } = props;
	return (
		<>
			<StyledMenu theme={theme[themeName]}>
				<div className='font-style'>
					<button>N</button>
					<button>I</button>
					<button>S</button>
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
