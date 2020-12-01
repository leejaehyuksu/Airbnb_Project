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
    const [Birth, setBirth] = useState<string | undefined>(undefined);
    const { FirstName, LastName, Email, Password } = route.params;

    const ex3Input = {
        ...route.params,
        Birth: Birth
    }

    console.log("Password : ", ex3Input.Password);
    // console.log("Password : ", ex2Input.Password);
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
            <StyledIcon name="chevron-forward-circle-outline" size={70} onPress={() => { navigation.navigate('Agree', ex3Input) }} />
        </View>
    );
}

export default InputBirth;