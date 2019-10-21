import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './Palette.styles';
import Navbar from '../Navbar/Navbar';
import ColorBox from '../ColorBox/ColorBox';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

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
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={color.id}
        background={color[format]}
        name={color.name}
        id={color.id}
        paletteId={id}
        showLink={true}
      />
    ));

    return (
      <div className={classes.palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors={true}
        />

        <div className={classes.paletteColors}>{colorBoxes}</div>
        {/* ./palette-colors */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
