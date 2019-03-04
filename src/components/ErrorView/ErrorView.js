import React, { Component } from 'react';
import * as propTypes from 'prop-types';
import Styles from './ErrorView.scss';

export default class ErrorView extends Component {
  static propTypes = {
    content: propTypes.string.isRequired,
  }
  render() {
    return (
      <div className={Styles.content}> {this.props.content} </div>
    );
  }
}
