import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import { styles } from './PaletteList.styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import MiniPalette from '../MiniPalette/MiniPalette';
import Seo from '../Seo/Seo';
import { SITENAME } from '../../constants';

class PaletteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openDeleteDialog: false,
      idToDelete: '',
    };

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  }

  // Toggle delete dialog
  openDialog(id) {
    this.setState({ openDeleteDialog: true, idToDelete: id });
  }

  closeDialog() {
    this.setState({ openDeleteDialog: false, idToDelete: '' });
  }

  // Delete the palette
  handleDelete() {
    const { idToDelete } = this.state;
    const { deletePalette } = this.props;

    deletePalette(idToDelete);
    this.closeDialog();
  }

  // Open the selected palette
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { openDeleteDialog } = this.state;
    const { palettes, classes } = this.props;

    return (
      <>
        <Seo />
        <div className={classes.root}>
          <div className={classes.container}>
            <nav className={classes.nav}>
              <h1 className={classes.title}>{SITENAME}</h1>
              <Link to="/palette/new" className={classes.navLink}>
                Add New Palette &rarr;
              </Link>
            </nav>

            <TransitionGroup className={classes.palettes}>
              {palettes.map(palette => (
                <CSSTransition key={palette.id} classNames="fade" timeout={300}>
                  <MiniPalette
                    {...palette}
                    key={palette.id}
                    id={palette.id}
                    goToPalette={this.goToPalette}
                    openDialog={this.openDialog}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
          {/* /.container */}

          <Dialog open={openDeleteDialog} onClose={this.closeDialog}>
            <DialogTitle>Delete this Palette?</DialogTitle>
            <List>
              <ListItem button onClick={this.handleDelete}>
                <ListItemAvatar>
                  <Avatar
                    style={{ backgroundColor: blue[100], color: blue[400] }}
                  >
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Delete" />
              </ListItem>

              <ListItem button onClick={this.closeDialog}>
                <ListItemAvatar>
                  <Avatar
                    style={{ backgroundColor: red[100], color: red[400] }}
                  >
                    <CloseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Cancel" />
              </ListItem>
            </List>
          </Dialog>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(PaletteList);
