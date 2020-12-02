import React, { useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Carousel, ImageSlider } from './Main';
import { Alert, Dimensions, TouchableOpacity } from 'react-native';
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
    }


]

const View = Styled.View`
  backgroundColor: white;
  flex: 3;
`;

const TextInput = Styled.TextInput`
    margin-left:10%;
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
    margin-top:5.7%;
    margin-left:86%;
    color: #FF6347;
`;

const SubText = Styled.Text`
    margin-top: 10%;
    margin-bottom:3%;
    margin-left: 3%;
    fontSize: 27px;
    fontWeight: 700;
`;

const SubText1 = Styled.Text`
    padding-top:2%;
    margin-bottom:1%;
    margin-left: 3%;
    fontSize: 30px;
    fontWeight: 700;
    color:white;
`;

const BusanImage = Styled(Image)`
    margin-left:1%;
    width:98%;
    height:250px;
    margin-bottom:3%;
`;
const JejuImage = Styled(Image)`
    margin-left:1%;
    width:98%;
    height:250px;
`;

const BusanText = Styled(Text)`
    padding-top:1%;
    padding-bottom:1%;
    color:white;
    margin-top:3%;
    margin-bottom:5%;
    font-size:22px;
    border:1px;
    border-radius: 10px;
    border-color:white;
    width:70%;
    text-align:center;
    margin-left:2%;
`;

const JejuText = Styled(Text)`
    padding-top:1%;
    padding-bottom:1%;
    color:white;
    margin-top:5%;
    margin-bottom:2%;
    font-size:22px;
    border:1px;
    border-radius: 10px;
    border-color:white;
    width:70%;
    text-align:center;
    margin-left:2%;
`;
const SaleText = Styled(Text)`
    color:white;
    font-size:25px;
    text-align:center;
    margin-top:10%;
`;


const FinishText = Styled(Text)`
    font-size:20px;
    font-weight:700;
    margin-top:30%;
    
`;

const Main = ({ navigation, }) => {
    const [Serachvalue, onChangeText] = useState<string>('');
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

    return (
        <View>
            <ScrollView>
                <Container style={{ marginBottom: 40 }}>
                    <Image source={require('~/Assets/Images/airbnb_background.png')} />
                    <TextInput
                        placeholder="어디로 여행가시나요?"
                        onChangeText={text => onChangeText(text)}
                        value={Serachvalue}
                    />
                    <Searchicon name="search-circle-outline" size={55} onPress={() => navigation.navigate('Map')} />
                    <MainText>이제, 여행은 가까운{"\n"}곳에서</MainText>
                    <Carousel height={windowHeight / 9} width={windowWidth / 1.05} />
                    <SubText >어디에서나, 여행은 살아보는 거야!</SubText>
                    <ImageSliders
                        images={images}
                        height={windowHeight - 500}
                        width={windowWidth - 20}
                        marginLeft={3}
                        marginRight={0}
                        navigation={navigation} />
                </Container >
                <Container style={{ backgroundColor: 'black', paddingTop: 10 }}>
                    <SubText1>숙소 둘러보기</SubText1>
                </Container>
                <Container style={{ backgroundColor: '#070B19', paddingTop: 20, paddingBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('BusanList')}>
                        <BusanImage source={require('~/Assets/Images/mainbusan.jpg')} />
                        <BusanText>부산에서의 숙박 모두 둘러보기 </BusanText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('JejuList')}>
                        <JejuImage source={require('~/Assets/Images/mainjeju.jpg')} />
                        <JejuText>제주도에서의 숙박 모두 둘러보기</JejuText>
                    </TouchableOpacity>
                    <SaleText>혜택가로 만나보세요~!</SaleText>
                </Container>
                <FinishText>다음버전을 기대해주세요......</FinishText>
            </ScrollView>
        </View >

    );
}

export default Main;