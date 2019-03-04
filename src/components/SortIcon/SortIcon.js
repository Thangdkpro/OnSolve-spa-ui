import React, { PureComponent } from 'react';
import { string, func } from 'prop-types';
import Arrow from '../Arrow/Arrow';

class SortIcon extends PureComponent {
  static defaultProps = {
    sortIconClass: '',
  };

  static propTypes = {
    sortIconClass: string,
    sortDirection: string.isRequired,
    sortIncrease: func.isRequired,
    sortDecrease: func.isRequired,
  };


  render() {
    const {
      sortIconClass, sortDirection, sortIncrease, sortDecrease,
    } = this.props;

    return (
      <div className={sortIconClass}>
        <Arrow direction="up" arrowAction={sortIncrease} isHide={(sortDirection === 'asc')} />
        <Arrow direction="down" arrowAction={sortDecrease} isHide={(sortDirection === 'desc')} />
      </div>
    );
  }
}

export default SortIcon;
