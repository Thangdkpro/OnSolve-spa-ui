import React, { Component } from 'react';
import * as propTypes from 'prop-types';
import LoadingView from '../../components/LoadingView/LoadingView';
import ErrorView from '../../components/ErrorView/ErrorView';
import { status } from '../../modules/detail/detail.constants';
import DetailView from './detail.view';

class DetailBranch extends Component {
  static propTypes = {
    fetchStatus: propTypes.number.isRequired,
    marvelHero: propTypes.object.isRequired,
  };
  render() {
    const {
      fetchStatus, marvelHero,
    } = this.props;

    if (fetchStatus === status.progress) {
      return <LoadingView content="Loading" />;
    } else if (fetchStatus === 3 && marvelHero) {
      const data = marvelHero.data.results;
      return <DetailView data={data} />;
    }
    return <ErrorView content="Data is not found. Please try again !" />;
  }
}

export default DetailBranch;
