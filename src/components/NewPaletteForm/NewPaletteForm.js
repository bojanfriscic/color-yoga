import React from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './NewPaletteForm.styles';
import classNames from 'classnames';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from '../DraggableColorList/DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import seedColors from '../../seedColors';
import Seo from '../Seo/Seo';

class NewPaletteForm extends React.Component {
  static defaultProps = {
    maxColors: 20,
  };

  constructor(props) {
    super(props);

    this.state = {
      open: true,
      colors: seedColors[0].colors,
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  // Handles opening & closing the color picker drawer
  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  // Adds all color data to the state in the colors array
  addNewColor(newColor) {
    const { colors } = this.state;

    this.setState({ colors: [...colors, newColor], newColorName: '' });
  }

  // Handles inputs & forms
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(newPalette) {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = this.state.colors;

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

    const allColors = palettes.map(palette => palette.colors).flat();
    const filteredColors = allColors.filter(color => !colors.includes(color));
    const randomColor =
      filteredColors[Math.floor(Math.random() * filteredColors.length)];

    this.setState({ colors: [...colors, randomColor] });
  }

  render() {
    const { open, colors } = this.state;
    const { classes, maxColors, palettes } = this.props;
    const paletteIsFull = colors.length >= maxColors;

    return (
      <>
        <Seo title={'Design a new Palette'} />
        <div className={classes.root}>
          <PaletteFormNav
            open={open}
            palettes={palettes}
            handleSubmit={this.handleSubmit}
            handleDrawerOpen={this.handleDrawerOpen}
          />

          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <div className={classes.container}>
              <Typography variant="h4" gutterBottom>
                Design your Palette
              </Typography>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.clearColors}
                  className={classes.button}
                >
                  Clear Palette
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={paletteIsFull}
                  onClick={this.addRandomColor}
                  className={classes.button}
                >
                  {paletteIsFull ? 'Palette Full' : 'Random Color'}
                </Button>
              </div>
              <ColorPickerForm
                colors={colors}
                paletteIsFull={paletteIsFull}
                addNewColor={this.addNewColor}
              />
            </div>
          </Drawer>

          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <DraggableColorList
              colors={colors}
              removeColor={this.removeColor}
              axis="xy"
              onSortEnd={this.onSortEnd}
              distance={20}
            />
          </main>
        </div>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
