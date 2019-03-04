import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableCell extends PureComponent {
  render() {
    const { tag: Tag, ...remainingProps } = this.props;
    return (<Tag {...remainingProps} />);
  }
}

TableCell.defaultProps = {
  tag: 'td',
};

TableCell.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default TableCell;
