import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Text,
} from 'react-native-paper';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import AnimatedLoader from 'react-native-animated-loader';
import {AuthContext} from './src/context/authContext';

import RootStackScreen from './src/navigations/';

import {SettingsProvider} from './src/context/SettingsContext';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#00588F',
    accent: '#FFA11F',
  },
};

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [authToken, setAuthToken] = React.useState('kjlq');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setAuthToken('afqsd');
      },
      signUp: () => {
        setIsLoading(false);
        setAuthToken('afqsd');
      },
      signOut: () => {
        setIsLoading(false);
        setAuthToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;
  function toggleTheme() {
    // this function is passed to SettingsItem's Switch using Context API
    setIsDarkTheme(isDark => !isDark);
  }

  const settings = React.useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
    }),
    [theme, isDarkTheme],
  );

  if (isLoading)
    return (
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require('./assets/lottie/loader.json')}
        animationStyle={styles.lottie}
        speed={1}>
        <Text>Loading...</Text>
      </AnimatedLoader>
    );
  return (
    <AuthContext.Provider value={authContext}>
      <SettingsProvider settings={settings}>
        <NavigationContainer theme={theme}>
          <PaperProvider theme={theme}>
            <RootStackScreen authToken={authToken} />
          </PaperProvider>
        </NavigationContainer>
      </SettingsProvider>
    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
