import { expect, it } from 'vitest';
import { render } from '@testing-library/react';

import App from '../src/pages/_app';

it('Renders "Hello World" in the page', () => {
	const { getByRole } = render(<App />);
	const title = getByRole('heading');

	expect(title.textContent).toBe('Hello World');
});
