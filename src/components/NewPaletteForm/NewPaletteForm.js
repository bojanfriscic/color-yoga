import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './NewPaletteForm.styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from '../DraggableColorList/DraggableColorList';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';

class NewPaletteForm extends React.Component {
  static defaultProps = {
    maxColors: 20,
  };

  constructor(props) {
    super(props);

    this.state = {
      open: true,
      currentColor: 'teal',
      newColorName: '',
      colors: this.props.palettes[0].colors,
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
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

  handleSubmit(newPaletteName) {
    const { colors } = this.state;

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

  // Set new array indexes after drag & drop sorting
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  // Remove all colors from the palette
  clearColors() {
    this.setState({ colors: [] });
  }

  // Add random color to palette from existing palettes
  addRandomColor() {
    const { palettes } = this.props;
    const { colors } = this.state;

    const allColors = palettes.map(palette => palette.colors);
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];

    this.setState({ colors: [...colors, randomColor] });
  }

  render() {
    const { open, currentColor, newColorName, colors } = this.state;
    const { classes, maxColors, palettes } = this.props;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <PaletteFormNav
            open={open}
            classes={classes}
            palettes={palettes}
            handleSubmit={this.handleSubmit}
            handleDrawerOpen={this.handleDrawerOpen}
          />

          <Drawer variant="persistent" anchor="left" open={open}>
            <div>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />

            <Typography variant="h4">Design your Palette</Typography>

            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearColors}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={paletteIsFull}
                onClick={this.addRandomColor}
              >
                {paletteIsFull ? 'Palette Full' : 'Random Color'}
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
                disabled={paletteIsFull}
                style={{
                  backgroundColor: paletteIsFull ? '#666' : currentColor,
                }}
              >
                {paletteIsFull ? 'Palette Full' : 'Add Color'}
              </Button>
            </ValidatorForm>
          </Drawer>
          <div className={classes.drawerHeader} />
          <div className={classes.boxContainer}>
            <DraggableColorList
              colors={colors}
              removeColor={this.removeColor}
              axis="xy"
              onSortEnd={this.onSortEnd}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(NewPaletteForm);
