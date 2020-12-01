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


const Trip = () => {

  useEffect(() => {
    getTrip(3, '5', 1);
  }, [])

  const [Trip, setTrip] = useState([
    {
      "id": 1427,
      "name": "광안리해수욕장 바로앞 “씨엘 메르”",
      "localizedCity": "수영구",
      "localId": 1,
      "lat": 35.15186,
      "lng": 129.11917,
      "spaceType": "아파트 전체",
      "amount": 225283,
      "itemPirces": 180000,
      "avgRating": "4.89",
      "pictureUrl": "https://a0.muscache.com/im/pictures/88a51347-07c9-406a-8537-95ae3f411e24.jpg?im_w=720"
    },
  ]
  )
  const getTrip = async (page: number, size: string, localId: number) => {

    try {
      let response = await fetch(
        `http://192.168.0.112:3333/airbnb/room/search?page=0&size=20&localId=1`
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
const Card = ({ item, index }) => {
  return (
    <View style={{ height: 1000, padding: 35 }}>
      <TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: '700', fontFamily: 'Georgia' }}>{item.name}</Text>
        <Image
          source={{ uri: item.pictureUrl }}
          style={{ width: '100%', height: 500, resizeMode: 'cover', }}
        />
        <View>
          <Text style={{ fontSize: 20, textDecorationLine: "underline", color: 'red', padding: 8 }}>★별점{item.avgRating}</Text>
          <Text style={{ fontSize: 30, marginBottom: 10 }}>위치 : {item.localizedCity}{item.spaceType}</Text>
          <Text style={{ fontSize: 25, textDecorationLine: "line-through" }}>원가 : {item.amount}원 </Text>
          <Text style={{ fontSize: 25, textDecorationLine: "underline" }}>할인된 가격 : {item.itemPirces}원</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
export default Trip;