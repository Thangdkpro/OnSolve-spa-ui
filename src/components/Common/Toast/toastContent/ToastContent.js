import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Styles from '../toast.scss';

class ToastContent extends PureComponent {
  render() {
    return (
      <div className={Styles.toastContent}>
        {this.props.message}
      </div>
    );
  }
}

ToastContent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ToastContent;
