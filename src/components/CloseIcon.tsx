import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import fontelloConfig from '../../assets/config.json';
import { Icons } from '../utils/Enums';

const Icon = createIconSetFromFontello(fontelloConfig);

export const CloseIcon: React.FC<{onPress:()=>void}> = ({onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.close}>
        <Icon
          name={Icons.close}
          size={Dimensions.get("window").width / 10}
          color={EStyleSheet.value("$blue")}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = EStyleSheet.create({
  close: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  }
});
