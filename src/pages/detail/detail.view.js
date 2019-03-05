import React, { Component } from 'react';
import PropType from 'prop-types';
// import Styles from './detail.scss';

class DetailView extends Component {
  static propTypes = {
    data: PropType.object.isRequired,
  }

  render() {
    const element = this.props.data[0];
    const urlImage = `${element.thumbnail.path}/portrait_xlarge.${element.thumbnail.extension}`;
    return (
      <div>
        <div>
          <img src={urlImage} alt="hero img" />
        </div>
        <div>
          <h1> {element.name} </h1>
        </div>
        <p>
          {element.description}
        </p>
        <div>
          <h1>
              From Series
          </h1>
          {element.series.items && element.series.items.map((item) => {
              return (
                <li> {item.name}</li>);
            })}
        </div>
        <div>
          <h2>
              Story
          </h2>
          {element.stories.items && element.series.items.map((item) => {
              return (<li>  {item.name} </li>);
            })}
        </div>
        <div>
          <h2>
              Event
          </h2>
          {element.events.items && element.series.items.map((item) => {
              return (<li> {item.name} </li>);
            })}
        </div>
      </div>
    );
  }
}

export default DetailView;
