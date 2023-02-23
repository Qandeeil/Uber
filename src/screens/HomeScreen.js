import { View, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import NavOptions from "../components/NavOptions";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin } from "../../store/navSlice/navSlice";
import tw from "tailwind-react-native-classnames";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={tw`bg-white h-full pt-3`}>
      <View style={{ padding: 15, marginTop: 20 }}>
        <Image
          source={{
            uri: "https://icons-for-free.com/download-icon-uber-1324440247504689178_512.png",
          }}
          style={{ width: 100, height: 80 }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
          styles={{
            container: {
              flex: 0,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          enablePoweredByContainer={false}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
          }}
          fetchDetails={true}
          returnKeyType={"search"}
        />
        <NavOptions navigation={navigation} />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
