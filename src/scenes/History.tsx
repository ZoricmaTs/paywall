import {
  FlatList, Pressable,
  StyleSheet, Text, useWindowDimensions,
  View,
} from 'react-native';
import {Header} from '../widgets/header';
import React, {useRef} from 'react';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';

export type HistoryItem = {
  title?: string,
  image: string,
}

export function HistoryScene({navigation}: {navigation: any}) {
  const {width} = useWindowDimensions();
  const column = Math.round((width - 20) / 122);
  const margin = 8;
  const SIZE: number = ((width - 20) - (margin * column * 2)) / column;

  const data: HistoryItem[] = [
    {
      image: '',
      title: 'fgddfgdfgdfg',
    },
    {
      image: '',
      title: 'histfdgdfgory',
    },
    {
      image: '',
      title: 'histofdgfdgry',
    },
    {
      image: '',
      title: 'history',
    },
    {
      image: '',
      title: 'histofdgfdgry',
    },
    {
      image: '',
      title: 'history',
    },
    {
      image: '',
      title: 'histofdgfdgry',
    },
    {
      image: '',
      title: 'history',
    },
  ];

  const listRef = useRef<FlatList>(null);

  return <View style={styles.contentWrapper}>
    <FlatList
      ListHeaderComponent={
        <Header
          textColor={'#000000'}
          style={{paddingTop: 73}}
          icons={{left: faChevronLeft}}
          onPressLeft={navigation.goBack}
          title={'History'}
        />
      }
      ListFooterComponent={<View style={{paddingBottom: 81}}/>}
      style={{width: '100%'}}
      data={data}
      numColumns={column}
      horizontal={false}
      ref={listRef}
      key={column}
      renderItem={({item, index}) => {
        return <Pressable
          onPress={() => {}}
          key={index}
          style={{...styles.item, width: SIZE - margin}}
        >
          <Text style={{color: '#ffffff'}}>{item.title}</Text>
        </Pressable>
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FC92C0',
    height: '100%',
  },
  item: {
    padding: 10,
    margin: 8,
    backgroundColor: '#000000',
    height: 183,
    borderRadius: 19,
  }
});
