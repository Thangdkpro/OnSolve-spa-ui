import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableRow extends PureComponent {
  render() {
    const { tag: Tag, ...remainingProps } = this.props;
    return (<Tag {...remainingProps} />);
  }
}

TableRow.defaultProps = {
  tag: 'tr',
};

TableRow.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default TableRow;
