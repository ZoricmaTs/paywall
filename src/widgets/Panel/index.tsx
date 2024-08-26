import {Pressable, StyleSheet, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';

export type PanelType = {
  openScene?: () => void,
}

export type PanelController = {
  requestOpen: () => void,
  requestClose: () => void,
}

export const Panel = forwardRef<PanelController, PanelType>(function(props, ref) {
  const [isPanelOpened, setPanelStatus] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  function requestClose() {
    bottomSheetRef?.current?.close();
  }

  const onClosePress = (): void => {
    requestClose();
  }

  const onPanelUpdate = (indexFrom: number, indexTo: number) => {
    if (indexTo === undefined) {
      return;
    }

    setPanelStatus(indexTo !== -1);
  }

  useImperativeHandle(ref, () => {
    return {
      requestOpen() {
        bottomSheetRef?.current?.expand();
      },
      requestClose: requestClose,
    };
  }, []);

  return <>
    {isPanelOpened ? <View style={styles.blur}>
      <BlurView style={{flex: 1}} blurType="light" blurAmount={5}/>
    </View> : null}

    <BottomSheet
      ref={bottomSheetRef}
      onChange={onPanelUpdate}
      snapPoints={['80%']}
      onAnimate={onPanelUpdate}
      enablePanDownToClose={true}
      index={-1}
    >
      <BottomSheetView style={styles.bottomSheet}>
        <Pressable onPress={onClosePress}>
          <FontAwesomeIcon icon={faXmark} size={36} style={styles.icon}/>
        </Pressable>
        <View style={styles.textWrapper}>

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{'Struggling to get matches?'}</Text>
            <FontAwesomeIcon icon={faChevronRight} size={24} style={styles.icon}/>
          </View>

          <Text style={styles.text}>{'Try our AI app to enhance your appearance with personalized advice.'}</Text>

        </View>

        <Pressable style={styles.button} onPress={props.openScene}>
          <Text style={styles.buttonIcon}>{'💡'}</Text>
          <Text style={styles.buttonText}>{'Tips'}</Text>
          <FontAwesomeIcon icon={faChevronRight} size={24} style={styles.icon}/>
        </Pressable>

      </BottomSheetView>
    </BottomSheet>
  </>;
});

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    left: 0,
    top:0,
    height: '100%',
    width: '100%',
    backgroundColor:'rgba(0,0,0,0.1)',
  },
  bottomSheet: {
    flex: 1,
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 60,
    paddingBottom: 40,
  },
  icon: {
    width: 40,
    height: 40,
  },
  textWrapper: {
    width: '100%',
    paddingTop: 26,
    paddingBottom: 26,
    paddingRight: 17,
    paddingLeft: 17,
    backgroundColor: '#FD96C3',
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 40,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#000000',
    fontFamily: 'SF Pro Display',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 34,
    marginRight: 20,
  },
  text: {
    color: '#000000',
    fontFamily: 'SF Pro Display',
    fontSize: 25,
    fontWeight: 'regular',
    lineHeight: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FD96C3',
    borderRadius: 42,
    paddingLeft: 39,
    paddingRight: 40,
    paddingBottom: 23,
    paddingTop: 23,
  },
  buttonIcon: {
    color: '#000000',
    fontFamily: 'SF Pro Display',
    fontSize: 38,
    fontWeight: 'bold',
    lineHeight: 45,
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'SF Pro Display',
    fontSize: 31,
    fontWeight: 'regular',
    lineHeight: 37,
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'flex-start',
  }
});
