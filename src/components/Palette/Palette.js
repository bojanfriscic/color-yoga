import React from 'react';
import './Palette.css';
import ColorBox from '../ColorBox/ColorBox';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        background={color.hex} 
        name={color.name}
      />
    ));

    return (
      <div className="palette">
        <Slider 
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        <div className="palette-colors">
          {colorBoxes}
        </div>{/* ./palette-colors */}
      </div>
    );
  }
}

export default Palette;