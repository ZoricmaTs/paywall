import React from 'react';
import {
  StyleSheet,
  View,
  Text, Pressable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
export type HeaderType = {
  icons: {
    left?: IconDefinition,
    right?: IconDefinition,
  },
  title?: string,
  subtitle?: string,
  style?: ViewStyle,
  textColor?: string,
  onPressLeft?: () => void,
  onPressRight?: () => void,
}

export function Header({icons, title, subtitle, style, textColor, onPressLeft, onPressRight}: HeaderType) {
  return <View style={{...styles.headerContainer, ...style}}>
    <Pressable style={styles.icon} onPress={onPressLeft}>
      {icons.left && <FontAwesomeIcon size={24} icon={icons.left} style={{color: textColor}}/>}
    </Pressable>

    <View style={{flex: 1, alignItems: 'center'}}>
      {title && <Text style={{...styles.title, color: textColor}}>{title}</Text>}
      {subtitle && <Text style={{...styles.subtitle, color: textColor}}>{subtitle}</Text>}
    </View>

    <Pressable style={styles.icon} onPress={onPressRight}>
      {icons.right && <FontAwesomeIcon size={24} icon={icons.right} style={{color: textColor}}/>}
    </Pressable>
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
  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
