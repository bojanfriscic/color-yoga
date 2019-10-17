import React from 'react';
import './Palette.css';
import ColorBox from '../ColorBox/ColorBox';

class Palette extends React.Component {
  render() {
    const colorBoxes = this.props.colors.map(color => (
      <ColorBox 
        background={color.color} 
        name={color.name}
      />
    ));

    return (
      <div className="palette">
        <div className="palette-colors">
          {colorBoxes}
        </div>{/* ./palette-colors */}
      </div>
    );
  }
}

export default Palette;