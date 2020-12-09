import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';
import FaceBookBtn from '~/Components/Button/FaceBookBtn'

const View = Styled.View`
    backgroundColor: white;
    flex: 1;
`;

const MainText = Styled.Text`
    font-size:30px;
    margin-left:7%;
    margin-top:10%;
    font-Weight: 700;
`;
const SubText = Styled.Text`
    font-size:15px;
    margin-left:7%;
    margin-top:10%;
    font-Weight: 700;
`;

const BtnText = Styled.Text`
    font-size:24px;
    margin-left:7%;
    margin-top:10%;
    font-Weight: 700;
    color: #008388;
`;

const Image = Styled.Image`

`;
const SaveList = ({ navigation }) => {
    return (

        <View>
            <MainText>저장목록</MainText>
            <SubText>마음에 드는 항목을 발견하셨다면 하트 모양을{'\n'}눌러 저장하세요. 여행을 함께 계획하는 일행이{'\n'}있다면 초대하세요. 함께 원하는 항목을 저장하고{'\n'}투표할 수 있습니다.</SubText>
            <BtnText onPress={() => navigation.navigate('Main')}>둘러보기</BtnText>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Image source={require('~/Assets/Images/busan.png')} />
            </TouchableOpacity> */}
        </View>
    );
};
export default SaveList;