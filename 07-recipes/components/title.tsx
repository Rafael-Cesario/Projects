interface Props {
	children: any;
}

const Title = ({ children }: Props) => {
	return <h1 className='text-3xl text-main font-bold  text-center'>{children}</h1>;
};

export { Title };
