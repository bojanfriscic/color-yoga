import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './MiniPalette.style';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniBoxes = colors.map(color => (
    <div 
      key={color.name}
      className={classes.miniColor} 
      style={{ backgroundColor: color.color }}
    />
  ));
  
  return (
    <div 
      className={classes.root}
      onClick={props.handleClick}
    >
      <div className={classes.colors}>
        {miniBoxes}
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