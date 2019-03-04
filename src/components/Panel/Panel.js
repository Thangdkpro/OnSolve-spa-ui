import React, { PureComponent } from 'react';
import { element, oneOfType, array, object, string } from 'prop-types';
import Styles from './panel.scss';
import PanelHeader from '../../components/Panel/panelHeader/PanelHeader';
import PanelHeaderLeft from '../../components/Panel/panelHeader/panelHeaderLeft/PanelHeaderLeft';
import PanelHeaderRight from '../../components/Panel/panelHeader/panelHeaderRight/PanelHeaderRight';
import PanelBody from '../../components/Panel/panelBody/PanelBody';

class Panel extends PureComponent {
  static defaultProps = {
    children: '',
    rightComp: null,
    leftComp: null,
    panelClass: Styles.panel,
  }

  static propTypes = {
    children: oneOfType([object, array, element]),
    panelClass: string,
    rightComp: element,
    leftComp: element,
  }

  render() {
    const { leftComp, rightComp, panelClass } = this.props;
    return (
      <div className={panelClass}>
        <PanelHeader panelHeadClass={Styles.panelHeading} >
          <PanelHeaderLeft panelHeaderLeftClass={Styles.panelHeaderLeft} component={leftComp} />
          <PanelHeaderRight component={rightComp} />
        </PanelHeader>
        <PanelBody panelBodyClass={Styles.panelBody}>
          {this.props.children}
        </PanelBody>
      </div>
    );
  }
}

export default Panel;
