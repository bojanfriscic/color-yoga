const styles = {
  root: {
    position: 'relative',
    height: '100%',
    cursor: 'pointer',

    '&:hover svg': {
      transform: 'scale(1.5)',
      color: '#fff',
    },
  },

  boxContent: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: '.625rem',
    color: 'rgba(0,0,0,.5)',
    fontSize: '.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },

  delete: {
    transition: 'all .3s ease-in-out',
  },
};

export { styles };
