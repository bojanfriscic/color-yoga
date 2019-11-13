import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './DraggableColorBox.styles';

function DraggableColorBox(props) {
  const { color, name, classes } = props;

  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      {name}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
