import React from 'react';
import Styled from 'styled-components/native';

const StyleButton = Styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const Label = Styled.Text`
  color: #FFFFFF;
  font-size:20px;
`;

interface Props {
    label: string;
    style?: Object;
    color?: string;
    onPress?: () => void;
}

const TripBtn = ({ label, style, color, onPress }: Props) => {
    return (
        <StyleButton style={style} onPress={onPress}>
            <Label style={{ color: color ? color : '#FFFFFF' }}>{label}</Label>
        </StyleButton>
    );
};

export default TripBtn;
