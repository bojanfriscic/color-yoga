const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },

  hide: {
    display: 'none',
  },

  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    transition: 'all .3s ease-in-out',
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: 'all .3s ease-in-out',
  },

  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },

  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none',
    },
  },

  button: {
    margin: '0 0.5rem',
  },
});

export { styles };
