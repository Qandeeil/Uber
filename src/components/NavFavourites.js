import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import tw from 'tailwind-react-native-classnames'

const NavFavourites = () => {
  const Data = [
    {
      id: 1,
      icon: "home-work",
      location: "Home",
      destination: "AL-Baqah, Jordan",
    },
    {
      id: 2,
      icon: "work",
      location: "work",
      destination: "(LTUC), Queen Alia Airport Road, Bridge, Jordan",
    },
  ];

  return (
    <FlatList
      data={Data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent= {() => <View style={[tw`bg-gray-200`,{height: 0.5}]}/>}
      renderItem={({ item }) => (
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row' ,alignItems: 'center', width: '100%', paddingVertical: 7}}>
          <View style={[tw`rounded-full`,{backgroundColor: '#0000004a', width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}]}>
            <Icon name={item.icon} size={20} color="#fff" />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold'}}>{item.location}</Text>
            <Text style={{color: '#0000004a', width: '80%'}}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
