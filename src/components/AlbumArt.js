import React from 'react'
import {View, TouchableOpacity, Image} from 'react-native'
import Styles from '../styles/Styles'

const AlbumArt = ({ url, onPress}) => (
  <View style={Styles.containerArt}>
    <TouchableOpacity onPress={onPress}>
      <Image style={Styles.imgArt} source={{uri: url}} />
    </TouchableOpacity>

  </View>
)

export default AlbumArt;
