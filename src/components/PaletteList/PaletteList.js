import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './PaletteList.styles';
import MiniPalette from '../MiniPalette/MiniPalette';

class PaletteList extends React.Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  
  render() {
    const { palettes, classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Palette</h1>
          </nav>

          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette 
                {...palette} 
                handleClick={() => this.goToPalette(palette.id)} 
              />
            ))}
          </div>{/* /.palettes */}
        </div>{/* /.container */}
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);