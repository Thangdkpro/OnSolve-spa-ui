import React, { PureComponent } from 'react';
import { number, object, string } from 'prop-types';
import Col from '../Col/Col';
import Styles from '../../../styles/components/form.scss';
import FlexContainer from '../FlexContainer/FlexContainer';

export class TextareaField extends PureComponent {
  static defaultProps = {
    rows: 4,
  };

  static propTypes = {
    input: object.isRequired,
    label: string.isRequired,
    meta: object.isRequired,
    type: string.isRequired,
    rows: number,
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <FlexContainer>
          <Col>
            <textarea
              className={Styles.textareaInput}
              type={this.props.type}
              {...this.props.input}
              rows={this.props.rows}
            />
          </Col>
        </FlexContainer>
        {this.props.meta.touched &&
        ((this.props.meta.error && <span className={Styles.error}>{this.props.meta.error}</span>))}
      </div>
    );
  }
}

