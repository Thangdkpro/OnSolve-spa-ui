/* eslint-disable */
import React, { Component } from 'react';
import PropType, { object } from 'prop-types';
// import Styles from './detail.scss';
import { withRouter } from 'react-router-dom';
import { find } from 'lodash';

class HomePageTableView extends Component {
  static propTypes = {
    data: propTypes.array.isRequired,
    marvelHeroList: PropType.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { heroId: this.props.match.params,
   };
  }

  render() {
    const { results } = this.props.marvelHeroList.data;

    const element = find(results, (e)=>{
      return e.id = this.state.heroId;
    })
    console.log('element', element);
    const urlImage = `${element.thumbnail.path}/portrait_xlarge.${element.thumbnail.extension}`;

    return (
      <div>
        <div>
          <img src={urlImage} alt="hero img" />
        </div>
        <div>
           {element.name}
        </div>
        <p>
          {element.description}
        </p>
        <div>
          <h1>
            Frome Serie
          </h1>
          {element.series.items && element.series.items.map((item)=>{
              return(<li>
                {item.name}
               </li>)
          })}
        </div>
        <div>
          <h2>
              Creator
          </h2>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </div>
        <div>
          <h2>
            Charactors
          </h2>
          <li>123</li>
          <li>123</li>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePageTableView);
