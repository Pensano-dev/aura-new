import { Text, View } from "react-native";
import HomeScreen from "./tabs/home";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomeScreen></HomeScreen>
    </View>
  );
}
