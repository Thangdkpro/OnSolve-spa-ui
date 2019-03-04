import React, { PureComponent } from 'react';
import { object, element, oneOfType, array, string } from 'prop-types';
import Styles from '../panel.scss';

class PanelBody extends PureComponent {
  static defaultProps = {
    children: '',
    panelBodyClass: Styles.panelBody,
  };

  static propTypes = {
    children: oneOfType([element, object, array]),
    panelBodyClass: string,
  };

  render() {
    const classList = this.props.panelBodyClass;
    return (
      <div className={classList}>
        {this.props.children}
      </div>
    );
  }
}


export default PanelBody;
