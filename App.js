import React, { Component } from 'react';
import Player from './src/components/Player';

export const TRACKS = [
  {
    title: 'ça Dépend de toi',
    artist: 'KEROZEN DJ feat SERGE BEYNAUD',
    albumArtUrl: "https://ivoirmixdj.com/wp-content/uploads/2018/03/WhatsApp-Image-2018-03-02-at-13.18.50.jpeg",
    audioUrl: "https://ivoirmixdj.com/download/kerozen-dj-feat-serge-beynaud-ca-depend-de-toi/?wpdmdl=211021",
  },
  {
    title: 'Victoire',
    artist: 'DJ KEROZEN',
    albumArtUrl: "https://ivoirmixdj.com/wp-content/uploads/2018/09/PhotoGrid_1537878784568.jpg",
    audioUrl: "https://ivoirmixdj.com/download/dj-kerozen-la-victoire/?wpdmdl=213001",
  },
  {
    title: 'LE TEMPS Version Acoustique',
    artist: 'DJ KEROZEN ',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2017/08/le-temps13180_n.jpg',
    audioUrl: 'https://ivoirmixdj.com/download/dj-kerozen-temps-version-acoustique/?wpdmdl=14907',
  },
  {
    title: 'Zangoule',
    artist: 'SERGE BEYNAUD',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2018/08/BEY-0-5.jpg',
    audioUrl: 'https://ivoirmixdj.com/download/serge-beynaud-zangoule/?wpdmdl=212795',
  },
  {
    title: 'Mal a la tete',
    artist: 'DJ Mix',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2017/10/mal-a-la-tete_n-e1509262594661.jpg',
    audioUrl: 'https://ivoirmixdj.com/download/dj-mix-mal-a-la-tete/?wpdmdl=208818',
  },
  {
    title: 'On va se laisser',
    artist: 'DJ Mix ',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2017/10/XDF-DDD-253_o.jpg',
    audioUrl: 'https://ivoirmixdj.com/download/dj-mix-on-va-se-laisser/?wpdmdl=208822',
  },
  {
    title: 'LAISSE MOI VIVRE',
    artist: 'VENOM CASCADEUR',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2017/11/WhatsApp-Image-2017-11-03-at-11.18.23.jpeg',
    audioUrl: 'https://ivoirmixdj.com/download/venom-cascadeur-laisse-moi-vivre/?wpdmdl=208923',
  },
  {
    title: 'Tchintchin',
    artist: 'Safarel Obiang',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2018/08/32887311_838207353031979_4279629383670431744_o-e1535400098542.jpg',
    audioUrl: 'https://ivoirmixdj.com/download/safarel-obiang-tchintchin/?wpdmdl=212744',
  },
  {
    title: 'Manger Chier',
    artist: 'Safarel Obiang',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2017/10/safarel.jpg',
    audioUrl: 'https://ivoirmixdj.com/download/safarel-obiang-manger-chier/?wpdmdl=208847',
  },
  {
    title: 'Decembre 2017',
    artist: 'MIX MARCO DENON DJ',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2017/10/MARCO2.jpg', audioUrl:'https://ivoirmixdj.com/download/mix-marco-denon-dj-decembre-2017/?wpdmdl=208588',
  },
  {
    title: 'Ambiancce 2017',
    artist: 'MIX ATALAKU YOROBO VS TANGUY DENON',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2018/02/YOROO-.jpg', audioUrl:'https://ivoirmixdj.com/download/mix-atalaku-yorobo-vs-tanguy-denon/?wpdmdl=210336',
  },
  {
    title: 'Mix 2017',
    artist: 'MARCO DENON BEAT ',
    albumArtUrl: 'https://ivoirmixdj.com/wp-content/uploads/2018/05/DENON-e-3.jpg', audioUrl:'https://ivoirmixdj.com/download/marco-denon-beat-%e2%99%aa-d%e2%97%95%e2%80%bf%e2%97%95b-%e2%99%aa/?wpdmdl=211748',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}
