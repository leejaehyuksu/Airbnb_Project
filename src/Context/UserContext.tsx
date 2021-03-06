import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext: IUserContext = {
    isLoading: false,
    userInfo: undefined,
    getUserInfo: () => { },
    login: () => { },
    logout: () => { },
};

interface Props {
    children: JSX.Element | Array<JSX.Element>;
}
const UserContext = createContext<IUserContext>(defaultContext);

const UserContextProvider = ({ children }: Props) => {
    const [addrInfo, setAddress] = useState<string>();
    const getAddr = () => {
        AsyncStorage.getItem('address').then((value) => {
            if (value) {
                setAddress(value);
            }
            // setIsLoading(true);
        });
    };

    const [userInfo, setUserInfo] = useState<IUserInfo>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = (accessToken: string) => {
        AsyncStorage.setItem('token', accessToken).then(() => {
            setUserInfo({
                accessToken: accessToken
            });

            setIsLoading(false);
        });
    };
    const getUserInfo = () => {
        AsyncStorage.getItem('token').then((value) => {
            if (value) {
                console.log("토큰 값 : ", value);
                setUserInfo({
                    accessToken: value
                });
            }
            setIsLoading(false);
        });
    };
    const logout = () => {
        AsyncStorage.removeItem('token');
    };
    useEffect(() => {
        getUserInfo();
    }, []);
    return (
        <UserContext.Provider
            value={{
                isLoading,
                userInfo,
                login,
                logout,
                getUserInfo,
            }}>
            {children}
        </UserContext.Provider>
    );
};
export { UserContext, UserContextProvider };
