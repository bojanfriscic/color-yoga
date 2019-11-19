import React from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class ColorPickerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: 'teal',
      newColorName: '',
    };

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Check if color name (e.g. Corn flower blue) is unique for the palette
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      const { colors } = this.props;
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    // Check if color hex (e.g. #666) is unique for the palette
    ValidatorForm.addValidationRule('isColorUnique', value => {
      const { currentColor } = this.state;
      const { colors } = this.props;

      return colors.every(({ color }) => color !== currentColor);
    });
  }

  // Sets the currentColor to the hex from the color picker
  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
  }

  // Handles inputs & forms
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Handles color form submit
  handleSubmit() {
    const { currentColor, newColorName } = this.state;

    const newColor = {
      color: currentColor,
      name: newColorName,
    };

    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  }

  render() {
    const { currentColor, newColorName } = this.state;
    const { paletteIsFull } = this.props;

    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />

        <ValidatorForm onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
}

export default ColorPickerForm;
