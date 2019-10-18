import React from 'react';
import './Palette.css';
import Navbar from '../Navbar/Navbar';
import ColorBox from '../ColorBox/ColorBox';

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
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
        />

        <div className="palette-colors">
          {colorBoxes}
        </div>{/* ./palette-colors */}
      </div>
    );
  }
}

export default Palette;