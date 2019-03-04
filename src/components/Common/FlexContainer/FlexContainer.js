import React, { PureComponent } from 'react';
import { object, oneOfType, array, element } from 'prop-types';
import Styles from '../../../styles/components/grid.scss';

class FlexContainer extends PureComponent {
  static defaultProps = {
    children: element,
  };

  static propTypes = {
    children: oneOfType([object, array, element]),
  };

  render() {
    return (
      <div className={Styles.flexContainer}>
        {this.props.children}
      </div>
    );
  }
}

export default FlexContainer;
