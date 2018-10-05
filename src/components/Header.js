import React from 'react'
import {TouchableOpacity, View, Image, Text} from 'react-native'
import Styles from '../styles/Styles'

const Header = ({message, onDownPress, onQueuePress, onMessagePress}) => (
  <View style={Styles.containerHeader}>
    <TouchableOpacity style={Styles.btn} onPress={onDownPress}>
      <Image source={require('../containers/icons/ic_keyboard_arrow_down_white.png')}
        style={Styles.imgbtn}/>
    </TouchableOpacity>

    <Text onPress={onMessagePress} style={Styles.message}>
      {message.toUpperCase()}
    </Text>

    <TouchableOpacity onPress={onQueuePress}>
      <Image source={require('../containers/icons/ic_queue_music_white.png')}
        style={Styles.imgbtn}/>
    </TouchableOpacity>
  </View>
)
export default Header;
