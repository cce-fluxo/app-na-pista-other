import { StatusBar } from 'react-native';
import SignedOutRoutes from './src/Routes/signedOut.routes.js';
import SignedInRoutes from './src/Routes/signedIn.routes.js';
import Main from './src/Routes/main.routes.js'
import AppLoading from 'expo-app-loading';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Ubuntu_500Medium,Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import AddItemModal from './src/Components/AddItemModal/index.js';
import Button from './src/Components/Button/index.js';
import { colors } from './src/Constants/constants';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Ubuntu_500Medium,
    Ubuntu_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar translucent backgroundColor={colors.background} />
      <SignedOutRoutes/>
    </>
  );
}
