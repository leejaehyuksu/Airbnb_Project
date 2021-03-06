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
  border:1px;
  border-color:white;
  
`;
const Label = Styled.Text`
font-Weight: 700;
font-size: 18px;
color: white;
`;

interface Props {
    label: string;
    style?: Object;
    onPress?: () => void;
}

const MainFaceBtn = ({ label, style, onPress }: Props) => {
    return (
        <StyledButton style={style} onPress={onPress}>
            <Label> {label}</Label>
        </StyledButton>
    );
};

export default MainFaceBtn;
