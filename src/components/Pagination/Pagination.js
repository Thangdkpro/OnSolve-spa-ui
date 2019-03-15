/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes, { number } from 'prop-types';
import Styles from './pagination.scss';


class Pagination extends PureComponent {
  static defaultProps = {
    pageNumber: 5,
    tag: 'div',
  };
  constructor(props){
    super(props);
    this.setState({
      page : 5,
    })

  }
  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    pageNumber: number,
  };

  createPage = () => {
    const page = [];
    for (let i = 0; i < this.props.pageNumber; i += 1) {
      page.push(<div onClick={()=>this.handleClick(i)}>{ i + 1} </div>);
    }
    return page;
  }

  handleClick = (e) => {
    this.props.onClick(e);
  }

  render() {
    const { tag: Tag } = this.props;
    return (
      <Tag className={Styles.pagination}>
        <div>&laquo;</div>
        {this.createPage()}
        <div>&raquo;</div>
      </Tag>
    );
  }
}


export default Pagination;
