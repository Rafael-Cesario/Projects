import { AccountFormStyle } from './accountForm.style';
import { useRouter } from 'next/router';

export const AccountForm = ({ title, children }) => {
	const router = useRouter();

	return (
		<AccountFormStyle className="account-form" data-testid="formAccount">
			<button className="button-close" onClick={() => router.push('/')}>
				{'<'} Voltar
			</button>
			<h1 className="form-title">{title}</h1>

			{children}

			<button className="button">{title}</button>
		</AccountFormStyle>
	);
};
