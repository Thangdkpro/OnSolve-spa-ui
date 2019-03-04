import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Header from '../../components/Header/Header';
import { homepageSelector } from '../../modules/homepage/homepage.selector';
import Styles from './detail.scss';
import Panel from '../../components/Panel/Panel';
import PanelTitle from '../../components/Panel/panelTitle/PanelTitle';
import Content from '../../components/Content/Content';
import DetailView from './detail.view';

class Detail extends Component {
  static propTypes = {
    homepage: PropType.object.isRequired,
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
            <DetailView {...this.props.homepage} />
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

export default connect(mapStateToProps)(Detail);

