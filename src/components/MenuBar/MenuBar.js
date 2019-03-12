import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './menubar.scss';
import MenuBarRoutes from './MenuBar.routes';

class NavBar extends PureComponent {
  static defaultProps = {
    tag: 'ul',
  };
  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };
  render() {
    const { tag: Tag } = this.props;
    return (
      <Tag className={Styles.menuBar}>
        {
          MenuBarRoutes.map((element) => {
            return (
              <li key={element.name}>
                <Link to={element.url}>{ element.name}</Link>
              </li>);
          })
        }
      </Tag>
    );
  }
}

export default NavBar;
