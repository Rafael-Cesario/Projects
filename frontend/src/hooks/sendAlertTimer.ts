import { useRef, useState } from 'react';

export const useAlertTimer = (delay: number) => {
	const [alert, setAlert] = useState(false);
	const timerRef = useRef<NodeJS.Timer>(null);

	const startAlertTimer = () => {
		clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			setAlert(true);

			setTimeout(() => {
				setAlert(false);
			}, 5000);
		}, delay);
	};

	return { alert, startAlertTimer };
};
