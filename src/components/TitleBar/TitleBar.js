import React, { PureComponent } from 'react';
import { object, element, oneOfType, array, string } from 'prop-types';
import Styles from './TitleBar.scss';
import TitleBarLeft from './titleBarLeft/TitleBarLeft';
import TitleBarRight from './titleBarRight/TitleBarRight';

class TitleBar extends PureComponent {
  static defaultProps = {
    titleBar: Styles.titleBar,
    rightComp: null,
    leftComp: null,
  };

  static propTypes = {
    leftComp: oneOfType([element, object, array]),
    rightComp: oneOfType([element, object, array]),
    titleBar: string,
  };

  render() {
    const { leftComp, rightComp } = this.props;
    const classList = this.props.titleBar;
    return (
      <div className={classList}>
        <TitleBarLeft panelHeaderLeftClass={Styles.titleBarLeft} component={leftComp} />
        <TitleBarRight panelHeaderRightClass={Styles.titleBarRight} component={rightComp} />
      </div>
    );
  }
}


export default TitleBar;
