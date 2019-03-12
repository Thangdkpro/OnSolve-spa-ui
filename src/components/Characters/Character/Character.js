/* eslint-disable */
import React, { Component } from 'react';
import Styles from './character.scss';

export default class Character extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={Styles.wrapper}>
      {
      this.props.data.map((element)=>{
          return(
            <div className={Styles.imagePreview}>
            <img src={element.image} alt="logo" />
            <div className={Styles.imagePreviewLine} />
              <h3>{element.title}</h3>
            </div>
          )
        })
      }
    </div>
      
  }
}
