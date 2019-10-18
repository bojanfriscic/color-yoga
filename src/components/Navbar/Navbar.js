import React from 'react';
import './Navbar.css';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

class Navbar extends React.Component {
  render() {
    const { level, changeLevel } = this.props;

    return (
      <header className="navbar">
        <div className="logo">
          <a href="/">React Palette</a>
        </div>{/* /.logo */}

        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>{/* ./slider */}
        </div>{/* ./slider-container */}
      </header>
    )
  }
}

export default Navbar;