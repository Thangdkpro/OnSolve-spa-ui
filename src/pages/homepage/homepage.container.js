import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType, { object } from 'prop-types';
import { fetchMarvelHeroList } from '../../modules/homepage/homepage.action';
import HomePageTableBranch from '../homepage/homepageTable/HomePageTable.branch';
import { homepageSelector } from '../../modules/homepage/homepage.selector';
import Header from '../../components/Header/Header';
import Styles from './homepage.scss';
import TitleBar from '../../components/TitleBar/TitleBar';
import Panel from '../../components/Panel/Panel';
import PanelTitle from '../../components/Panel/panelTitle/PanelTitle';

import Content from '../../components/Content/Content';

class HomePage extends Component {
  static propTypes = {
    homepage: PropType.object.isRequired,
    fetchMarvelHeroList: PropType.func.isRequired,
    history: object.isRequired,

  }

  componentDidMount() {
    this.props.fetchMarvelHeroList();
  }
  navigateDetailHero = (url) => {
    return this.props.history.replace(url);
  }

  render() {
    const title = 'All Marvels Hero';
    const panelTitleComp = (
      <PanelTitle>
        {title}
      </PanelTitle>
    );

    const titleBarComp = (
      <div>
        {title}
      </div>
    );

    return (
      <div>
        <Header title={title} />
        <Content>
          <TitleBar leftComp={titleBarComp} />
          <Panel
            title={title}
            panelClass={Styles.panel}
            leftComp={panelTitleComp}
          >
            <HomePageTableBranch {...this.props.homepage} />
          </Panel>
        </Content>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    homepage: homepageSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMarvelHeroList: fetchMarvelHeroList(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
