import sizes from '../../sizes';

const styles = {
  palette: {
    height: '100vh',
    overflow: 'hidden',
  },

  paletteColors: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    height: '90%',

    [sizes.down('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)',
    },

    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(10, 1fr)',
    },

    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridTemplateRows: 'repeat(20, 1fr)',
    },
  },
};

export { styles };
