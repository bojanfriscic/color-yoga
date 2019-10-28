import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './NewPaletteForm.styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';

class NewPaletteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      currentColor: 'teal',
      colors: ['purple', '#666'],
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  addNewColor() {
    const { colors, currentColor } = this.state;
    this.setState({ colors: [...colors, currentColor] });
  }

  render() {
    const { open, currentColor, colors } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <main className={classes.content}>
          <Drawer variant="persistent" anchor="left" open={open}>
            <div>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />

            <Typography variant="h4">Design your Palette</Typography>

            <div>
              <Button variant="contained" color="secondary">
                Clear Palette
              </Button>
              <Button variant="contained" color="primary">
                Random Color
              </Button>
            </div>

            <ChromePicker
              color={currentColor}
              onChangeComplete={this.updateCurrentColor}
            />

            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: currentColor }}
              onClick={this.addNewColor}
            >
              Add Color
            </Button>
          </Drawer>
          <div className={classes.drawerHeader} />
          <div className={classes.boxContainer}>
            {colors.map(color => (
              <DraggableColorBox color={color} />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(NewPaletteForm);
