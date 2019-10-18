import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PaletteList from '../PaletteList/PaletteList';
import Palette from '../Palette/Palette';
import { generatePalette } from '../../colorHelpers';
import seedColors from '../../seedColors';

//<div>
  //<Palette palette={generatePalette(seedColors[4])} />
//</div>

class App extends React.Component {
  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
        <Route 
          exact 
          path="/palette/:id" 
          render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} 
        />
      </Switch>
    );
  }
}

export default App;
