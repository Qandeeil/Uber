import { KeyboardAvoidingView, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MapScreen from "./src/screens/MapScreen";
import EatsScreen from "./src/screens/EatsScreen";
import { Provider } from "react-redux";
import store from "./store/main";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          style={{flex: 1}}
        >
          <stack.Navigator>
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="MapScreen" component={MapScreen} />
            <stack.Screen name="EatsScreen" component={EatsScreen} />
          </stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
