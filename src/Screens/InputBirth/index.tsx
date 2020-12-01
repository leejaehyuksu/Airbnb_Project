import React, { useEffect, useRef, useState } from 'react';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
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

const TextInput = Styled.TextInput`
    width:85%;
    border-color:white;
    height: 50px;
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
    margin-top:97%;
    color:white;
`;
const TextAgree = Styled.Text`
    color: white;
    margin-top: 7%;
    padding-left: 6%;
    fontSize: 20px;
`;

const BrithText = Styled.Text`
    color: white;
    fontSize: 20px;
    margin-top: 12%;
    padding-left: 6%;
`;


const InputBirth = ({ route, navigation }) => {
    // const [Birth, SetBirth] = useState<string | undefined>(undefined);
    const { FirstName, LastName, Email, Password } = route.params;

    const ex3Input = {
        ...route.params,
        //     Birth: Birth
    }

    // console.log("Password : ", ex3Input.Password);

    const [Birth, setBirth] = useState<string | undefined>(undefined);

    // console.log("Password : ", ex2Input.Password);

    const submitFC = () => {
        const joinInfo = {
            "FirstName": FirstName,
            "LastName": LastName,
            "Email": Email,
            "Password": Password,
            "Birth": Birth,
        }

        const json_joinInfo = JSON.stringify(joinInfo);
        return (json_joinInfo);
    }

    console.log(FirstName);
    console.log(LastName);
    console.log(Email);
    console.log(Password);
    console.log(Birth);
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
        let url = 'http://192.168.0.112:3333/airbnb/user/join';
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
            <MainText onPress={() => Alert.alert(`FirstName: ${FirstName} // LastName: ${LastName} // email:${Email}// password:${Password}`)}>생년월일 확인</MainText>
            <TextAgree>만 18세 이상이어야 합니다. 생일은 다른{"\n"}에어비앤비 이용자에게 공개되지 않습니다.</TextAgree>
            <BrithText>생년월일</BrithText>
            <TextInput
                style={{}}
                onChangeText={text => setBirth(text)}
                value={Birth}
                placeholder="20201212"
            />
            <StyledIcon name="chevron-forward-circle-outline" size={70} onPress={() => { Alert.alert("airbnb에 오신것을 환영합니다! 로그인 후 이용해 주세요."), navigation.navigate('Home'), fetchJoin(); }} />
        </View>
    );
}

export default InputBirth;