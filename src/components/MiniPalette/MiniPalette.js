import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './MiniPalette.style';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends React.PureComponent {
  constructor(props) {
    super(props);

    this.deletePalette = this.deletePalette.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Delete clicked palette
  deletePalette(e) {
    e.stopPropagation();

    const { id, openDialog } = this.props;
    openDialog(id);
  }

  // Open the clicked palette
  handleClick() {
    const { goToPalette, id } = this.props;
    goToPalette(id);
  }

  render() {
    const { classes, paletteName, emoji, colors } = this.props;

    const miniBoxes = colors.map(color => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      />
    ));

    return (
      <div className={classes.root} onClick={this.handleClick}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={this.deletePalette}
          />
        </div>
        <div className={classes.colors}>{miniBoxes}</div>
        {/* /.colors */}
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
