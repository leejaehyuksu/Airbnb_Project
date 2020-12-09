import React from 'react';
import Styled from 'styled-components/native';

const StyledButton = Styled.TouchableOpacity`
  width: 45%;
  height: 40px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  border: 2px;
  border-color: white;
  background-color:#008388;
`;
const Label = Styled.Text`
    font-Weight: 700;
    font-size: 16px;
    color: white;
`;

interface Props {
    label: string;
    style?: Object;
    onPress?: () => void;
}

const SignUpNextBtn = ({ label, style, onPress }: Props) => {
    return (
        <StyledButton style={style} onPress={onPress}>
            <Label> {label}</Label>
        </StyledButton>
    );
};

export default SignUpNextBtn;
