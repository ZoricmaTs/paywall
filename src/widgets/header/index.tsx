import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export function Header({left, right, title, subtitle, style = {}}: {left?: any, right?: any, title?: string, subtitle?: string, style: any}) {
  return <View style={{...styles.headerContainer, ...style}}>
    <View style={{width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}>{left}</View>
    <View style={{flex: 1, alignItems: 'center'}}>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text>{subtitle}</Text>}
    </View>
    <View style={{width: 40, height: 40}}>{right}</View>
  </View>
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 50,
  },
  title: {
    fontFamily: 'Syncopate-Bold',
    fontSize: 44,
    fontWeight: 'bold',
    lineHeight: 44,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'SF Pro Display',
    fontSize: 25,
    fontWeight: 'light',
    lineHeight: 30,
  },
});
