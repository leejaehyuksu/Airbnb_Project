import React from 'react';
import Styled from 'styled-components/native';

const StyledButton = Styled.TouchableOpacity`
    width: 50%;
    height: 40px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    border-color: white;
`;
const Label = Styled.Text`
    margin-left:3%;
    font-Weight: 700;
    font-size: 20px;
    color: white;
`;

interface Props {
    label: string;
    style?: Object;
    onPress?: () => void;
}

const AllSelectBtn = ({ label, style, onPress }: Props) => {
    return (
        <StyledButton style={style} onPress={onPress}>
            <Label> {label}</Label>
        </StyledButton>
    );
};

export default AllSelectBtn;
