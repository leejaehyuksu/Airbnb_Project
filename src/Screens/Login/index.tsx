import React, { useEffect, useRef, useState, useContext } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ForgetPasswordBtn from '~/Components/Button/ForgetPasswordBtn';
import Axios from 'axios';
import { Alert } from 'react-native';
import NextBtn from '~/Components/Button/NextBtn';
import { UserContext } from '~/Context/UserContext';

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

const NextBtn1 = Styled(NextBtn)`
margin-left:60%;
    margin-top:75%;
`;

const StyledIcon = Styled(Icon)`
    margin-left:80%;
    margin-top:75%;
`;

const Login = ({ navigation }) => {
    const [Email, SetEmail] = useState<string>('');
    const [Password, SetPassword] = useState<string>('');

    //
    const { login } = useContext(UserContext);
    let logincheck = false;

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
    console.log(Email);
    console.log(Password);

    const submitFC = () => {
        const LoginInfo = {
            "email": Email,
            "password": Password,
        }
        const json_LoginInfo = JSON.stringify(LoginInfo);
        return (json_LoginInfo);
    };

    console.log(submitFC());
    //request
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: submitFC()
    };

    function fetchLogin() {
        let url = 'http://192.168.0.112:3333/airbnb/user/login';

        return fetch(url, data)
            .then((res) => {
                if (res.status === 400) return console.log("다시 시도해주세요");
                if (res.status === 200) return res.json();
            })
            .then((data) => {
                if (data === undefined) {
                    console.log("다시 확인해주세요")
                    Alert.alert("정보를 다시 확인해주세요")
                    return logincheck = false;
                } else {
                    login(data.tokens.accessToken);
                    return logincheck = true;
                };

            }).catch(error =>
                console.error('err! :', error)
            );
    };

    return (

        <View>
            <ForgetPasswordBtn
                style={{}}
                label="비밀번호가 생각나지 않으세요?"
                onPress={() => navigation.navigate('Main')} />
            <MainText>로그인</MainText>
            <NameText>이메일 주소</NameText>
            <TextInput
                style={{}}
                onChangeText={(text: string) => SetEmail(text)}
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
            <NextBtn1
                label="로그인 "
                onPress={() => {
                    fetchLogin();
                    inputCheck();
                    // if (inputCheck() === true && (logincheck === true)) navigation.navigate('Main', { Email: Email, Password: Password });
                }}
            />
        </View>
    );
}

export default Login; 