import * as React from 'react';
import Styled from 'styled-components/native';
import LoginBtn from '~/Components/Button/LoginBtn';
import SignUpBtn from '~/Components/Button/SignUpBtn';
import FacebookBtn from '~/Components/Button/FaceBookBtn';

import Icon from 'react-native-vector-icons/Ionicons';

const View = Styled.View`
    backgroundColor: #008388;
    flex: 1;
`;
const FaceBtn = Styled(FacebookBtn)`
margin-top : 65%;
`;
const GoogleBtn = Styled(FacebookBtn)`
    margin-top : 2%;
`;

const SignBtn = Styled(SignUpBtn)`
    margin-top : 2%;
    backgroundColor: #008388;
    color: white;
`;
const GoogleIcon = Styled(Icon)`
    margin-left:10%;
    margin-top:-22%;
    color: #008388;
`;
const FacebookIcon = Styled(Icon)`
    margin-left:10%;
    margin-top:-19%;
    color:#008388;
`;

const LoginOption = ({ navigation }) => {

    return (
        <View>
            <FaceBtn
                label="페이스북"
                onPress={() => {
                }}
            />
            <GoogleBtn
                label="구글"
                onPress={() => {
                }}
            />
            <SignBtn
                style={{}}
                label="계정 만들기"
                onPress={() => navigation.navigate('SignUp')}
            />
            <GoogleIcon name="logo-google" size={25} />
            <FacebookIcon name="logo-facebook" size={25} />
        </View>
    );
}


export default LoginOption;