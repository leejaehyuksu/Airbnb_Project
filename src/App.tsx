import * as React from 'react';
import Navigator from '~/Screens/Navigator';
import { UserContextProvider } from '~/Context/UserContext';
import { LocationContextProvider } from '~/Context/LocationContext';

const App = () => {
  return (
    <LocationContextProvider>
      <UserContextProvider>
        <Navigator />
      </UserContextProvider>
    </LocationContextProvider>
  );
};
export default App;