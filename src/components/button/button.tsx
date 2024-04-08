import { ButtonContainer } from './button.style';

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <ButtonContainer {...props}>{props.label}</ButtonContainer>;
};

export default Button;
