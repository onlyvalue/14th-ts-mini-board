import styled from "styled-components";

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

function Button ({label, onClick}: ButtonProps){
    return(
        <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: #2f6feb;
    color: white;
`;
export default Button