import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';
import PaletteList from '../PaletteList/PaletteList';
import Palette from '../Palette/Palette';
import SingleColorPalette from '../SingleColorPalette/SingleColorPalette';
import { generatePalette } from '../../colorHelpers';
import seedColors from '../../seedColors';

class App extends React.Component {
  constructor(props) {
    super(props);

    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = { palettes: savedPalettes || seedColors };

    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    const { palettes } = this.state;
    return palettes.find(palette => palette.id === id);
  }

  savePalette(newPalette) {
    const { palettes } = this.state;
    this.setState(
      { palettes: [...palettes, newPalette] },
      this.syncLocalStorage
    );
  }

  // Save palettes to localStorage
  syncLocalStorage() {
    const { palettes } = this.state;
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }

  render() {
    const { palettes } = this.state;

    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
