import React, { useEffect, useRef, useState } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ForgetPasswordBtn from '~/Components/Button/ForgetPasswordBtn';
import Axios from 'axios';
import { Alert } from 'react-native';

const View = Styled.View`
    backgroundColor: #008388;
    flex: 1;
`;

const MainText = Styled.Text`
    color: white;
    margin-left: 5%;
    margin-top: 10%;
    fontSize: 40px;
    font-Weight: 700;
`;

const NameText = Styled.Text`
    color: white;
    font-size: 20px;
    margin-top: 13%;
    margin-left: 5%;
`;

const TextInput = Styled.TextInput`
    width:85%;
    margin-top:3%;
    border-color:white;
    height: 40px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 1px;
    margin-left:5%;
    font-size:23px;
    color:white;
    padding-bottom:1px;
`;

const TextNameInput = Styled.TextInput`
    width:85%;
    margin-top:3%;
    border-color:white;
    height: 40px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 1px;
    margin-left:5%;
    font-size:20px;
    color:white;
    padding-bottom:1px;
`;

const StyledIcon = Styled(Icon)`
    margin-left:80%;
    margin-top:75%;
`;

// const TextPasswordCheck = Styled.Text`
//     color: white;
//     margin-left:78%;
//     margin-top:-5%;
// `;

const Login = ({ navigation }) => {
    const [Email, SetEmail] = useState<string>('');
    const [Password, SetPassword] = useState<string>('');

    const inputCheck = () => {
        if (Email.trim() === '' || Email === undefined) {
            Alert.alert('이메일을 입력해주세요.');
            return false;
        } else if (Password.trim() === '' || Password === undefined) {
            Alert.alert('비밀번호를 입력해주세요.');
            return false;
        } else {
            return true;
        }
    }

    return (

        <View>
            <ForgetPasswordBtn
                style={{}}
                label="비밀번호가 생각나지 않으세요?"
                onPress={() => navigation.navigate('PasswordReset')} />
            <MainText>로그인</MainText>
            <NameText>이메일 주소</NameText>
            <TextInput
                style={{}}
                onChangeText={text => SetEmail(text)}
                value={Email}
                placeholder="example@naver.com"
            />
            <NameText>비밀번호</NameText>
            {/* <TextPasswordCheck>표시하기</TextPasswordCheck> */}
            <TextNameInput
                style={{}}
                onChangeText={text => SetPassword(text)}
                value={Password}
                secureTextEntry={true}
            />
            <StyledIcon name="chevron-forward-circle-outline"
                size={70}
                color="white"
                onPress={() => {
                    inputCheck();
                    if (inputCheck() === true) navigation.navigate('Main');
                }}
            />
        </View>
    );
}


export default Login; 