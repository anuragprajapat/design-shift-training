import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function HomeScreen(props) {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      {/* <Button
        title="to top"
        onPress={() => {
          props.navigation.popToTop();
        }}
      /> */}
      <MapView
        style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
// AIzaSyCfOYaHIQWfrssyrMWjKKWx06knNAEfafk
