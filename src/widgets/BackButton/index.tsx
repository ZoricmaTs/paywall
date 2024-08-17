import {Pressable} from 'react-native';
import { Back } from '../../assets/icons/index.ts';

export function BackButton () {
  return <Pressable onPress={() => console.log("onBack")}>
    <Back/>
  </Pressable>;
}