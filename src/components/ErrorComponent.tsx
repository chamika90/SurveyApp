import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Res from '../resources';

const {Colors} = Res;

type ErrorComponentProps = {
  message: string;
};
const ErrorComponent = ({message}: ErrorComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

export default ErrorComponent;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    color: Colors.white,
    fontSize: 20,
  },
});
