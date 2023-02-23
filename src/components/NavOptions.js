import { TouchableOpacity, Text, FlatList, Image, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";

const NavOptions = ({ navigation }) => {
  const Data = [
    {
      id: 123,
      title: "Get a ride",
      image:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1636501380/assets/7c/0d98ca-0968-4985-9eae-693ec18fde03/original/UberX-Share-Icon.png",
      screen: "MapScreen",
    },
    {
      id: 456,
      title: "Order food",
      image: "https://cdn-icons-png.flaticon.com/512/1920/1920654.png",
      screen: "EatsScreen",
    },
  ];
  const { origin } = useSelector((state) => state.navSlice);

  return (
    <FlatList
      horizontal
      data={Data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            tw`bg-gray-200 m-2 w-40 rounded-md`,
            !origin && { opacity: 0.5 },
          ]}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`flex items-center justify-center p-2`}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120 }}
            />
            <Text style={tw`text-lg font-semibold my-2`}>{item.title}</Text>
            <View
              style={tw`bg-gray-400 rounded-full w-14 h-10 justify-center items-center mb-2`}
            >
              <Icon name="angle-right" size={25} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
