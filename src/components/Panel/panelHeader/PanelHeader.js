import React, { PureComponent } from 'react';
import { object, element, oneOfType, array, string } from 'prop-types';
import Styles from '../panel.scss';

class PanelHeader extends PureComponent {
  static defaultProps = {
    children: undefined,
    panelHeadClass: Styles.panelHeading,
  };

  static propTypes = {
    children: oneOfType([element, object, array]),
    panelHeadClass: string,
  };

  render() {
    const classList = this.props.panelHeadClass;
    return (
      <div className={classList}>
        {this.props.children}
      </div>
    );
  }
}


export default PanelHeader;
