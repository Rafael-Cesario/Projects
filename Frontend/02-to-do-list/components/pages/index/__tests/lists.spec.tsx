import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Lists } from '../components/lists';

describe('Lists Component', () => {
	it('Renders the lists', () => {
		const lists = ['test1', 'teste2'];
		const { queryByText } = render(<Lists props={{ lists }} />);

		const list1 = queryByText(lists[0]);
		expect(list1).not.toBeNull();
	});
});
