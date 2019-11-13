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
import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class NewPaletteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      currentColor: 'teal',
      newName: '',
      colors: [],
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      const { colors } = this.state;
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule('isColorUnique', value => {
      const { colors, currentColor } = this.state;
      return colors.every(({ color }) => color !== currentColor);
    });
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
    const { colors, currentColor, newName } = this.state;
    const newColor = {
      color: currentColor,
      name: newName,
    };

    this.setState({ colors: [...colors, newColor], newName: '' });
  }

  handleChange(e) {
    this.setState({ newName: e.target.value });
  }

  render() {
    const { open, currentColor, newName, colors } = this.state;
    const { classes } = this.props;

    console.log(this.state);

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

            <ValidatorForm onSubmit={this.addNewColor}>
              <TextValidator
                value={newName}
                onChange={this.handleChange}
                validators={['required', 'isColorNameUnique', 'isColorUnique']}
                errorMessages={[
                  'This field is required',
                  'Color name must be unique',
                  'Color must be unique',
                ]}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ backgroundColor: currentColor }}
              >
                Add Color
              </Button>
            </ValidatorForm>
          </Drawer>
          <div className={classes.drawerHeader} />
          <div className={classes.boxContainer}>
            {colors.map(color => (
              <DraggableColorBox
                key={color.name}
                color={color.color}
                name={color.name}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(NewPaletteForm);
