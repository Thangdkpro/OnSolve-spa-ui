import React, { PureComponent } from 'react';
import { object, string, array } from 'prop-types';
import Styles from './SelectField.scss';
import FlexContainer from '../FlexContainer/FlexContainer';

export class SelectField extends PureComponent {
  static propTypes = {
    listElement: array.isRequired,
    input: object.isRequired,
    selectorLabel: string.isRequired,
    meta: object.isRequired,
    showField: string.isRequired,
  };

  render() {
    const {
      selectorLabel, input, listElement, meta, showField,
    } = this.props;
    return (
      <div>
        <label htmlFor={selectorLabel}>{selectorLabel}</label>
        <FlexContainer>
          <select className={Styles.inputStyle} {...input}>
            <option value="">{selectorLabel}</option>
            {listElement.map((element) => {
              return (<option key={element.id} value={element.id}>{element[showField]}</option>);
              })}
          </select>
        </FlexContainer>
        {meta.touched &&
            ((meta.error && <span className={Styles.error}>{meta.error}</span>))}
      </div>
    );
  }
}
