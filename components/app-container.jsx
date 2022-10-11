import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

export default function Container({ children }) {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
