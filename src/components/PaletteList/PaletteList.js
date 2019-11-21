import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { styles } from './PaletteList.styles';
import MiniPalette from '../MiniPalette/MiniPalette';

class PaletteList extends React.Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes, deletePalette } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.title}>React Palette</h1>
            <Link to="/palette/new" className={classes.navLink}>
              Add New Palette &rarr;
            </Link>
          </nav>

          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette
                {...palette}
                key={palette.id}
                id={palette.id}
                handleClick={() => this.goToPalette(palette.id)}
                handleDelete={deletePalette}
              />
            ))}
          </div>
          {/* /.palettes */}
        </div>
        {/* /.container */}
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
