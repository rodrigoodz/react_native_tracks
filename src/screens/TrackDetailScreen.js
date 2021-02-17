import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);

  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);

  const { locations } = track;

  return (
    <View>
      <Text style={{ fontSize: 32 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...locations[0].coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
