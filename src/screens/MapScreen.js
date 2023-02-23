import { TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import Map from "../components/Map";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "./NavigateCard";
import RideOptionCard from "./RideOptionCard";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MapScreen = () => {
  const navigation = useNavigation();
  const stack = createNativeStackNavigator();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{ height: "100%", position: 'relative' }}>
      <TouchableOpacity style={[{
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1000,
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }, tw`shadow-lg`]}
      onPress={() => navigation.navigate('Home')}
      >
        <Icon name="menu" size={25}/>
      </TouchableOpacity>
      <View style={{ height: "50%" }}>
        <Map />
      </View>
      <View
        style={[
          tw``,
          {
            height: "50%",
          },
        ]}
      >
        <stack.Navigator>
          <stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
          />
        </stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
