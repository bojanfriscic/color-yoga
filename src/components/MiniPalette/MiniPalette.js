import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { styles } from './MiniPalette.style';

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  
  return (
    <div className={classes.root}>
      <div className={classes.colors}>

      </div>{/* /.colors */}
      <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);
/*
<Link to={`/palette/${palette.id}`}>
  {palette.paletteName}
</Link>*/