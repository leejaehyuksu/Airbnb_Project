import React from 'react';
import Styled from 'styled-components/native';

const StyledButton = Styled.TouchableOpacity`
  width: 45%;
  height: 33px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 54%;
  margin-top: 7%;
  border: 1px;
  border-color: white;
  background-color:#008388;
`;
const Label = Styled.Text`
font-Weight: 700;
font-size: 15.5px;
color: white;
`;

interface Props {
    label: string;
    style: object
    onPress?: () => void;
}

const ForgetPasswordBtn = ({ label, style, onPress }: Props) => {
    return (
        <StyledButton style={style} onPress={onPress}>
            <Label> {label}</Label>
        </StyledButton>
    );
};

export default ForgetPasswordBtn;
