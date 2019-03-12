/* eslint-disable */

import React from 'react';
import Styles from './arrow.scss';

const RightArrow = (props) => {
  return (
    <div className={Styles.nextArrow} onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;

