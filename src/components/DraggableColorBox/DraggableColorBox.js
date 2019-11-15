import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import { styles } from './DraggableColorBox.styles';

function DraggableColorBox(props) {
  const { color, name, classes } = props;

  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.delete} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
