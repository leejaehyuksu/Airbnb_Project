import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import Styled from 'styled-components/native';
const Container = Styled.View`
flex-direction:row;
padding :10px;
height: 35px;
`;

const Label = Styled.Text`
font-size : 12px;
`;
const Icon = Styled.Image`
width: 15px;
height:15px;
align-items:center;
`;

interface Props {
    value: boolean;
    label: string;
}

const ViewMove = ({ value, label }: Props) => {
    return (
        <Container >
            <Icon
                source={
                    value === true
                        ? require('~/Assets/Images/ViewMove/ViewMove1.png')
                        : require('~/Assets/Images/ViewMove/ViewMove2.png')
                }></Icon>
            <CheckBox value={value} style={{ width: 5, opacity: 0 }} />
            <Label>{label}</Label>
        </Container>
    );
};

export default ViewMove;