interface MenuProps {
	props: {
		title: string;
		active: string;
		// eslint-disable-next-line no-unused-vars
		setActive: (title: string) => void;
	};
}

export const Menu = ({ props }: MenuProps) => {
	const { title, active, setActive } = props;

	const isButtonActive = active === title;
	const myClass = isButtonActive ? 'text-neutral-200' : 'text-neutral-500';

	return (
		<button onClick={() => setActive(title)} className={myClass}>
			{title}
		</button>
	);
};
