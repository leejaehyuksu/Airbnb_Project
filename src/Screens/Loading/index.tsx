
import React from 'react';
import Styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const Container = Styled.View`
    flex: 1;
    background-color : #141414;
    align-items : center;
    justify-content : center;
`;
const Loading = () => {
    return (
        <Container>
            <ActivityIndicator size="large"></ActivityIndicator>
        </Container>
    );
};

export default Loading;