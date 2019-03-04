/*eslint-disable */
import React, { Component } from 'react';
import * as propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Table from '../../../components/Table/Table';
import TableBody from '../../../components/Table/TableBody';
import TableHeader from '../../../components/Table/TableHeader';
import TableHeaderCell from '../../../components/Table/TableHeaderCell';
import TableRow from '../../../components/Table/TableRow';
import TableCell from '../../../components/Table/TableCell';
import Styles from './homepageTable.scss';

import ErrorView from '../../../components/ErrorView/ErrorView';

class HomePageTableView extends Component {
  static propTypes = {
    data: propTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      columns: ['Name', 'Discription', 'thumbnail'],
      marvelHeroList: this.props.data,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      marvelHeroList: nextProps.data,
    });
  }
  handleClick = (element) => {
    this.props.history.push(`/hero/${element.id}`);
  }

  buildTableBody = () => {
    const { marvelHeroList } = this.state;
    const marvelHeroListComponent = marvelHeroList.length > 0 ? marvelHeroList.map((element) => {
      const urlImage = `${element.thumbnail.path}/portrait_xlarge.${element.thumbnail.extension}`;
      return element.name.length > 0 && [
        <TableRow key={element.id}>
          <TableCell
            colSpan={this.state.columns.length + 1}
            className={Styles.rowType}
          />
        </TableRow>,
        <TableRow key={element.id} onClick={() => { this.handleClick(element); }} onKeyPress={this.handleClick}>
          <TableCell>{element.name}</TableCell>
          <TableCell>{element.description}</TableCell>
          <TableCell ><img className={Styles.imgFm} src={urlImage} alt="loading" /></TableCell>
        </TableRow>
      ];
    }) : (
      <TableRow>
        <TableCell colSpan="5" className={Styles.textCenter}>
          <ErrorView content="Data is not found. Please try again !" />
        </TableCell>
      </TableRow>
    );
    return marvelHeroListComponent;
  }

  render() {
    const { columns } = this.state;
    const tableBody = this.buildTableBody();

    return (
      <Table className={Styles.table}>
        <TableHeader>
          <TableRow>
            {columns.map((element) => {
              return (
                <TableHeaderCell
                  key={element}
                  className={Styles.upperFirstLetter}
                >
                  {element}
                </TableHeaderCell>);
            })}
            <TableHeaderCell>{}</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          { tableBody }
        </TableBody>
      </Table>
    );
  }
}

export default withRouter(HomePageTableView);
