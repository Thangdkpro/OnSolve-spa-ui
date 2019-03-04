import React, { PureComponent } from 'react';
import { string, func, oneOf, oneOfType, array } from 'prop-types';
import noopFunc from '../../../modules/share/noop';
import Styles from '../../../styles/components/button.scss';

export class Button extends PureComponent {
  static defaultProps = {
    buttonStyle: oneOf(['primary', '', 'borderless', 'outline', 'danger', 'edit', 'borderless-strong']),
    children: string,
    buttonType: 'button',
    onClick: noopFunc,
    buttonClass: '',
  };

  static propTypes = {
    onClick: func,
    buttonClass: string,
    buttonType: oneOf(['submit', 'button']),
    children: oneOfType([string, array]),
    buttonStyle: oneOf(['primary', '', 'borderless', 'outline', 'danger', 'edit', 'borderless-strong']),
  }

  getClassName() {
    const style = `btn--${this.props.buttonStyle}`;
    return Styles[style];
  }

  render() {
    return (
      <button
        className={`${this.getClassName()} ${this.props.buttonClass}`}
        onClick={this.props.onClick}
        type={this.props.buttonType}
      >{this.props.children}
      </button>
    );
  }
}

