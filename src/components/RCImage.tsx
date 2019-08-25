import React from 'react';
import { Image } from 'react-native';

interface Props {
  uri: string;
  width: number | string;
  height: number | string;
  style?: any;
}
export const RCImage: React.FC<Props> = ({ uri, width, height, style }) => {
  return (
    <Image
      resizeMode="contain"
      style={[{ width, height, alignSelf: "center" }, style]}
      source={{ uri: uri }}
    />
  );
};
