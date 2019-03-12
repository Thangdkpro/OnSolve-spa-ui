/* eslint-disable */

import React from 'react';
import Styles from './slide.scss';

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };
  return <div className={`test ${Styles.slide}`} style={styles} ></div>
};

export default Slide;
