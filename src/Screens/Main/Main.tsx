import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';

const SliderContainer = Styled.View`
    height: 10%
    margin-top:5%;
    padding-right:3%;
`;

interface Props {
    data?: any;
    height: number;
    width: number;
}

const ImageSlider = ({ data, height, width, }: Props) => {
    console.log(data.uri);
    return (
        <SliderContainer style={{ width, height }}>
            <Image source={data.uri} style={{ width, height }} ></Image>
        </SliderContainer>
    );
};

const Carousel = ({ height, width, }: Props) => {
    return (
        <View>
            <FlatList
                data={sliderList}
                style={{ flex: 1, width: 355, marginLeft: 8, marginRight: 5, marginTop: 0, }}
                renderItem={({ item }) => {
                    return <ImageSlider data={item} height={height} width={width} />;
                }}
                keyExtractor={(item, index) => `index_${index}`}
                pagingEnabled
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

// const ImageSlider1 = ({ data, height, width }: Props) => {
//     console.log(data.url);
//     return (
//         <SliderContainer style={{ width, height }}>
//             <Image source={data.url} style={{ width, height }}></Image>
//         </SliderContainer>
//     );
// };

// const Carousel1 = ({ height, width }: Props) => {
//     return (
//         <FlatList
//             data={sliderList1}
//             style={{ flex: 1, width: 340, marginLeft: 8, marginRight: 5, marginBottom: 30, }}
//             renderItem={({ item }) => {
//                 return <ImageSlider1 data={item} height={height} width={width} />;
//             }}
//             keyExtractor={(item, index) => `index_${index}`}
//             pagingEnabled
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//         />
//     );
// };


export { ImageSlider, Carousel };
const sliderList = [
    {
        uri: require('~/Assets/Images/busan.png'),
    },
    {
        uri: require('~/Assets/Images/jeonju.png'),
    },
    {
        uri: require('~/Assets/Images/yangyang.png'),
    },
];

//  const sliderList1 = [
//      {
//          uri: require('~/Assets/Images/slider1.png'),
//      },


//  ];
