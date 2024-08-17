import MaskedView from '@react-native-masked-view/masked-view';
import {
  Text, TextProps, TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle;
  colors: string[],
}
export function GradientText({ children, style, colors, ...rest }: GradientTextProps) {
    return (
      <MaskedView
        maskElement={
          <Text style={style} {...rest}>
            {children}
          </Text>
        }>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <Text style={[style, { opacity: 0 }]} {...rest}>
            {children}
          </Text>
        </LinearGradient>
      </MaskedView>
    );
  };
