import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from '../Page/Page';
import NewPaletteForm from '../NewPaletteForm/NewPaletteForm';
import PaletteList from '../PaletteList/PaletteList';
import Palette from '../Palette/Palette';
import SingleColorPalette from '../SingleColorPalette/SingleColorPalette';
import { generatePalette } from '../../colorHelpers';
import seedColors from '../../seedColors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends React.Component {
  constructor(props) {
    super(props);

    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = { palettes: savedPalettes || seedColors };

    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    const { palettes } = this.state;
    return palettes.find(palette => palette.id === id);
  }

  // Save the palette to state & localStorage
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

  // Delete palette from state & localStorage
  deletePalette(id) {
    this.setState(
      st => ({
        palettes: st.palettes.filter(palette => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  }

  render() {
    const { palettes } = this.state;

    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={routeProps => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps => (
                    <Page>
                      <SingleColorPalette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                        colorId={routeProps.match.params.colorId}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
