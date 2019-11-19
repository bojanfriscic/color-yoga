import React from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteMetaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 'form',
      newPaletteName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
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

  // Show emoji picker after the form name is entered
  showEmojiPicker() {
    this.setState({ stage: 'emoji' });
  }

  // Save palette -> colors, name, emoji
  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.props.handleSubmit(newPalette);
  }

  // Handles inputs & forms
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { stage, newPaletteName } = this.state;
    const { hideForm } = this.props;

    return (
      <>
        <Dialog open={stage === 'emoji'} onClose={hideForm}>
          <DialogTitle id="form-dialog-title">
            Choose a Palette Emoji
          </DialogTitle>
          <Picker title="Pick a Palette Emoji" onSelect={this.savePalette} />
        </Dialog>

        <Dialog
          open={stage === 'form'}
          onClose={hideForm}
          arialebelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Choose a Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your new palette. Make sure it's unique!
              </DialogContentText>

              <TextValidator
                label="Palette Name"
                value={newPaletteName}
                name="newPaletteName"
                fullWidth
                margin="normal"
                placeholder="Palette name"
                onChange={this.handleChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={[
                  'Enter Palette Name',
                  'Palette name must be unique',
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={this.handleClose} color="primary">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </>
    );
  }
}

export default PaletteMetaForm;
