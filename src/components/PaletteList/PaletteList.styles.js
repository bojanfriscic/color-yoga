const styles = {
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'cornflowerblue'
  },

  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '50%'
  },

  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: '#fff'
  },

  palettes: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.5rem',
    width: '100%'
  }
};

export { styles };