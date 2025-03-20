
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/RoutesType/types';


type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'screens/settings'>;


export default function SettingsScreen() {
  const navigation = useNavigation<SettingsScreenNavigationProp>();


  const onPressPassword = () => {
    navigation.navigate('screens/password');
  };


  const onPressName = () => {
    navigation.navigate('screens/name');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <Button
        onPress={onPressPassword}
        title="Change Password"
        accessibilityLabel="Change Password button, click to go to the password page"
      />
      <Button
        onPress={onPressName}
        title="Change Name"
        accessibilityLabel="Change Name button, click to go to the name page"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
