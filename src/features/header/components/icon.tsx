import { StyledIcon } from "../styles/styledIcon";

interface IconProps {
	src: string;
	alt: string;
}

export const Icon = ({ src, alt }: IconProps) => {
	return <StyledIcon className="icon" src={src} alt={alt} width={20} height={20} />;
};
