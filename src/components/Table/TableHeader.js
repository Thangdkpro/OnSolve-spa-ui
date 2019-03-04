import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableHeader extends PureComponent {
  render() {
    const { tag: Tag, ...remainingProps } = this.props;
    return (<Tag {...remainingProps} />);
  }
}

TableHeader.defaultProps = {
  tag: 'thead',
};

TableHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default TableHeader;
