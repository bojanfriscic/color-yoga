import sizes from '../../sizes';

const styles = {
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    height: '100%',
    marginTop: '64px',

    [sizes.down('lg')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)',
    },

    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridTemplateRows: 'repeat(20, 1fr)',
    },
  },
};

export { styles };
