import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { AccountForm } from '../components/accountForm';
import '@testing-library/jest-dom';

describe('Account Form', () => {
	it('Renders with the provide title and children', () => {
		const { getAllByText } = render(
			<AccountForm title={'Title to do the test'}>
				<p>Test Paragraph</p>
			</AccountForm>
		);

		const [title] = getAllByText('Title to do the test');
		const [paragraph] = getAllByText('Test Paragraph');

		expect(title).toHaveTextContent('Title to do the test');
		expect(paragraph).toHaveTextContent('Test Paragraph');
	});
});
