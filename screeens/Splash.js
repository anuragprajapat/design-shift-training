import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Login');
    }, 3000);
  });
  return (
    <View>
      <Text>Hello Design Splash!</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SplashScreen;
