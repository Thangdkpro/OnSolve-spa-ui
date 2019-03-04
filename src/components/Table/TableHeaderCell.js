import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHeaderCell extends PureComponent {
  render() {
    const { tag: Tag, ...remainingProps } = this.props;
    return (<Tag {...remainingProps} />);
  }
}

TableHeaderCell.defaultProps = {
  tag: 'th',
};

TableHeaderCell.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default TableHeaderCell;
