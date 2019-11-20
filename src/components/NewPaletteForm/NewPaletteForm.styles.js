import { DRAWER_WIDTH } from '../../constants';

const styles = theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
    height: '100vh',
  },

  drawerPaper: {
    display: 'flex',
    alignItems: 'center',
    width: DRAWER_WIDTH,
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '0 .5rem',
    //...theme.mixins.toolbar,
  },

  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    marginLeft: -DRAWER_WIDTH,
    transition: 'all .3s ease-in-out',
  },

  contentShift: {
    marginLeft: 0,
    transition: 'all .3s ease-in-out',
  },

  boxContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    height: '100%',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '100%',
  },

  buttons: {
    width: '100%',
  },

  button: {
    width: '50%',
  },
});

export { styles };
