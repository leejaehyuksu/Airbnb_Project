interface IUserInfo2 {
    email: string;
    password: string;
}
interface IUserInfo {
    email?: string;
    lastname?: string;
    firstname?: string;
    // tokens: {
    accessToken?: string;
    refreshToken?: string;
    // }
}

interface IUserContext {
    isLoading: boolean;
    userInfo: IUserInfo | undefined;
    login: (tokens: string) => void;
    getUserInfo: () => void;
    logout: () => void;
    permission?: boolean | undefined;
    checkPermission?: (granted: boolean) => void
    getPermission?: () => void
}

