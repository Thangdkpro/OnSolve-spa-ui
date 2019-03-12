/* eslint-disable */
import React, { Component } from 'react';
import Styles from './slider.scss';
import LeftArrow from './Arrows/left-arrow';
import RightArrow from './Arrows/right-arrow';
import Slide from './Slide/Slide';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://consequenceofsound.files.wordpress.com/2017/11/avengers-infinity-war1.png',
        'https://wallpapercave.com/wp/HeLC3lH.jpg',
        'https://wallpapercave.com/wp/HGMtO8W.jpg',
        'https://wallpapercave.com/wp/5RWjO2T.jpg',
        'https://wallpapercave.com/wp/3i6dLrF.jpg',
      ],
      currentIndex: 0,
      translateValue: 0,

    };
  }
    goToPrevSilde = () => {
      if (this.state.currentIndex === 0) { return; }

      this.setState((prevState) => {
        return {
          currentIndex: prevState.currentIndex - 1,
          translateValue: prevState.translateValue + this.slideWidth(),
        };
      });
    }
    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if (this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0,
        });
      }

      // This will not run if we met the if condition above
      this.setState((prevState) => {
        return {
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue + -(this.slideWidth()),
        };
      });
    }
    slideWidth = () => {
      return document.querySelector('.test').clientWidth;
    }

    render() {
      return (
        <div className={Styles.slider}>
          <div
            className={Styles.sliderwrapper}
            style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s',
                    }}
          >
            {
                        this.state.images.map((image, i) => {
                            return (
                              <Slide key={i} image={image} />
                            );
                        })
                    }
          </div>

          <LeftArrow
            goToPrevSilde={this.goToPrevSilde}
          />
          <RightArrow
            goToNextSlide={this.goToNextSlide}
          />
        </div>
      );
    }
}

