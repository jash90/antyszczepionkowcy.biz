import React from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface Props {
  children: string;
}
export const RedTitle: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text style={styles.text}>{children}</Text>
    </>
  );
};

const styles = EStyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "$red",
    textAlign: "center",
    padding: 10
  }
});