import React from 'react';
import Palette from '../Palette/Palette';
import { generatePalette } from '../../colorHelpers';
import seedColors from '../../seedColors';

class App extends React.Component {
  render() {
    console.log(generatePalette(seedColors[4]));

    return (
      <div>
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
