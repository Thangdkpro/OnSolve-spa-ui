import React, { Component } from 'react';
import * as propTypes from 'prop-types';
import LoadingView from '../../../components/LoadingView/LoadingView';
import ErrorView from '../../../components/ErrorView/ErrorView';
import { status } from '../../../modules/homepage/homepage.constants';
import HomePageTableView from './HomePageTable.view';

class HomePageBranch extends Component {
  static propTypes = {
    fetchStatus: propTypes.number.isRequired,
    marvelHeroList: propTypes.object.isRequired,
  };
  render() {
    const {
      fetchStatus, marvelHeroList,
    } = this.props;

    if (fetchStatus === status.progress) {
      return <LoadingView content="Loading" />;
    } else if (fetchStatus === 3 && marvelHeroList) {
      const data = marvelHeroList.data.results;
      return <HomePageTableView data={data} />;
    }
    return <ErrorView content="Data is not found. Please try again !" />;
  }
}

export default HomePageBranch;
