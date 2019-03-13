/* eslint-disable */
import React, { Component } from 'react';
import Styles from './characters.scss';
import Character from './Character/Character';

export default class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [{
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_03_1.jpg',
        title: 'CAPTAIN MARVEL',
      },
      {
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/247gse_ons_crd_01.jpg',
        title: 'GOOSE THE CAT',
      },
      {
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/176tls_ons_crd_01_0.jpg',
        title: 'TALOS',
      },
      {
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/272sfc_ons_crd_02_0.jpg',
        title: 'YON-ROGG',
      },
      {
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_03_1.jpg',
        title: 'CONLSON',
      },
      {
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/284nfy_ons_crd_01.jpg',
        title: 'NICK FURY',
      },
    ],
    };
  }
  render() {
    return (
      <div className={Styles.charactersWrapper} >
        <div>
          <h1> Feature Characters</h1>
            <Character data={this.state.images}/>
        </div>
      </div>
    );
  }
}
