import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #FEFFFF;
`;

const MainText = Styled.Text`
    font-size:40px;
    margin-top:10%;
    margin-left:6%;
    margin-bottom:7%;
    font-Weight: 700;
`;



const Trip = ({ }) => {

  useEffect(() => {
    getTrip(3, '5', 1);
  }, [])

  const [Trip, setTrip] = useState([])

  const getTrip = async (page: number, size: string, localId: number) => {

    try {
      let response = await fetch(
        `http://192.168.0.112:3333/airbnb/room/search?page=0&size=20&localId=2`
      );
      let json = await response.json();
      setTrip(json.content)
      console.log(Trip)
      console.log('서버호출')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <MainText>여행</MainText>
      <FlatList
        style={{ flex: 1 }}
        data={Trip}
        renderItem={Card}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
      />
    </Container>
  );
};
const Card = ({ item, index, }) => {
  return (
    <View style={{ height: 1000, padding: 35 }}>
      <Text style={{ fontSize: 30, fontWeight: '700', fontFamily: 'Georgia' }}>{item.name}</Text>
      <Image
        source={{ uri: item.pictureUrl }}
        style={{ width: '100%', height: 550, resizeMode: 'cover', }}
      />
      <View>
        <Text style={{ fontSize: 20, textDecorationLine: "underline", color: 'red', padding: 8 }}>★별점{item.avgRating}</Text>
        <Text style={{ fontSize: 30, marginBottom: 10 }}>위치 : {item.localizedCity}{item.spaceType}</Text>
        <Text style={{ fontSize: 25, textDecorationLine: "line-through" }}>원가 : {item.amount}원 </Text>
        <Text style={{ fontSize: 25, textDecorationLine: "underline", color: '' }}>혜택가 : {item.itemPirces}원</Text>
      </View>
    </View>
  )
}
export default Trip;