import React, { PureComponent } from 'react';
import { element, string } from 'prop-types';

class PanelHeaderRight extends PureComponent {
  static defaultProps = {
    component: undefined,
    panelHeaderRight: '',
  };

  static propTypes = {
    component: element,
    panelHeaderRight: string,
  };

  render() {
    const { component, panelHeaderRight } = this.props;
    return (
      <div className={panelHeaderRight}>
        {component}
      </div>
    );
  }
}


export default PanelHeaderRight;
