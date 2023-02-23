import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../../store/navSlice/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "../components/NavFavourites";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white h-full rounded-md`}>
      <Text style={tw`text-lg font-bold text-center py-5`}>
        Good Morning, Batool
      </Text>
      <View style={{ alignItems: "center" }}>
        <GooglePlacesAutocomplete
          placeholder="Where to go?"
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{
            container: {
              flex: 0,
              width: "90%",
            },
            textInput: {
              backgroundColor: "#DDDDDF",
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("RideOptionCard");
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 25 }}>
        <NavFavourites />
      </View>
      <View
        style={{
          paddingHorizontal: 25,
          flexDirection: "row",
          justifyContent: "space-evenly",
          bottom: "5%",
          position: "absolute",
          width: '100%'
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#000",
            width: 90,
            height: 40,
            justifyContent: 'space-evenly',
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.navigate("RideOptionCard");
          }}
        >
          <View>
            <Icon name="car-alt" size={22} color="#fff" />
          </View>
          <Text style={{ color: "#fff" }}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#DDDDDF",
            width: 90,
            height: 40,
            justifyContent: 'space-evenly',
            borderRadius: 10,
          }}
        >
          <View>
            <Ionicons name="fast-food" size={22} color="#00000082" />
          </View>
          <Text style={{ color: "#00000082" }}>Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigateCard;
