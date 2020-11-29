import React from 'react';
import Styled from 'styled-components/native';

const StyledButton = Styled.TouchableOpacity`
  width: 60%;
  border-radius:10px;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  background-color:white;
  
`;
const Label = Styled.Text`
font-Weight: 700;
font-size: 13px;
color: black;
`;

interface Props {
    label: string;
    checked: boolean;
    onPress?: () => void;
}

const LoginBtn = ({ label, checked, onPress }: Props) => {
    return (
        <StyledButton onPress={onPress}
            style={{ backgroundColor: checked ? 'white' : 'white' }}>
            <Label> {label}</Label>
        </StyledButton>
    );
};


export default LoginBtn;
