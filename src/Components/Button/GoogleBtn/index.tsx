import React from 'react';
import Styled from 'styled-components/native';

const StyledButton = Styled.TouchableOpacity`
  width: 90%;
  height: 6%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  border-color: white;
  background-color:white;
`;
const Label = Styled.Text`
font-Weight: 700;
font-size: 18px;
color: black;
`;

interface Props {
    label: string;
    style?: Object;
    onPress?: () => void;
}

const GooglekBtn = ({ label, style, onPress }: Props) => {
    return (
        <StyledButton style={style} onPress={onPress}>
            <Label> {label}</Label>
        </StyledButton>
    );
};

export default GooglekBtn;
