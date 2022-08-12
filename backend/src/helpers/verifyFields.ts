export type Body = { email: string; name: string; password: string };

export const verifyFields = (body: Body) => {
	const errorMessage: string[] = [];
	const fields = [
		['email', body.email],
		['name', body.name],
		['password', body.password],
	];

	fields.forEach(([key, value]) => {
		const capitalizeKey = `${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
		if (!value) errorMessage.push(`${capitalizeKey} is required`);
	});

	if (errorMessage.length > 0) throw new Error(errorMessage.join(', '));
};
