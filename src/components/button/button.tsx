import { Button as Test } from '@mui/material';
import { ButtonContainer } from './button.style';

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return (
        <ButtonContainer>
            <Test {...props}>{props.label}</Test>
        </ButtonContainer>
    );
};

export default Button;
