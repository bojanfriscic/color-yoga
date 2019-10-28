import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './DraggableColorBox.styles';

function DraggableColorBox(props) {
  const { color, classes } = props;

  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      {props.color}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
