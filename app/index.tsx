import { Redirect } from 'expo-router';
// import { View } from "react-native";
// import HomeScreen from "./tabs/home";
// import Facilities from "./tabs/facilities";
// import supabase from "../app/src/supabase-client/supabase";

export default function Index() {
  
  return <Redirect href="/tabs/home" />;
  // return (
  //   <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <HomeScreen ></HomeScreen>
  //     {/* <Facilities></Facilities> */}
  //   </View>
  // );
}
