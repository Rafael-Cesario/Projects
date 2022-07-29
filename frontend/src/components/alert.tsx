import { ReactNode } from 'react';
import { AlertStyle } from '../styles/alertStyle';

interface IAlertProps {
	children: ReactNode;
}

export const Alert = ({ children }: IAlertProps) => {
	return (
		<AlertStyle>
			<h1>{children}</h1>
		</AlertStyle>
	);
};
