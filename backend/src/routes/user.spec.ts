import { expect, it } from 'vitest';
import axios from 'axios';

it('return a string saying "hello World"', async () => {
	const { status, data } = await axios.get('http://localhost:4000');
	expect(status).toBe(200);
	expect(data).toBe('Hello World');
});
