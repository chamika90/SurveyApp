import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

type BottomCurvedViewProps = {
  children: ReactNode;
  backgroundColor: string;
};
const BottomCurvedView = ({
  children,
  backgroundColor,
}: BottomCurvedViewProps) => {
  return (
    <View style={styles.parent}>
      <View style={[styles.child, {backgroundColor: backgroundColor}]}>
        {children}
      </View>
    </View>
  );
};

export default BottomCurvedView;

export const styles = StyleSheet.create({
  parent: {
    height: '100%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
    // position: 'absolute',
    // top: 0,
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
