import React, { PureComponent } from 'react';
import { object, string, bool } from 'prop-types';
import Styles from './InputField.scss';
import FlexContainer from '../FlexContainer/FlexContainer';

export class InputField extends PureComponent {
  static defaultProps = {
    required: false,
    label: 'input',
  };

  static propTypes = {
    required: bool,
    input: object.isRequired,
    label: string,
    meta: object.isRequired,
    type: string.isRequired,
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.label}>{this.props.label}
          { this.props.required && <span className={Styles.colorRed}>*</span> }
        </label>
        <FlexContainer>
          <input
            className={Styles.inputStyle}
            {...this.props.input}
            type={this.props.type}
          />
        </FlexContainer>
        {this.props.meta.touched &&
            ((this.props.meta.error && <span className={Styles.error}>{this.props.meta.error}</span>))}
      </div>
    );
  }
}
