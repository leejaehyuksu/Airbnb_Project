import React from 'react';
import Styled from 'styled-components/native';

import IconButton from '~/Components/IconButton';


const Container = Styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: #FEFFFF;
`;

const SearchBar = () => {
    return (
        <Container>

            <IconButton iconName="camera" />
        </Container>
    );
};
export default SearchBar; 