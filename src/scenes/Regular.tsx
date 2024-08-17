import {
  Image,
  Pressable,
  ScrollView, StyleSheet, Text,
  View,
} from 'react-native';
import {Header} from '../widgets/header';
import React from 'react';
import {Burger, History} from '../assets/icons';
import DropShadow from "react-native-drop-shadow";

function SettingsButton() {
  return <Pressable onPress={() => console.log("onSettings")}>
    <Burger/>
  </Pressable>
}

function HistoryButton() {
  return <Pressable onPress={() => console.log("onHistory")}>
    <History/>
  </Pressable>
}

export function RegularScene() {
  return <ScrollView contentInsetAdjustmentBehavior="automatic" style={{backgroundColor: 'red'}}>
    <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 73, paddingBottom: 81, backgroundColor: '#FC92C0', height: '100%'}}>
      <Header
        style={{color: '#000000'}}
        left={SettingsButton()}
        right={HistoryButton()}
        title={'CUPID'}
        subtitle={'Regular'}
      />
      <Text style={styles.text}>{'Upload a screenshot of a chat or bio'}</Text>
      <View>
        <View style={styles.screenFirst}>
          <DropShadow style={styles.shadow}>
            <Image source={require('../assets/screen1.png')} style={styles.image}/>
          </DropShadow>
        </View>
        <View style={styles.screenSecond}>
          <DropShadow style={styles.shadow}>
            <Image source={require('../assets/screen2.png')} style={styles.image}/>
          </DropShadow>
        </View>
        <View style={styles.screenThird}>
          <DropShadow style={styles.shadow}>
            <Image source={require('../assets/screen3.png')} style={styles.image}/>
          </DropShadow>
        </View>
      </View>
    </View>
  </ScrollView>
}
const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'regular',
    fontSize: 28,
    lineHeight: 34,
  },
  screenFirst: {
    position: 'absolute',
    left: '50%',
    marginLeft: -20,
    top: 20,
    zIndex: 3,
    objectFit: 'cover',
    width: 141,
    height: 325,
    borderRadius: 20,
    transform:  [{rotateZ: '15deg'}],
  },
  screenSecond: {
    position: 'absolute',
    left: '50%',
    marginLeft: -70,
    zIndex: 2,
    objectFit: 'cover',
    width: 151,
    height: 325,
    borderRadius: 20,
  },
  screenThird: {
    position: 'absolute',
    left: '50%',
    marginLeft: -140,
    top: 20,
    zIndex: 1,
    objectFit: 'cover',
    width: 150,
    height: 325,
    borderRadius: 20,
    transform:  [{rotateZ: '-15deg'}],
  },
  shadow: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
  },
  image: {
    width: 150,
    height: 325,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ffffff',
  }
});
