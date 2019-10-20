import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ColorBox from '../ColorBox/ColorBox';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

class SingleColorPalette extends React.Component {
  constructor(props) {
    super(props);
    this.changeFormat = this.changeFormat.bind(this);

    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
  }

  // Return all shades of a given color
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for(let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  // Change color display format
  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const { palette } = this.props;

    const colorBoxes = this._shades.map(color => (
      <ColorBox 
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));

    return (
      <div className="palette">
        <Navbar 
          handleChange={this.changeFormat} 
          showingAllColors={false}
        />
        <div className="palette-colors single-color-palette">
          {colorBoxes}
          <div className="color-box go-back">
            <Link 
              to={`/palette/${palette.id}`}
              className="back-button"
            >
              Go Back
            </Link>
          </div>{/* /.go-back */}
        </div>{/* /.palette-colors */}

        <PaletteFooter 
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    )
  }
}

export default SingleColorPalette;