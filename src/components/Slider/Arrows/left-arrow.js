/* eslint-disable */

import React from 'react';
import Styles from './arrow.scss';

const LeftArrow = (props) => {
  return (
    <div className={Styles.backArrow} onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
