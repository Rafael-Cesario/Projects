import axios from 'axios';

export const setCookies = async (token: string) => {
	await axios({
		method: 'post',
		headers: { 'Content-Type': 'application/json' },
		url: process.env.NEXT_PUBLIC_SET_COOKIES,
		data: { token },
	});
};
