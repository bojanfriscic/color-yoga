import sizes from '../../sizes';

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#eceff1',
    marginRight: '1rem',
    padding: '.875rem',
    fontSize: '1.125rem',
    fontFamily: `'Roboto', sans-serif`,

    '& a': {
      color: '#000',
      textDecoration: 'none',
    },

    [sizes.down('xs')]: {
      display: 'none',
    },
  },

  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  slider: {
    display: 'inline-block',
    width: '21.25rem',
    margin: '.625rem',

    [sizes.down('md')]: {
      width: '10rem',
    },
  },

  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};

export { styles };
