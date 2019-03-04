import React, { PureComponent } from 'react';
import { element, string } from 'prop-types';

class TitleBarRight extends PureComponent {
  static defaultProps = {
    component: undefined,
    panelHeaderRightClass: '',
  };

  static propTypes = {
    component: element,
    panelHeaderRightClass: string,
  };

  render() {
    const { component, panelHeaderRightClass } = this.props;
    return (
      <div className={panelHeaderRightClass}>
        {component}
      </div>
    );
  }
}


export default TitleBarRight;
