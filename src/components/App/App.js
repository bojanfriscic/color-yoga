import React from 'react';
import Palette from '../Palette/Palette';
import { generatePalette } from '../../colorHelpers';
import seedColors from '../../seedColors';

class App extends React.Component {
  render() {

    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
