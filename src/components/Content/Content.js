import React, { PureComponent } from 'react';
import { element, object, array, oneOfType } from 'prop-types';
import Styles from './content.scss';

class Content extends PureComponent {
  static defaultProps = {
    children: undefined,
  };

  static propTypes = {
    children: oneOfType([element, object, array]),
  };

  render() {
    return (
      <div>
        <div className={Styles.content}>
          <div className={Styles.container}>
            <div className={Styles.contentBox}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
