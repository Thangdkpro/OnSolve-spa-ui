import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType, { object } from 'prop-types';
import { fetchMarvelHeroList } from '../../modules/homepage/homepage.action';
import HomePageTableBranch from '../homepage/homepageTable/HomePageTable.branch';
import { homepageSelector } from '../../modules/homepage/homepage.selector';
import Header from '../../components/Header/Header';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import Styles from './homepage.scss';
import TitleBar from '../../components/TitleBar/TitleBar';
import Panel from '../../components/Panel/Panel';
import PanelTitle from '../../components/Panel/panelTitle/PanelTitle';
import Slider from '../../components/Slider/Slider';

import Content from '../../components/Content/Content';
import Characters from '../../components/Characters/Characters';
import Pagination from '../../components/Pagination/Pagination';


class HomePage extends Component {
  static propTypes = {
    homepage: PropType.object.isRequired,
    fetchMarvelHeroList: PropType.func.isRequired,
    history: object.isRequired,

  }
  constructor(props) {
    super(props);
    this.state = ({
      pageNumber: 1,
    });
  }

  componentDidMount() {
    this.props.fetchMarvelHeroList(0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.homepage.fetchStatus === 3) {
      const { total } = nextProps.homepage.marvelHeroList.data;
      const page = (total % 20 === 0) ? total / 20 : (total / 20) + 1;
      this.setState({
        pageNumber: page,
      });
    }
  }

  navigateDetailHero = (url) => {
    return this.props.history.replace(url);
  }

  render() {
    const title = 'Marvel Heros';
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
        <MenuHeader />
        <Slider />
        <Characters />
        <Content>
          <TitleBar leftComp={titleBarComp} />
          <Panel
            title={title}
            panelClass={Styles.panel}
            leftComp={panelTitleComp}
          >
            <HomePageTableBranch {...this.props.homepage} />
            <Pagination onClick={this.props.fetchMarvelHeroList} pageNumber={this.state.pageNumber} />
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
