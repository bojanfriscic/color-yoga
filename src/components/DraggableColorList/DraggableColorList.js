import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './DraggableColorList.styles';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';

const DraggableColorList = SortableContainer(
  ({ classes, colors, removeColor }) => {
    return (
      <div className={classes.root}>
        {colors.map((color, i) => (
          <DraggableColorBox
            index={i}
            key={color.name}
            color={color.color}
            name={color.name}
            handleClick={() => removeColor(color.name)}
          />
        ))}
      </div>
    );
  }
);

export default withStyles(styles)(DraggableColorList);
