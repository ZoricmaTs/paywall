import {
  Pressable,
  ScrollView, StyleSheet, Text,
  View,
} from 'react-native';
import {Header} from '../widgets/header';
import React from 'react';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

type ScreenshotItem = {
  icon: string,
  title: string,
}

function getItems(): ScreenshotItem[] {
  return [
    {
      icon: '❤️',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      icon: '👑',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      icon: '🧠',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
  ]
}

export function ScreenshotScene({navigation}: {navigation: any}) {

  return <View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.contentWrapper}>
          <Header
            textColor={'#000000'}
            icons={{left: faChevronLeft, right: faPlus}}
            onPressLeft={navigation.goBack}
            onPressRight={() => console.log('Plus')}
            title={'CUPID'}
            subtitle={'Regular'}
          />
          <View style={styles.screenshot}>
            <Text style={{textAlign: 'center'}}>{'User’s screenshot'}</Text>
          </View>
          <View style={styles.borderWrapper}>
            <View style={styles.border}/>
            <Text style={styles.textBorder}>{' 👇 Tap to copy rizz 👇 '}</Text>
            <View style={styles.border}/>
          </View>
          <View style={styles.items}>
            {getItems().map(({icon, title}: ScreenshotItem, index: number) => {
              return <View style={styles.itemWrapper} key={`item-${index}`}>
                <Text style={styles.itemIcon}>{icon}</Text>
                <Text style={styles.itemTitle}>{title}</Text>
              </View>
            })}
          </View>
        </View>
    </ScrollView>
    <View style={styles.buttonWrapper}>
      <Text style={styles.textIcon}>{'❤️'}</Text>
      <Pressable onPress={() => console.log('Reply')} style={styles.button}>
        <Text style={styles.buttonText}>{'Get Rizz Reply'}</Text>
      </Pressable>
    </View>
  </View>
}

const styles = StyleSheet.create({
  screenshot: {
    flex: 1,
    height: 523,
    borderRadius:20,
    marginRight: 49,
    marginLeft: 49,
    marginBottom: 30,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 73,
    paddingBottom: 81,
    backgroundColor: '#FC92C0',
    height: '100%',
  },
  borderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30.
  },
  border: {
    flex: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.2)',
    borderTopWidth: 2,
    height: 1,
    borderStyle: 'solid',
  },
  textBorder: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'regular',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
  },
  items: {
    marginBottom: 80,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingTop: 23,
    paddingBottom: 22,
    paddingRight: 20,
    paddingLeft: 20,
  },
  itemIcon: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'regular',
    fontSize: 34,
    lineHeight: 41,
  },
  itemTitle: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'regular',
    fontSize: 23,
    lineHeight: 28,
    marginLeft: 20,
    flex: 1,
    color: '#ffffff',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 23,
    right: 23,
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
    fontWeight: 'regular',
    fontSize: 28,
    lineHeight: 34,
    color: '#ffffff',
    textAlign: 'center',
  },
});
