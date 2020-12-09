import * as React from 'react';
import Styled from 'styled-components/native';
import LoginBtn from '~/Components/Button/LoginBtn';
import SignUpBtn from '~/Components/Button/SignUpBtn';
import FacebookBtn from '~/Components/Button/FaceBookBtn';
import GoogleBtn from '~/Components/Button/GoogleBtn';
import KakaoBtn from '~/Components/Button/KakaoBtn';
import Icon from 'react-native-vector-icons/Ionicons';

const View = Styled.View`
    backgroundColor: #008388;
    flex: 1;
`;
const FaceBtn = Styled(FacebookBtn)`
margin-top : 65%;
`;
const GoogleBtn1 = Styled(GoogleBtn)`
    margin-top : 2%;
`;

const SignBtn = Styled(SignUpBtn)`
    margin-top : 2%;
    backgroundColor: #008388;
    color: white;
`;
const KakaoBtn1 = Styled(KakaoBtn)`
    margin-top: 2%;
`;
const FacebookIcon = Styled(Icon)`
    margin-left:10%;
    margin-top: -73px;
    color:white;
`;
const GoogleIcon = Styled(Icon)`
    margin-left:10%;
    margin-top:-130px;
    color: black;
`;
const KakaoIcon = Styled(Icon)`
margin-left:10%;
    margin-top:77px;
`;

const Image = Styled.Image`
  width: 30px;
  height: 30px;
  margin-left: 9%;
  margin-Bottom: 3%;
  margin-top: 6%;
`;
const LoginOption = ({ navigation }) => {

    return (
        <View>
            <FaceBtn
                label="페이스북"
                onPress={() => {
                }}
            />
            <GoogleBtn1
                label="구글"
                onPress={() => {
                }}
            />
            <KakaoBtn1
                label="카카오톡"
                onPress={() => {
                }}
            />
            <SignBtn
                style={{}}
                label="계정 만들기"
                onPress={() => navigation.navigate('SignUp')}
            />

            <GoogleIcon name="logo-google" size={21} color="#900" />
            <FacebookIcon name="logo-facebook" size={21} />
            <KakaoIcon name="chatbubbles-outline" size={21} />
            <Image source={require('~/Assets/Images/airbnb-logo.png')} />
        </View>
    );
}


export default LoginOption;