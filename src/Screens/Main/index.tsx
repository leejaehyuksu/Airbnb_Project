import React, { useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Carousel, ImageSlider } from './Main';
import { Alert, Dimensions, PickerIOSComponent, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageSliders from '~/Components/ImageSlider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Card, ListItem, Button, Text, Avatar } from 'react-native-elements'
import AllSelectBtn from '~/Components/Button/AllSelectBtn';

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
    margin-left:5%;
    height: 40px;
    border-color:white;
    width:80%;
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
    margin-top : 37%;
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
    margin-bottom:1%;
    margin-left: 3%;
    fontSize: 23px;
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
    width:100%;
    height:200px;
`;

const JejuImage = Styled(Image)`
    width:100%;
    height:200px;
`;

const BusanText = Styled(Text)`
    padding-top:2%;
    padding-left:2%;
    padding-bottom:2%;
    color:black;
    margin-top:3%;
    margin-bottom:5%;
    font-size:20px;
    font-weight:700;
    border-radius: 10px;
    border-color:black;
    width:75%;
    text-align:center;
    margin-left:12%;
`;

const JejuText = Styled(Text)`
    font-weight:700;
    padding-top:2%;
    padding-left:2%;
    padding-bottom:2%;
    color:black;
    margin-top:5%;
    margin-bottom:4%;
    font-size:20px;
    border-radius: 10px;
    border-color:black;
    width:78%;
    text-align:center;
    margin-left:11%;
`;

const SubText2 = Styled(Text)`
    padding-top:2%;
    margin-bottom:1%;
    margin-left: 3%;
    fontSize: 20px;
    fontWeight: 300;
    color:white;
`;

const FinishText = Styled(Text)`
    font-size:20px;
    font-weight:700;
    margin-top:30%;
`;

const SelectButton = Styled(AllSelectBtn)`
    margin-top:2%;
    margin-left: 20%;

`;
const Image1 = Styled(Image)`
    position:absolute;
    width:50px;
    height:50px;
    margin-top:80px;
    margin-left:12px;
   
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
                        value={Serachvalue} />
                    <Searchicon
                        name="search-circle-outline"
                        size={45}
                        onPress={() => navigation.navigate('Map')} />
                    <Image1 source={require('~/Assets/Images/airbnb-logo.png')} />
                    <MainText>
                        이제, 여행은 가까운{"\n"}곳에서
                    </MainText>
                    <Carousel height={windowHeight / 9.5} width={windowWidth / 1.02} />
                    <SubText>어디에서나, 여행은 살아보는 거야!</SubText>
                    <ImageSliders
                        images={images}
                        height={windowHeight - 380}
                        width={windowWidth - 20}
                        marginLeft={3}
                        marginRight={0}
                        navigation={navigation} />
                </Container >
                <Container style={{ backgroundColor: 'black', marginTop: 20, paddingTop: 10, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                    <SubText1>숙소 둘러보기</SubText1>
                    <SubText2>특가 혜택으로 만나보세요~</SubText2>
                </Container>
                <Container style={{ backgroundColor: '#070B19', paddingTop: 20, paddingBottom: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BusanList')} style={{ backgroundColor: 'white', borderBottomRightRadius: 70, borderBottomLeftRadius: 70, marginBottom: 10 }}>
                        <Container style={{ backgroundColor: 'black' }}>
                            <BusanImage source={require('~/Assets/Images/mainbusan.jpg')} style={{ borderTopLeftRadius: 70, borderTopRightRadius: 70 }} />
                        </Container>
                        <BusanText>부산에서의 숙박 모두 둘러보기 </BusanText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('JejuList')} style={{ backgroundColor: 'white', borderBottomRightRadius: 70, borderBottomLeftRadius: 70, marginBottom: 10 }}>
                        <Container style={{ backgroundColor: 'black' }}>
                            <JejuImage source={require('~/Assets/Images/mainjeju.jpg')} style={{ borderTopLeftRadius: 70, borderTopRightRadius: 70 }} />
                        </Container>
                        <JejuText>제주도에서의 숙박 모두 둘러보기</JejuText>
                    </TouchableOpacity>
                    <SelectButton
                        label="모두 둘러보기"
                        onPress={() => navigation.navigate('Trip')} />
                </Container>
                <FinishText>다음버전을 기대해주세요......</FinishText>
            </ScrollView>
        </View >

    );
}

export default Main;