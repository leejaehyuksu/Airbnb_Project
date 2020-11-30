import React, { useEffect, useRef, useState } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    font-size:20px;
    color:white;
    padding-bottom:1px;
`;

const TextNameInput = Styled.TextInput`
    width:85%;
    margin-top:4%;
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

const NextIcon = Styled(Icon)`
    position: absolute;
    margin-left:80%;
    margin-top:168%;
    color:white;
`;

const SignUp = ({ navigation }) => {
    const [FirstName, SetFirstName] = useState<string | undefined>(undefined);
    const [LastName, SetLastName] = useState<string | undefined>(undefined);

    const submitFC = () => {
        const joinInfo = {
            "FirstName": FirstName,
            "LastName": LastName,
        }

        const json_joinInfo = JSON.stringify(joinInfo);
        return (json_joinInfo);
    }

    //request
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: submitFC()
    };

    function fetchJoin() {
        let url = ' http://192.168.0.112:3333/airbnb/user/join';
        return fetch(url, data)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    };


    return (
        <View>
            <MainText>이름을 입력해 주세요.</MainText>
            <NameText>이름(예: 길동)</NameText>
            <TextInput
                style={{}}
                onChangeText={(text: string) => SetFirstName(text)}
                value={FirstName}
                placeholder="길동"
            />
            <NameText>성(예: 홍)</NameText>
            <TextNameInput
                style={{}}
                onChangeText={text => SetLastName(text)}
                value={LastName}
                placeholder="홍"
            />
            <NextIcon name="chevron-forward-circle-outline" size={70} onPress={() => { fetchJoin(); navigation.navigate('InputEmail') }} />
        </View>
    );
}

export default SignUp;