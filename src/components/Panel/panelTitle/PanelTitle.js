import React, { PureComponent } from 'react';
import { object, element, oneOfType, array, string } from 'prop-types';

class PanelTitle extends PureComponent {
  static defaultProps = {
    children: '',
    panelTitleClass: '',
  };

  static propTypes = {
    children: oneOfType([element, object, array, string]),
    panelTitleClass: string,
  };

  render() {
    const classList = this.props.panelTitleClass;
    return (
      <div className={classList}>
        {this.props.children}
      </div>
    );
  }
}


export default PanelTitle;
