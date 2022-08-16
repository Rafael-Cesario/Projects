import { useState, useCallback } from 'react';
import { formAnimation } from '../utils/formAnimation';

export const useFormAnimation = () => {
	const [isFormVisible, setIsFormVisible] = useState(false);

	const showCreateAccountForm = useCallback(() => {
		formAnimation(isFormVisible);
		setIsFormVisible(!isFormVisible);
	}, [isFormVisible]);

	return { showCreateAccountForm };
};
