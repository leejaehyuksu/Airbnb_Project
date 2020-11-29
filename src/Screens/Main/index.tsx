import React, { useEffect } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Carousel, ImageSlider } from './Main';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageSliders from '~/Components/ImageSlider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Card, ListItem, Button, Text, Avatar } from 'react-native-elements'

const images = [
    {
        uri: require('~/Assets/Images/slider1.png'),
    },
    {
        uri: require('~/Assets/Images/slider2.png'),
    },
    {
        uri: require('~/Assets/Images/slider3.png'),
    },
    {
        uri: require('~/Assets/Images/slider4.png'),
    },

]

const View = Styled.View`
  backgroundColor: white;
  flex: 3;
`;

const TextInput = Styled.TextInput`
    margin-left:12%;
    height: 50px;
    border-color:white;
    width:73%;
    position: absolute;
    color:black;
    background-color:white;
    margin-top:6%;
    border-radius: 20px;
    padding-left:15%;
`;

const Image = Styled.Image`
    flex: 1;
    width: 100%;
    height: 500px;
`;

const Container = Styled.View`
    flex:2;
`;

const MainText = Styled.Text`
    position: absolute;
    margin-top : 25%;
    margin-left: 3%;
    color : white;
    fontSize: 30px;
    fontWeight: 700;
`;

const Searchicon = Styled(Icon)`
    position: absolute;
    margin-top:6%;
    margin-left:88%;
    color: #FF6347;
`;

const SubText = Styled.Text`
    margin-top: 10%;
    margin-bottom:3%;
    margin-left: 3%;
    fontSize: 22px;
    fontWeight: 700;
`;

const SubText1 = Styled.Text`
    margin-top: 20%;
    margin-bottom:3%;
    margin-left: 3%;
    fontSize: 22px;
    text-align:center;
    fontWeight: 700;
`;

const Main = ({ navigation }) => {
    const [Serachvalue, onChangeText] = React.useState('');
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
    return (
        <View>
            <ScrollView>
                <Container>
                    <Image source={require('~/Assets/Images/airbnb_background.png')} />
                    <TextInput
                        placeholder="어디로 여행가시나요?"
                        onChangeText={text => onChangeText(text)}
                        value={Serachvalue}
                    />
                    <Searchicon name="search-circle-outline" size={50} onPress={() => navigation.navigate('Map')} />
                    <MainText>이제, 여행은 가까운{"\n"}곳에서</MainText>
                    <Carousel height={windowHeight / 9} width={windowWidth / 1.05} />
                    <SubText>어디에서나, 여행은 살아보는 거야!</SubText>
                    <ImageSliders
                        images={images}
                        height={windowHeight - 500}
                        width={windowWidth - 20}
                        marginLeft={2}
                        marginRight={0} />
                </Container>
                <SubText1>다음버전을 기대해주세요...</SubText1>
            </ScrollView>
        </View >

    );
}

export default Main;