import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Table extends PureComponent {
  render() {
    const { tag: Tag, ...remainingProps } = this.props;
    return (<Tag {...remainingProps} />);
  }
}

Table.defaultProps = {
  tag: 'table',
};

Table.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default Table;
