import {
  Image, Pressable, ScrollView, StyleSheet, Text,
  View,
} from 'react-native';
import {Header} from '../widgets/header';

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientText} from '../widgets/GradientText';
import DropShadow from "react-native-drop-shadow";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';

type PaywallItem = {
  icon: string,
  title: string,
}

function getItems(): PaywallItem[] {
  return [
    {
      icon: '🔥',
      title: 'Unlimited Rizz',
    },
    {
      icon: '🤝',
      title: 'Trusted by Millions',
    },
    {
      icon: '❤️‍🔥',
      title: 'Coach Recommended',
    },
    {
      icon: '🍯',
      title: 'Proven to Get Dates',
    },
    {
      icon: '📈',
      title: 'x10 More Responses',
    },
    {
      icon: '😈',
      title: 'x8 More Dates',
    },
  ]
}

export function PaywallScene({navigation}: {navigation: any}) {
  return <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={{paddingLeft: 44, paddingRight: 44, paddingTop: 70, paddingBottom: 70, backgroundColor: '#040404', height: '100%'}}>
      <Header icons={{left: faChevronLeft}} textColor={'#ED217C'}/>
      <Image source={require('../assets/match1.png')} style={{width: '100%', objectFit: 'fill', marginBottom: 50}}/>
      <View style={{marginBottom: 40}}>
        {getItems().map(({icon, title}: PaywallItem, index: number) => {
          return <View style={styles.itemWrapper} key={`item-${index}`}>
            <Text style={styles.itemIcon}>{icon}</Text>
            <Text style={styles.itemTitle}>{title}</Text>
          </View>
        })}
      </View>
        <View style={styles.freeBlock}>
          <DropShadow style={styles.shadow}>
            <View style={styles.wrapper}>
              <LinearGradient
                colors={['#00A676', '#46B1C9']}
                style={styles.freeHeader}
                start={{x: 0, y: 0}} end={{x: 1, y: 1}}
              >
                <Text style={styles.freeHeaderText}>{'Rizz God'}</Text>
              </LinearGradient>
              <GradientText colors={['#FFFFFF', '#46B1C9']} style={styles.freeTitle}>{`Elevate Your Game`}</GradientText>
              <Pressable style={styles.freeButton} onPress={() => navigation.navigate('Regular')}>
                <Text style={styles.freeButtonText}>{'Unlock Free Trial'}</Text>
              </Pressable>
              <Text style={styles.freeText}>{'risk-free trial then $8.67/week'}</Text>
            </View>
          </DropShadow>
        </View>
    </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemIcon: {
    fontSize: 35,
    lineHeight: 42,
    marginRight: 20,
  },
  itemTitle: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 30,
    marginRight: 20,
    color: '#ffffff',
  },
  wrapper: {
    position: 'absolute',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#00A676',
    borderRadius: 30,
    paddingTop: 26,
    paddingBottom: 27,
    paddingRight: 35,
    paddingLeft: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
  },
  shadow: {
    shadowColor: '#00A676',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  freeBlock: {
    position: 'relative',
    width: '100%',
    height: 200,
    marginBottom: 70,
  },
  freeHeader: {
    position: 'absolute',
    right: '40%',
    top: -15,
    borderRadius: 50,
    flex: 1,
    padding: 4,
    width: 111,
  },
  freeHeaderText: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  freeTitle: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 20,
  },
  freeButton: {
    marginBottom: 20,
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 14,
    paddingBottom: 15,
    borderRadius: 50,
    backgroundColor: '#00A676',
  },
  freeButtonText: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: '#ffffff',
  },
  freeText: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'light',
    fontSize: 15,
    lineHeight: 18,
    color: '#ffffff',
    textAlign: 'center',
  }
});
