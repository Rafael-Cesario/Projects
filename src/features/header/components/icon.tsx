interface IconProps {
	src: string;
	alt: string;
}

export const Icon = ({ src, alt }: IconProps) => {
	return <img className="icon" src={src} alt={alt} width={25} height={25} />;
};
