import React, { useState } from 'react';
import Styled from 'styled-components/native';
import FaceBookBtn from '~/Components/Button/FaceBookBtn'
import TripBtn from '~/Components/Button/TripBtn';
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
const LockImage = Styled.Image``;

const LockImageContainer = Styled.View`
  border-color: #292929;
  margin-bottom: 24px;
`;

const Description = Styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  color: #292929;
`;

const TabContainer = Styled.View`
  flex-direction: row;
  margin-right:60%;
  margin-bottom: 10%;
`;

const MainText = Styled.Text`
    font-size:40px;
    margin-top:5%;
    margin-right:60%;
    margin-bottom:10%;
    font-Weight: 700;
`;

const Message = ({ navigation }) => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const tabs = ['메시지', '알림'];
  const tabDescriptions = [
    '호스트에게 연락하거나 예약 요청을 보내면, 이곳에 메시지가 표시됩니다. ',
    '알림 내역이 없습니다.',
  ];
  return (
    <Container>
      <FormContainer>
        <MainText>메시지함</MainText>
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
        <Description>{tabDescriptions[tabIndex]}</Description>
        <LockImageContainer>
          <LockImage source={require('~/Assets/Images/trip.png')} />
        </LockImageContainer>
        <TripBtn label="에어비앤비 둘러보기" style={{ marginBottom: 24 }} onPress={() => navigation.navigate('Main')} />
      </FormContainer>
    </Container>
  );
};
export default Message;