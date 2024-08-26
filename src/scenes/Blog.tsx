import {
  ScrollView, StyleSheet, Text,
  View,
} from 'react-native';
import {Header} from '../widgets/header';
import React from 'react';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';

enum ContentType {
  title,
  paragraph,
}

export function BlogScene({navigation, route}: {navigation: any, route: any}) {
  const content: any[] = [
    {
      type: ContentType.paragraph ,
      content: 'Imagine you’re at the peak of a mountain, the world spread out beneath you, a panorama of possibilities. But every time you try to take a step forward, you’re held back by invisible chains. These chains are the subtle, yet powerful, ties of social media. Quitting social media can feel like trying to climb a mountain with these chains pulling you back. But why is it so difficult for our brains to let go? Let’s dive into the science and some practical steps to break free.'
    },
    {
      type: ContentType.title ,
      content: 'The Allure of Social Media',
    },
    {
      type: ContentType.paragraph ,
      content: 'Social media platforms are designed to be addictive. They provide instant gratification, similar to the rush you get from gambling or eating sugary foods. When you receive a notification, a like, or a comment, your brain releases dopamine, the “feel-good” neurotransmitter. This dopamine release reinforces the behavior, making you crave more.'
    },
    {
      type: ContentType.paragraph ,
      content: 'n essence, social media hijacks the brain’s reward system. The anticipation of social interactions and the validation from peers create a cycle that’s hard to break. Over time, this cycle can lead to compulsive behavior, where you feel the need to check your phone constantly.',
    },
  ]
  return <View style={{backgroundColor: '#000000', flex: 1}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{paddingLeft: 20, paddingRight: 20, paddingTop: 73, paddingBottom: 81}}>
          <Header
            textColor={'#ffffff'}
            icons={{left: faChevronLeft}}
            onPressLeft={navigation.goBack}
          />
          <Text style={styles.titleScene}>{route.params.item.title}</Text>
          {route.params.item.subtitle && <Text style={styles.subtitleScene}>{route.params.item.subtitle}</Text>}
          {content.length > 0 && content.map((item, index) => {
            const style = item.type === ContentType.paragraph ? styles.paragraph : styles.title;
            return <Text style={{...styles.text, ...style}} key={index}>{item.content}</Text>
          })}
        </View>
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  titleScene: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 41,
    color: '#ffffff',
  },
  subtitleScene: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 30,
    color: '#ffffff',
    marginTop: 5,
  },
  text: {
    fontFamily: 'SF Pro Display',
    fontSize: 20,
    lineHeight: 24,
    marginTop: 30,
    color: '#ffffff',
  },
  paragraph: {
    fontWeight: 'normal',
  },
  title: {
    fontWeight: 'bold',
  },
});
