const styles = {
  palette: {
    height: '100vh',
    overflow: 'hidden',
  },

  singlePaletteColors: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    height: '90%',
  },

  goBack: {
    position: 'relative',
    backgroundColor: '#000',
  },

  goBackButton: {
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
    height: '30px',
    background: 'rgba(255, 255, 255, .3)',
    outline: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    lineHeight: '30px',
    transition: 'opacity .3s ease-in-out',
    cursor: 'pointer',
  },
};

export { styles };
