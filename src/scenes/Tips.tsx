import {
  FlatList, Pressable,
  StyleSheet, Text,
  View,
} from 'react-native';
import {Header} from '../widgets/header';
import React, {useRef} from 'react';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

export type TipItem = {
  id: number,
  title: string,
  subtitle?: string,
}

export function TipsScene({navigation}: {navigation: any}) {
  const data: TipItem[] = [
    {
      id: 1,
      title: 'What Attracts People?',
    },
    {
      id: 2,
      title: 'First Impressions Matter',
    },
    {
      id: 3,
      title: 'First Date Success',
    },
    {
      id: 4,
      title: 'Tips for a successful first date',
    },
    {
      id: 5,
      title: 'Engaging Conversations',
    },
    {
      id: 6,
      title: 'Avoid These Mistakes',
    },
    {
      id: 7,
      title: 'Date Dress Tips',
    },
    {
      id: 8,
      title: 'Struggling to get matches?',
      subtitle: 'Try our AI app to enhance your appearance with personalized advice.',
    },
  ];

  const listRef = useRef<FlatList>(null);

  return <View style={styles.contentWrapper}>
    <FlatList
      ListHeaderComponent={
        <Header
          textColor={'#ffffff'}
          style={{paddingTop: 73}}
          icons={{left: faChevronLeft}}
          onPressLeft={() => navigation.navigate('Regular')}
          title={'Tips'}
        />
      }
      ListFooterComponent={<View style={{paddingBottom: 81}}/>}
      data={data}
      numColumns={1}
      style={{width: '100%'}}
      horizontal={false}
      ref={listRef}
      key={1}
      renderItem={({item, index}) => {
        return <Pressable
          onPress={() => navigation.navigate('Blog', {item})}
          key={index}
          style={styles.item}
        >
          <View style={styles.itemTextWrapper}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <FontAwesomeIcon size={24} icon={faChevronRight} style={styles.itemIcon}/>
          </View>
          {item.subtitle && <Text style={styles.itemSubtitle}>{item.subtitle}</Text>}
        </Pressable>
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#000000',
    height: '100%',
    flex: 1,
  },
  item: {
    paddingTop: 38,
    paddingBottom: 34,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 8,
    backgroundColor: '#FD96C3',
    borderRadius: 19,
  },
  itemTextWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  itemTitle: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 34,
    color: '#000000',
    flex: 1,
  },
  itemSubtitle: {
    fontFamily: 'SF Pro Display',
    fontWeight: 'normal',
    fontSize: 25,
    lineHeight: 30,
    color: '#000000',
    marginTop: 20,
  },
  itemIcon: {
    width: 40,
    height: 40,
    color: '#000000',
  },
});
