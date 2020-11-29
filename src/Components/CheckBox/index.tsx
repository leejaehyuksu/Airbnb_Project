import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import Styled from 'styled-components/native';
const Container = Styled.View`
flex-direction:row;
padding :15px;
height: 55px;
`;

const Label = Styled.Text`
font-size : 20px;
`;
const Icon = Styled.Image`
margin-top:1%;
width: 20px;
height:20px;
align-items:center;
`;

interface Props {
    value: boolean;
    label: string;
}

const Checkbox = ({ value, label }: Props) => {
    return (
        <Container>
            <Icon
                source={
                    value === true
                        ? require('~/Assets/Images/Check/checked.png')
                        : require('~/Assets/Images/Check/unchecked.png')
                }></Icon>
            <CheckBox value={value} style={{ width: 10, opacity: 0 }} />
            <Label>{label}</Label>
        </Container>
    );
};

export default Checkbox;