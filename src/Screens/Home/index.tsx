import React, { useEffect } from 'react';
import Styled from 'styled-components/native';
import SignUpBtn from '~/Components/Button/SignUpBtn';
import Icon from 'react-native-vector-icons/Ionicons';
import FaceBookBtn from '~/Components/Button/FaceBookBtn';
import SplashScreen from 'react-native-splash-screen';
import LoginBtn from '~/Components/Button/LoginBtn';
import OptionBtn from '~/Components/Button/OptionBtn';

const Textmain = Styled.Text`
  fontSize: 35px;
  color: white;
  fontWeight: 300;
  margin-left: 5%;
`;
const View = Styled.View`
  backgroundColor: #008388;
  flex: 1;
`;

const Image = Styled.Image`
  width: 17%;
  height: 10%;
  margin-left: 5%;
  margin-Bottom: 3%;
  margin-top: 3%;
`;

const TextAgree = Styled.Text`
    color: white;
    margin-top: 8%;
    padding-left: 7%;
    fontSize: 18.5px;
    text-decoration:underline;
`;

const FacebookIcon = Styled(Icon)`
    margin-left:10%;
    color:#008388;  
    margin-top : 70.8%;
    position: absolute;
`;

const FaceBtn = Styled(FaceBookBtn)`
    margin-top:8%;
    color:#008388;
    background-color:white;
    margin-bottom:2%;
`;

const LoginOptionBtn = Styled(OptionBtn)`
    margin-top:10%;
`;

const Home = ({ navigation }) => {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View>
            <LoginBtn
                label="로그인"
                onPress={() => navigation.navigate('Login')} />
            <Image source={require('~/Assets/Images/airbnb-logo.png')} />
            <Textmain>에어비앤비에 오신 것을 {"\n"}환영합니다!</Textmain>
            <FaceBtn
                label="페이스북 계정으로 로그인"
                onPress={() => {
                }}
            />
            <FacebookIcon name="logo-facebook" size={28} />
            <SignUpBtn
                style={{}}
                label="계정 만들기"
                onPress={() => navigation.navigate('SignUp')} />
            <LoginOptionBtn
                label="옵션 더보기"
                onPress={() => navigation.navigate('LoginOption')} />
            <TextAgree>
                '계속하기','계정 만들기' 또는 '옵션 더 보기'를 탭하면 {"\n"}에어비앤비의 서비스 약관, 결제 서비스 약관, 개인정보 {"\n"}처리방침, 차별금지 정책에 동의하는 것입니다.
            </TextAgree>
        </View>
    );
}

export default Home;