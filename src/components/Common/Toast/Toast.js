import React, { PureComponent } from 'react';
import PropTypes, { oneOf } from 'prop-types';
import ToastContent from './toastContent/ToastContent';
import Styles from './toast.scss';

export class Toast extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
    this.timerId = '';
  }

  setToastClassName = () => {
    return Styles[`toast--${this.props.toaststyle}`];
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visible,
    });
    if (nextProps.visible) {
      this.showToast();
    }
  }

  showToast = () => {
    this.setState({ visible: true }, () => { this.startTimer(); });
  }

  hideToast = () => {
    this.setState({ visible: false });
    this.clearTimer();
  }

  timer = () => {
    const timeoutID = setTimeout(() => {
      this.hideToast();
    }, this.props.duration);
    this.timerId = timeoutID;
  }

  startTimer = () => {
    this.clearTimer();
    this.timer();
  }

  clearTimer = () => {
    clearTimeout(this.timerId);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    const { message } = this.props;
    const toastClassName = this.setToastClassName();
    const { visible } = this.state;
    if (visible) {
      return (
        <div>
          {(this.state.visible) &&
            <div className={toastClassName}>
              <ToastContent message={message} />
            </div>
          }
        </div>
      );
    }
    return null;
  }
}

Toast.propTypes = {
  duration: PropTypes.number,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  toaststyle: oneOf(['default', 'success', 'danger']),
};

Toast.defaultProps = {
  duration: 5000,
  toaststyle: 'default',
};
