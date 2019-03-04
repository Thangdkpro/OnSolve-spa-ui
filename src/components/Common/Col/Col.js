import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import Styles from '../../../styles/components/grid.scss';

class Col extends PureComponent {
  static propTypes = {
    children: object.isRequired,
  };

  render() {
    return (
      <div className={Styles.col}>
        {this.props.children}
      </div>
    );
  }
}


export default Col;
