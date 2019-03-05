import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropType from 'prop-types';
import Header from '../../components/Header/Header';
import { fetchMarvelHero } from '../../modules/detail/detail.action';
import { detailSelector } from '../../modules/detail/detail.selector';
import Styles from './detail.scss';
import Panel from '../../components/Panel/Panel';
import PanelTitle from '../../components/Panel/panelTitle/PanelTitle';
import Content from '../../components/Content/Content';
import DetailBranch from './detail.branch';

class Detail extends Component {
  static propTypes = {
    detail: PropType.object.isRequired,
    fetchMarvelHero: PropType.func.isRequired,
    match: PropType.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { heroId: this.props.match.params.heroId };
  }

  componentDidMount() {
    this.props.fetchMarvelHero(this.state.heroId);
  }

  render() {
    const title = 'Marvel Hero Story';
    const panelTitleComp = (
      <PanelTitle>
        {title}
      </PanelTitle>
    );
    return (
      <div>
        <Header title={title} />
        <Content>
          <Panel
            title={title}
            panelClass={Styles.panel}
            leftComp={panelTitleComp}
          >
            <DetailBranch {...this.props.detail} />
          </Panel>
        </Content>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMarvelHero: fetchMarvelHero(dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    detail: detailSelector(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));

