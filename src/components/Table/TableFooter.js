import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableFooter extends PureComponent {
  render() {
    const { tag: Tag, ...remainingProps } = this.props;
    return (<Tag {...remainingProps} />);
  }
}

TableFooter.defaultProps = {
  tag: 'tfooter',
};

TableFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default TableFooter;
