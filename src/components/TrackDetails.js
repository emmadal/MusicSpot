import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import Styles from '../styles/Styles'
const TrackDetails = ({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress,
  }) => (
  <View style={Styles.containerTrack}>
    <TouchableOpacity onPress={onAddPress} style={Styles.btnDetailsTrack}>
      <Image source={require('../containers/icons/ic_add_circle_outline_white.png')}
        style={Styles.imgbtn}/>
    </TouchableOpacity>
    <View style={Styles.detailsWrapper}>
      <Text style={Styles.titleTrack}>{title}</Text>
      <Text style={Styles.artistTrack}>{artist}</Text>
    </View>
    <TouchableOpacity onPress={onMorePress} style={Styles.btnDetailsTrack}>
        <Image source={require('../containers/icons/ic_more_horiz_white.png')}
          style={Styles.imgbtn}/>
    </TouchableOpacity>
  </View>
);

export default TrackDetails;
