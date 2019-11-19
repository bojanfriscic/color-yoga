import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteFormNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newPaletteName: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Check if the palette name (e.g. My Colors) is unique
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
      const { palettes } = this.props;
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  // Handles inputs & forms
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { newPaletteName } = this.state;
    const { classes, open } = this.props;

    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" color="default">
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Drawer
            </Typography>

            <ValidatorForm
              onSubmit={() => this.props.handleSubmit(newPaletteName)}
            >
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
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Go Back
                </Button>
              </Link>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default PaletteFormNav;
