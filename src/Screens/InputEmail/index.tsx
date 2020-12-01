import React, { useEffect, useRef, useState } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import PasswordSetScreen from '~/Screens/PasswordSet';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert } from 'react-native';


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
    font-size: 25px;
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
    font-size:20px;
    color:white;
    padding-bottom:1px;
`;

const StyledIcon = Styled(Icon)`
    margin-left:80%;
    margin-top:60%;
    color:white;
`;
const TextAgree = Styled.Text`
    color: white;
    margin-top: 10%;
    padding-left: 6%;
    fontSize: 16px;
`;

const TextYesorNO = Styled.Text`
    color: white;
    margin-top: 13%;
    padding-left: 6%;
    fontSize: 16px;
`;


const InputEmail = ({ route, navigation }) => {
    const [Email, SetEmail] = useState<string>('');
    const { FirstName, LastName } = route.params;
    const inputs = {
        FirstName: FirstName,
        LastName: LastName,
    }
    const exInput = {
        ...inputs,
        Email: Email
    }

    console.log(exInput.FirstName)

    const inputCheck = () => {
        if (Email.trim() === '' || Email === undefined) {
            Alert.alert('이메일을 입력해주세요.');
            return false;
        } else {
            return true;
        }
    }

    return (
        <View>
            <MainText onPress={() => Alert.alert(`FirstName: ${FirstName} // LastName: ${LastName}`)}>이메일을 입력하세요.</MainText>
            <NameText>이메일 주소</NameText>
            <TextInput
                style={{}}
                onChangeText={text => SetEmail(text)}
                value={Email}
                placeholder="example01@example.com"
            />
            <TextAgree>에이비앤비의 화원 전용 할인, 추천 여행 정보,프로모션,{"\n"}정책 변경사항 이메일을 보내드립니다. 계정 관리의{"\n"}환경설정 또는 프로모션 알림에서 언제든지 메세지{"\n"}수신을 거부할 수 있습니다.</TextAgree>
            <TextYesorNO>에어비앤비에서는 보내는 마케팅 메시지를 받고{"\n"}싶지 않습니다.</TextYesorNO>
            <StyledIcon name="chevron-forward-circle-outline"
                size={70}
                onPress={() => {
                    inputCheck();
                    if (inputCheck() === true)
                        navigation.navigate('PasswordSet', exInput)
                }} />
        </View>
    );
}
export default InputEmail;