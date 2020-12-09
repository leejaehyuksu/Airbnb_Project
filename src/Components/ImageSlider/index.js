import React, { useState } from 'react';
import Styled from 'styled-components/native';
import { View, Image, ScrollView, Dimensions, Animated, TouchableOpacity } from 'react-native';
import styles from './styles';

const Text = Styled.Text`
    margin-top: 10%;
`;

const ImageSliders = ({ images, width, height, marginLeft, marginRight, navigation, paddingLeft, paddingRight, padding }) => {

    const [state, setState] = useState(0);

    const change = ({ nativeEvent }) => {

        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== state) {
            setState(slide);
        }
    }

    return (
        <View style={[styles.container, { width, height, marginLeft, marginRight, paddingLeft, paddingRight, padding }]}>

            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={[styles.scroll, { width, height, marginLeft, marginRight, paddingLeft, paddingRight, padding }]}>

                {
                    images.map((image, index) => (
                        <Image
                            key={index}
                            resizeMode="stretch"
                            source={image.uri}
                            //source={{ uri: image.url }}
                            style={{ width, height, marginLeft, marginRight, paddingLeft, padding, paddingRight }} />
                    ))
                }

            </ScrollView>
            <View style={styles.pagination}>
                {
                    images.map((i, k) => (
                        <Text key={k} style={k === state ? styles.pagingActive : styles.pagingText}></Text>
                    ))
                }
            </View>
        </View>
    );
};



export default ImageSliders;