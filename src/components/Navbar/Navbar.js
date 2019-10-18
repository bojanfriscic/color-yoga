import React from 'react';
import './Navbar.css';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }
  
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;

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

        <div className="select-container">
          <Select 
            value={format}
            onChange={this.handleChange}
          >
            <MenuItem value="hex">HEX  - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>{/* ./select-container */}
      </header>
    )
  }
}

export default Navbar;