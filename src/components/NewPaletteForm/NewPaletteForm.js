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
      newColorName: '',
      colors: [],
      newPaletteName: '',
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Check if color name (e.g. Corn flower blue) is unique for the palette
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      const { colors } = this.state;
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    // Check if color hex (e.g. #666) is unique for the palette
    ValidatorForm.addValidationRule('isColorUnique', value => {
      const { colors, currentColor } = this.state;
      return colors.every(({ color }) => color !== currentColor);
    });

    // Check if the palette name (e.g. My Colors) is unique
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
      const { palettes } = this.props;
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  // Handles opening & closing the color picker drawer
  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  // Sets the currentColor to the hex from the color picker
  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  // Adds all color data to the state in the colors array
  addNewColor() {
    const { colors, currentColor, newColorName } = this.state;
    const newColor = {
      color: currentColor,
      name: newColorName,
    };

    this.setState({ colors: [...colors, newColor], newColorName: '' });
  }

  // Handles inputs & forms
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const { colors, newPaletteName } = this.state;

    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors,
    };

    this.props.savePalette(newPalette);
    this.props.history.push('/');
  }

  // Removes color from the palette
  removeColor(colorName) {
    const { colors } = this.state;

    this.setState({
      colors: colors.filter(color => color.name !== colorName),
    });
  }

  render() {
    const {
      open,
      currentColor,
      newColorName,
      colors,
      newPaletteName,
    } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <main className={classes.content}>
          <CssBaseline />
          <AppBar position="fixed" color="default">
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                Drawer
              </Typography>

              <ValidatorForm onSubmit={this.handleSubmit}>
                <TextValidator
                  label="Palette Name"
                  value={newPaletteName}
                  name="newPaletteName"
                  onChange={this.handleChange}
                  validators={['required', 'isPaletteNameUnique']}
                  errorMessages={[
                    'Enter Palette Name',
                    'Palette name must be unique',
                  ]}
                />

                <Button variant="contained" color="primary" type="submit">
                  Save Palette
                </Button>
              </ValidatorForm>
            </Toolbar>
          </AppBar>

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
                value={newColorName}
                name="newColorName"
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
                handleClick={() => this.removeColor(color.name)}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(NewPaletteForm);
