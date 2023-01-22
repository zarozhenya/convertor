import React, {PropsWithChildren} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {LinearGradientProps} from 'react-native-linear-gradient';
import {styles} from './styles';

function GradientBackground({
  children,
  ...gradientProps
}: PropsWithChildren<LinearGradientProps>): JSX.Element {
  return (
    <LinearGradient style={styles.background} {...gradientProps}>
      {children}
    </LinearGradient>
  );
}

export default GradientBackground;
