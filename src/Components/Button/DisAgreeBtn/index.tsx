import React, { useState } from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
flex:1;
align-items:center;
`;

const ButtonContainer = Styled.TouchableOpacity`
margin-bottom:3%;
background-color:white;
border:1px black;
position:absolute;
justify-content :center;
align-items : center;
height: 60px;
border-radius : 20px;
width: 98%;
`;

interface Props {
    title: string;
    checked: boolean;
    onPressed?: () => void;
}
const Label = Styled.Text`
font-size: 20px
color : black;
text-align:center;
`;
const DisAgreeBtn = ({ title, checked, onPressed }: Props) => {
    const [temp_value, setValue] = useState(true);
    return (
        <Container>
            <ButtonContainer
                style={{ backgroundColor: checked ? 'white' : 'white' }}
                disabled={checked ? false : false}
                onPress={onPressed}>
                <Label>{title}</Label>
            </ButtonContainer>
        </Container>
    );
};
export default DisAgreeBtn;