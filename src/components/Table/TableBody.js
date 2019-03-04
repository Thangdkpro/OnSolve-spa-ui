import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TableBody extends PureComponent {
  render() {
    const { tag: Tag, ...remainingProps } = this.props;
    return (<Tag {...remainingProps} />);
  }
}

TableBody.defaultProps = {
  tag: 'tbody',
};

TableBody.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default TableBody;
