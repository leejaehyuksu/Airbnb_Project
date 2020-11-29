import React, { useEffect, useState } from 'react';
import AgreeBtn from '~/Components/Button/AgreeBtn';
import DisAgreeBtn from '~/Components/Button/DisAgreeBtn';
import Checkbox from '~/Components/CheckBox';
import Styled from 'styled-components/native';
import { Alert, Permission } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationParamList } from '~/Context/User/@types';


const Container = Styled.View`
padding: 25px 10px;
flex:1;
background-color: white;
`;
const CheckBoxTouchAble = Styled.TouchableOpacity`
padding : 1px 0px;  
`;
const TextContainer = Styled.View`
padding-bottom : 20px; 
`;
const MainMessage = Styled.Text`
margin-left:3%;
font-size : 30px;
font-weight: 700;
`;
const SubMessage = Styled.Text`
margin-left:3%;
margin-top:5%;
font-size : 22px;
font-weight: 500;
`;

const Maintitle = Styled.Text`
margin-left:3%;
margin-bottom:12%;
text-align:center;
font-size : 38px;
font-weight: 700;
text-decoration:underline ;
`;


interface Props {
    navigation: StackNavigationProp<NavigationParamList>;
}
const Agree = ({ navigation }: Props) => {
    const [checked, setCheck] = useState<boolean>(false);
    const [checked2, setCheck2] = useState<boolean>(false);
    const [checkedA, setCheckA] = useState<boolean>(false);

    const onAllchanged = () => {
        const temp = !checkedA;
        setCheck(temp);
        setCheck2(temp);
        setCheckA(temp);
    };
    return (
        <>
            <Container>
                <Maintitle>커뮤니티 차별반대 서약</Maintitle>
                <TextContainer>
                    <MainMessage>
                        에어비앤비는 누구나{'\n'}어디에서나 우리 집처럼{'\n'}편안함을 느낄 수 있는{'\n'}커뮤니티입니다.
                    </MainMessage>
                    <SubMessage>
                        이를 위해 에어비앤비는 다음에 동의해 주실 것을 부탁드립니다.
                    </SubMessage>
                </TextContainer>

                <CheckBoxTouchAble onPressIn={onAllchanged} activeOpacity={1}>
                    <Checkbox value={checked && checked2} label={'전체동의'} />
                </CheckBoxTouchAble>

                <CheckBoxTouchAble
                    activeOpacity={1}
                    style={{ borderTopColor: 'black', borderTopWidth: 1 }}
                    onPressIn={() => {
                        const temp = checked;
                        setCheck(!temp);
                    }}>
                    <Checkbox
                        value={checked}
                        label={'에어비앤비 커뮤니티 차별반대 서약 (필수)'}
                    />
                </CheckBoxTouchAble>
                <CheckBoxTouchAble
                    activeOpacity={1}
                    onPress={() => {
                        const temp = checked2;
                        setCheck2(!temp);
                    }}>
                    <Checkbox
                        value={checked2}
                        label={'앱 푸시 알림 이벤트 수신 동의 (선택)'}
                    />
                </CheckBoxTouchAble>
                <AgreeBtn
                    onPressed={() => navigation.navigate('Main')}
                    checked={checked}
                    title={'동의 및 계속하기'}></AgreeBtn>
                <DisAgreeBtn
                    onPressed={() => navigation.navigate('Home')}
                    checked={checked}
                    title={'거절하기'}></DisAgreeBtn>
            </Container>
        </>
    );
};
export default Agree;  