import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import Styled from 'styled-components/native';

import Input from '~/Components/Input';
import Button from '~/Components/Button';
import Tab from '~/Components/Tab';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #FEFFFF;
`;

const FormContainer = Styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 32px;
`;

const LockImageContainer = Styled.View`
  padding: 24px;
  border-width: 2px;
  border-color: #292929;
  border-radius: 80px;
  margin-bottom: 24px;
`;
const LockImage = Styled.Image``;
const Title = Styled.Text`
  font-size: 40px;
  margin-bottom: 16px;
`;
const Description = Styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  color: #292929;
`;
const TabContainer = Styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;
const HelpLabel = Styled.Text`
font-size: 18px;
  color: #008388;
`;
const Footer = Styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: #008388;
  padding: 8px;
`;
const GoBack = Styled.Text`
  font-size:20px;
  padding-top:20px;
  margin-bottom:30px;
  color: #008388;
  text-align: center;
`;

const PasswordReset = ({ navigation }) => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const tabs = ['사용자 이름', '전화번호'];
    const tabDescriptions = [
        '계정과 연결된 이메일주소를 입력하시면, 비밀번호 재설정 링크를 보내드립니다.',
        '계정과 연결된 전화번호를 입력하시면, 비밀번호 재설정 링크를 보내드립니다.',
    ];
    const placeholders = ['사용자 이름 또는 이메일', '전화번호'];

    return (
        <Container>
            <FormContainer>
                <LockImageContainer>
                    <LockImage source={require('~/Assets/Images/lock.png')} />
                </LockImageContainer>
                <Title>비밀번호 재설정</Title>
                <Description>{tabDescriptions[tabIndex]}</Description>
                <TabContainer>
                    {tabs.map((label: string, index: number) => (
                        <Tab
                            key={`tab-${index}`}
                            selected={tabIndex === index}
                            label={label}
                            onPress={() => setTabIndex(index)}
                        />
                    ))}
                </TabContainer>
                <Input
                    style={{ marginBottom: 16, height: 50 }}
                    placeholder={placeholders[tabIndex]}
                />
                <Button label="다음" style={{ marginBottom: 24 }} />
                <HelpLabel>도움이 더 필요하세요?</HelpLabel>
            </FormContainer>
            <Footer>
                <GoBack onPress={() => navigation.goBack()}>로그인으로 돌아가기</GoBack>
            </Footer>
        </Container>
    );
};

export default PasswordReset;