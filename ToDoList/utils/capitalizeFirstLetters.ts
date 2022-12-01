export const capitalizeFirstLetters = (string: string) => {
	const split = string.split(' ');

	for (let word in split) split[word] = split[word].charAt(0).toUpperCase() + split[word].slice(1);

	return split.join(' ');
};
