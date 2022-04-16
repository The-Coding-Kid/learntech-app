import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MapView from "react-native-maps";
import data from './data.js';
import {useEffect} from "react";

export default function App() {

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} showsUserLocation={true} initialRegion={{
        latitude: 37.7812370,
        longitude: -122.4108242,
        latitudeDelta: 0.1,
        longitudeDelta: 0.05,
      }}>
        {data.map((item) => {
          return (
            <MapView.Marker
              key={item.id}
              coordinate={{
                latitude: item.location.latitude,
                longitude: item.location.longitude,
              }}
              title={item.name}
              description={item.phone}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
