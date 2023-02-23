import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import UberX from "../../assets/ImagesRide/UberX.png";
import UberXL from "../../assets/ImagesRide/UberXL.png";
import UberLUX from "../../assets/ImagesRide/UberLUX.png";
import { useSelector } from "react-redux";
import 'intl';
import 'intl/locale-data/jsonp/en';

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const { travelTimeInformation } = useSelector((state) => state.navSlice);
  const Data = [
    {
      id: 1,
      title: "UberX",
      multiplier: 1,
      image: UberX,
    },
    {
      id: 2,
      title: "Uber XL",
      multiplier: 1.2,
      image: UberXL,
    },
    {
      id: 3,
      title: "Uber LUX",
      multiplier: 1.75,
      image: UberLUX,
    },
  ];

  const SURGE_CHARGE_RATE = 1.5

  return (
    <View style={[{ backgroundColor: "#fff", height: "100%" }]}>
      <View
        style={[
          {
            position: "relative",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          },
          tw`py-5`,
        ]}
      >
        <TouchableOpacity
          style={{ position: "absolute", left: 30, bottom: 23, width: 50 }}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={22} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={Data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              },
              selected?.id === id ? { backgroundColor: "#0000001c" } : null,
            ]}
          >
            <View>
              <Image
                source={image}
                style={{ width: 100, height: 100, resizeMode: 'contain' }}
              />
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 17 }}>
                {new Intl.NumberFormat("en-gb", {
                  style: "currency",
                  currency: "USD",
                }).format(
                  (travelTimeInformation?.duration.value *
                    SURGE_CHARGE_RATE *
                    multiplier) /
                    350
                )}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={[
          { backgroundColor: "#000" },
          tw`py-4 m-3`,
          !selected && { backgroundColor: "#0000001c" },
        ]}
        disabled={!selected}
      >
        <Text
          style={[
            {
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
              fontSize: 15,
            },
          ]}
        >
          Choose {selected?.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RideOptionCard;
