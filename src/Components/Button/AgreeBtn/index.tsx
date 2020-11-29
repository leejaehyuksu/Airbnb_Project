import React, { useState } from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex:1;
    align-items:center;
`;

const ButtonContainer = Styled.TouchableOpacity`
    margin-top: 15%;
    position:absolute;
    border-radius: 30px;
    justify-content :center;
    background-color: white;
    align-items : center;
    height: 60px;
    width: 98%;
`;
interface Props {
    title: string;
    checked: boolean;
    onPressed?: () => void;
}
const Label = Styled.Text`
    font-size: 20px;
    color : white;
    text-align:center;
`;
const AgreeBtn = ({ title, checked, onPressed }: Props) => {
    const [temp_value, setValue] = useState(true);
    return (
        <Container>
            <ButtonContainer
                style={{ backgroundColor: checked ? '#008388' : 'black' }}
                disabled={checked ? false : true}
                onPress={onPressed}>
                <Label>{title}</Label>
            </ButtonContainer>
        </Container>
    );
};
export default AgreeBtn;