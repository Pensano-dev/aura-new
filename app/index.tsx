import { View } from "react-native";
import HomeScreen from "./tabs/home";
import Facilities from "./tabs/facilities";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomeScreen ></HomeScreen>
      {/* <Facilities></Facilities> */}
    </View>
  );
}
