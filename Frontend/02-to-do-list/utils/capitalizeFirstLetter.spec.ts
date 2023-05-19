import { it, expect } from 'vitest';
import { capitalizeFirstLetters } from './capitalizeFirstLetters';

it('Capitalize all the first letters', () => {
	const string = 'a b c d e f g this is a test string';

	const capitalString = capitalizeFirstLetters(string);
	expect(capitalString).toBe('A B C D E F G This Is A Test String');
});
