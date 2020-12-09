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
import Message from '~/Screens/Message';
import BusanList from '~/Screens/BusanList';
import JejuList from '~/Screens/JejuList';



const Stack = createStackNavigator();
const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const HomeStack = createBottomTabNavigator();

// const MainNavi = () => {
//     return (
//         <MainStack.Navigator>
//             <MainStack.Screen name='Main' component={Bottom} />
//             <MainStack.Screen
//                 options={{
//                     title: ' ',
//                     headerTintColor: 'white',
//                     headerTransparent: true,
//                 }}
//                 name="BusanList" component={BusanList}
//             />
//         </MainStack.Navigator>
//     );
// };

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name="SignUp" component={SignUp}
                options={{
                    ...TransitionPresets.SlideFromRightIOS,
                }} />
            <Stack.Screen name='LoginOption' component={LoginOption}
                options={{
                    ...TransitionPresets.ModalPresentationIOS,
                }} />
            <Stack.Screen name='Login' component={Login}
                options={{
                    ...TransitionPresets.SlideFromRightIOS,
                }} />
            <Stack.Screen name='InputEmail' component={InputEmail}
                options={{
                    ...TransitionPresets.SlideFromRightIOS,
                }} />
            <Stack.Screen name="PasswordSet" component={PasswordSet}
                options={{
                    ...TransitionPresets.SlideFromRightIOS,
                }} />
            <Stack.Screen name="InputBirth" component={InputBirth}
                options={{
                    ...TransitionPresets.SlideFromRightIOS,
                }} />
            <Stack.Screen name="PasswordReset" component={PasswordReset}
                options={{
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }} />
            <Stack.Screen name="Agree" component={Agree}
                options={{
                    ...TransitionPresets.ModalPresentationIOS,
                }} />


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
                    height: 60,
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
                        <Icon name="search-outline" size={25} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="SaveList"
                component={SaveList}
                options={{
                    tabBarLabel: '저장목록',
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="heart-outline" size={25} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Trip"
                component={Trip}
                options={{
                    tabBarLabel: '여행',
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="airplane-outline" size={25} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Message"
                component={Message}
                options={{
                    tabBarLabel: '메세지함',
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="mail-outline" size={25} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Login"
                component={None}
                options={{
                    tabBarLabel: '프로필',
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="person-circle-outline" size={25} color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

// const RootNavi = () => {
//     return(
//         <RootStack.Navigator>
//             <RootStack.Screen>
//         </RootStack.Navigator>
//     );
// };


const Navigator = () => {
    const { addrInfo } = useContext(LocationContext);
    const { userInfo } = useContext(UserContext);

    const selectscreen = () => {
        if (userInfo !== undefined) {
            return (
                <Stack.Screen
                    name="Main"
                    component={Bottom}
                    options={{
                    }}
                />
            );
        } else {
            return (
                <Stack.Screen
                    name="HomeNavigator"
                    component={HomeNavigator}
                    options={{
                    }}
                />


            );
        }
    };

    console.log('>>>>>>>>>>', userInfo);
    return (
        <NavigationContainer>

            <Stack.Navigator
                // initialRouteName={userInfo?.accessToken ? 'Main' : 'HomeNavigator'}
                screenOptions={{
                    title: ' ',
                    headerTintColor: 'white',
                    headerTransparent: true,
                    cardOverlayEnabled: true,
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }}>

                {
                    selectscreen()
                }
                <Stack.Screen
                    options={{
                        title: ' ',
                        headerTintColor: 'white',
                        headerTransparent: true,
                    }}
                    name="BusanList" component={BusanList}
                />
                <Stack.Screen
                    options={{
                        title: ' ',
                        headerTintColor: 'white',
                        headerTransparent: true,
                    }}
                    name="JejuList" component={JejuList}
                />
                <Stack.Screen name="Map" component={Map} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};
export default () => {
    // const { addrInfo } = useContext(LocationContext);
    // console.log('>1>>>', addrInfo);
    return <Navigator></Navigator>;
};