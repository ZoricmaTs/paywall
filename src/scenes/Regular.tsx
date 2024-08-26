import {
  Image,
  Pressable,
  ScrollView, StyleSheet, Text,
  View,
} from 'react-native';
import {Header} from '../widgets/header';
import React, {useRef} from 'react';
import DropShadow from 'react-native-drop-shadow';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faClockRotateLeft} from '@fortawesome/free-solid-svg-icons/faClockRotateLeft';
import {Panel, PanelController} from '../widgets/Panel';

export function RegularScene({navigation}: {navigation: any}) {
  const panelRef = useRef<PanelController>(null);

  const openPanel = () => {
    panelRef.current?.requestOpen();
  };

  const openTipsScene = () => {
    panelRef.current?.requestClose();
    navigation.navigate('Tips');
  };

  return <View style={{backgroundColor: '#FC92C0', flex: 1}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 73, paddingBottom: 81}}>
          <Header
            textColor={'#000000'}
            icons={{left: faBars, right: faClockRotateLeft}}
            onPressLeft={openPanel}
            onPressRight={() => navigation.navigate('History')}
            title={'CUPID'}
            subtitle={'Regular'}
          />
          <Text style={styles.text}>{'Upload a screenshot of a chat or bio'}</Text>
          <View style={{marginBottom: 80, height: 350}}>
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
          <View style={styles.buttonWrapper}>
            <Text style={styles.textIcon}>{'❤️'}</Text>
            <Pressable onPress={() => navigation.navigate('Screenshot')} style={styles.button}>
              <Text style={styles.buttonText}>{'Upload Screenshot'}</Text>
            </Pressable>
          </View>
        </View>
    </ScrollView>
    <Panel ref={panelRef} openScene={openTipsScene}/>
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'normal',
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    marginBottom: 50,
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
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    fontFamily: 'SF Pro Display',
    fontSize: 28,
    backgroundColor: '#000000',
    width: 70,
    height: 70,
    borderRadius: 35,
    textAlign: 'center',
    lineHeight: 70,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#000000',
    paddingTop: 19,
    paddingBottom: 18,
    paddingLeft: 39,
    paddingRight: 39,
    borderRadius: 35,
    flex: 1,
  },
  buttonText: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'normal',
    fontSize: 28,
    lineHeight: 34,
    color: '#ffffff',
    textAlign: 'center',
  },
});
