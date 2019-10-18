const styles = {
  root: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: '.5rem',
    border: '1px solid #000',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer'
    }
  },

  colors: {
    backgroundColor: '#ccc'
  },

  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    margin: '0',
    paddingTop: '.5rem',
    color: '#000',
    fontSize: '1rem'
  },

  emoji: {
    marginLeft: '.5rem',
    fontSize: '1.5rem'
  }
};

export { styles };