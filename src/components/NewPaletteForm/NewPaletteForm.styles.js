const drawerWidth = 400;

const styles = {
  content: {
    flexGrow: 1,
    height: '100vh',
    padding: '1.5rem',
    marginLeft: -drawerWidth,
    transition: 'all 300ms ease-in-out',
  },

  contentShift: {
    marginLeft: 0,
    transition: 'all 300ms ease-in-out',
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 .5rem',
    justifyContent: 'flex-end',
  },

  boxContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    height: '100%',
  },
};

export { styles };
