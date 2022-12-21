/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

type ShowMessage = { show: boolean; color: string; message: string };
type Message = [showMessage: ShowMessage, setShowMessage: (state: ShowMessage) => void];

export const useMessage = (): Message => {
	const initialState = { show: false, color: 'crimson', message: '' };
	const [showMessage, setShowMessage] = useState(initialState);

	const initialStateAfterDelay = () => {
		setTimeout(() => {
			setShowMessage(initialState);
		}, 10000);
	};

	useEffect(() => initialStateAfterDelay(), [showMessage]);

	return [showMessage, setShowMessage];
};
