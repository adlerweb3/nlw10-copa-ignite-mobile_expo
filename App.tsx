// import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Center } from 'native-base';

import { Loading } from './src/components/Loading';
import { SingIn } from './src/screens/SignIn'

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME} >

      {fontsLoaded ? <SingIn /> : <Loading />}

    </NativeBaseProvider>
  );
}