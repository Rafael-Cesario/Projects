import { EyeCloseSVG, EyeOpenSVG } from '../public/svgs/eyeSVG';

interface PasswordButtonProps {
	props: {
		showPassword: boolean;
		// eslint-disable-next-line no-unused-vars
		setShowPassword: (show: boolean) => void;
	};
}

export const PasswordButton = ({ props }: PasswordButtonProps) => {
	const { showPassword, setShowPassword } = props;

	return (
		<button onClick={() => setShowPassword(!showPassword)} className='absolute right-5 translate-y-1/4 top-2/4'>
			{showPassword ? <EyeOpenSVG /> : <EyeCloseSVG />}
		</button>
	);
};
