import sizes from '../../sizes';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: 'cornflowerblue',
    paddingBottom: '1.5rem',
  },

  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '50%',

    [sizes.down('xl')]: {
      width: '80%',
    },

    [sizes.down('xs')]: {
      width: '70%',
    },
  },

  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '1.5rem 0',
    color: '#fff',
  },

  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },

  palettes: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1.5rem',
    width: '100%',

    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    [sizes.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },
};

export { styles };
