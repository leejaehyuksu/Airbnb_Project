import React, { useEffect, useRef, useState } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import NextBtn from '~/Components/Button/NextBtn';

const View = Styled.View`
    backgroundColor: #008388;
    flex: 1;
`;

const MainText = Styled.Text`
    color: white;
    margin-left: 5%;
    margin-top: 15%;
    fontSize: 40px;
    font-Weight: 700;
`;
const NameText = Styled.Text`
    color: white;
    font-size:20px;
    margin-top: 12%;
    margin-left: 6%;
`;

const RequirePasswrod = Styled.Text`
    color: white;
    margin-top: 7%;
    margin-left: 5%;
    fontSize:20px;
`;
const StyledIcon = Styled(Icon)`
    margin-left:80%;
    margin-top:98%;
    color: white;
`;
const TextNameInput = Styled.TextInput`
    width:85%;
    border-color:white;
    height: 45px;
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
    margin-top:100%;
`;

// const TextPasswordCheck = Styled.Text`
//     color: white;
//     margin-left:78%;
//     margin-top:-5%;
// `;
const PasswordSet = ({ route, navigation }) => {
    const [Password, SetPassword] = useState<string>('');
    const { FirstName, LastName, Email } = route.params;

    const ex2Input = {
        ...route.params,
        Password: Password
    }

    console.log("Email :", ex2Input.Email);

    const inputCheck = () => {
        if (Password.trim() === '' || Password === undefined) {
            Alert.alert('비밀번호를 입력해주세요.');
            return false;
        } else {
            return true;
        }
    }

    return (
        <View>
            <MainText
                onPress={() =>
                    Alert.alert(`FirstName: ${FirstName} // LastName: ${LastName} // email:${Email}`)}>
                비밀번호 설정하기
            </MainText>
            <RequirePasswrod>암호는8자 이상이어야 하며 특수 문자를{"\n"}1개 이상 포함해야 합니다.</RequirePasswrod>
            <NameText>비밀번호</NameText>
            {/* <TextPasswordCheck>표시하기</TextPasswordCheck> */}
            <TextNameInput
                style={{}}
                onChangeText={text => SetPassword(text)}
                value={Password}
                secureTextEntry={true}
            />
            <NextBtn1
                label="다음으로 이동해주세요 "
                onPress={() => {
                    inputCheck();
                    if (inputCheck() === true)
                        navigation.navigate('InputBirth', ex2Input)
                }} />
        </View>

    );
}
export default PasswordSet;