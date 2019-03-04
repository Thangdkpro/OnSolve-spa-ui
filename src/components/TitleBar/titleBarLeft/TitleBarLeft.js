import React, { PureComponent } from 'react';
import { string, element } from 'prop-types';

class TitleBarLeft extends PureComponent {
  static defaultProps = {
    panelHeaderLeftClass: '',
    component: undefined,
  };

  static propTypes = {
    panelHeaderLeftClass: string,
    component: element,
  };

  render() {
    const { component, panelHeaderLeftClass } = this.props;
    return (
      <div className={panelHeaderLeftClass}>
        {component}
      </div>
    );
  }
}


export default TitleBarLeft;
