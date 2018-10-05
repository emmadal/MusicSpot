import {StyleSheet, Platform} from 'react-native'
import Colors from './Colors'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)'
  },
  containerHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  containerArt:{
    flex:1,
  },
  containerSeekBar:{
    flex:1,
  },
  containerTrack:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  imgbtn:{
    opacity: 0.72
  },
  message:{
    color: Colors.white,
  },
  imgArt:{
    width: '100%',
    height: '100%'
  },
  artistTrack:{
    color: Colors.white,
    fontSize: 14,
  },
  titleTrack:{
    fontSize: 17,
    color: Colors.white,
    fontWeight:'bold'
  },
  btnDetailsTrack:{
    margin: 10
  },
  detailsWrapper:{
    marginTop: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  textTime:{
    color:Colors.white,
    fontSize: 9
  },
  sliderSeekBar:{
    color: Colors.white
  },
  playButton: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
});

export default Styles;
