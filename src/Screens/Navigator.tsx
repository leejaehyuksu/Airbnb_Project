import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Loading from '~/Screens/Loading';
import Home from '~/Screens/Home';
import SignUp from '~/Screens/SignUp';
import LoginOption from '~/Screens/LoginOption';
import Login from '~/Screens/Login';
import InputEmail from '~/Screens/InputEmail';
import PasswordSet from '~/Screens/PasswordSet';
import InputBirth from '~/Screens/InputBirth';
import Agree from '~/Screens/Agree';
import Main from '~/Screens/Main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import None from '~/Screens/None';
import { airbnbColor } from '~/Components/Styles/Colors';
import { UserContext, LocationContext } from '~/Context/';
import { TransitionPresets } from '@react-navigation/stack';
import SaveList from '~/Screens/SaveList';
import Map from '~/Screens/Map';
import PasswordReset from '~/Screens/PasswordReset';
import Trip from '~/Screens/Trip';


const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name="SignUp" component={SignUp}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }} />
            <Stack.Screen name='LoginOption' component={LoginOption}
                options={{
                    ...TransitionPresets.ModalPresentationIOS,
                }} />
            <Stack.Screen name='Login' component={Login}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }} />
            <Stack.Screen name='InputEmail' component={InputEmail}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }} />
            <Stack.Screen name="PasswordSet" component={PasswordSet}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }} />
            <Stack.Screen name="InputBirth" component={InputBirth}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }} />
            <Stack.Screen name="PasswordReset" component={PasswordReset}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }} />
            <Stack.Screen name="Agree" component={Agree}
                options={{
                    ...TransitionPresets.ModalPresentationIOS,
                }} />
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>

    );
};


const Bottom = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Main"
            tabBarOptions={{
                ...TransitionPresets.ModalSlideFromBottomIOS,
                activeTintColor: airbnbColor,
                inactiveTintColor: 'gray',
                labelStyle: { fontSize: 14, fontWeight: '700' },
                style: {
                    paddingTop: 10,
                    height: 70,
                    paddingBottom: 5,
                    borderTopColor: 'lightgray',
                    borderTopWidth: 1,
                },
            }}
            screenOptions={{ title: '미지정' }}>
            <BottomTab.Screen
                name="Main"
                component={Main}
                options={{
                    tabBarLabel: '검색',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search-outline" size={28} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="SaveList"
                component={SaveList}
                options={{
                    tabBarLabel: '저장목록',
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="heart-outline" size={28} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Trip"
                component={Trip}
                options={{
                    tabBarLabel: '여행',
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="airplane-outline" size={28} color={color} />
                    ),
                }}
            />

            <BottomTab.Screen
                name="History"
                component={None}
                options={{
                    tabBarLabel: '메세지함',
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="mail-outline" size={28} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Login"
                component={None}
                options={{
                    tabBarLabel: '프로필',
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="person-circle-outline" size={28} color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

const Navigator = () => {
    const { addrInfo } = useContext(LocationContext);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={addrInfo ? 'Main' : 'HomeNavigator'}
                screenOptions={{
                    title: ' ',
                    headerTintColor: 'white',
                    headerTransparent: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }}>
                <Stack.Screen
                    name="HomeNavigator"
                    component={HomeNavigator}
                    options={{
                    }}
                />
                <Stack.Screen
                    name="Main"
                    component={Bottom}
                    options={{
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default () => {
    // const { addrInfo } = useContext(LocationContext);
    // console.log('>1>>>', addrInfo);
    return <Navigator></Navigator>;
};