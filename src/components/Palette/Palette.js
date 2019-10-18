import React from 'react';
import './Palette.css';
import Navbar from '../Navbar/Navbar';
import ColorBox from '../ColorBox/ColorBox';

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        background={color[format]} 
        name={color.name}
      />
    ));

    return (
      <div className="palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />

        <div className="palette-colors">
          {colorBoxes}
        </div>{/* ./palette-colors */}
      </div>
    );
  }
}

export default Palette;