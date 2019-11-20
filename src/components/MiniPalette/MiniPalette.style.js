const styles = {
  root: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: '.5rem',
    border: '1px solid #000',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: '1',
    },
  },

  colors: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    height: '150px',
    backgroundColor: '#dae1e4',
    overflow: 'hidden',
    borderRadius: '5px',
  },

  miniColor: {
    width: '100%',
    height: '100%',
  },

  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    margin: '0',
    paddingTop: '.5rem',
    color: '#000',
    fontSize: '1rem',
  },

  emoji: {
    marginLeft: '.5rem',
    fontSize: '1.5rem',
  },

  delete: {},

  deleteIcon: {
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '2',
    width: '3rem',
    height: '3rem',
    backgroundColor: '#eb3d30',
    opacity: '0',
    padding: '.625rem',
    color: '#fff',
    transition: 'opacity .3s ease-in-out',
  },
};

export { styles };
