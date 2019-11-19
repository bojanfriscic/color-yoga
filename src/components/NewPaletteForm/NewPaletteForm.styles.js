const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    flexShrink: 0,
    width: drawerWidth,
    height: '100vh',
  },

  drawerPaper: {
    display: 'flex',
    alignItems: 'center',
    width: drawerWidth,
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
    marginLeft: -drawerWidth,
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

  buttons: {
    width: '100%',
  },

  button: {
    width: '50%',
  },
});

export { styles };
