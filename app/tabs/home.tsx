import { Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HelloWave } from '../src/components/HelloWave';
import ParallaxScrollView from '../src/components/ParallaxScrollView';
import { ThemedText } from '../src/components/ThemedText';
import { ThemedView } from '../src/components/ThemedView';
import { RootStackParamList } from '../src/RoutesType/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onPressStart = () => {
    navigation.navigate('facilities');
  };

  const onPressSettings = () => {
    navigation.navigate("screens/settings");
  }



  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../assets/images/aura-logo.svg')}
          style={styles.auraLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Aura!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">About Aura</ThemedText>
        <ThemedText>
          Aura is designed to help users with accessibility needs—whether physical, neurological, or ambient-related—find venues that cater to their specific requirements. By providing detailed information about a venue's accessibility features, Aura empowers users to make informed decisions and plan their visits with confidence.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button 
          onPress={onPressStart}
          title='START'
          accessibilityLabel='Start button, click to go to the facilities page'
        />
         <Button
          onPress={onPressSettings}
          title='cafes'
          accessibilityLabel='Settings button, click to go to the settings page'
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  auraLogo: {
    height: 200,
    width: 150,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
