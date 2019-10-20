import chroma from 'chroma-js';

const styles = {
  colorBox: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    cursor: 'pointer',

    '&:hover button': {
      opacity: 1
    }
  },

  boxContent: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: '.625rem',
    color: '#000',
    fontSize: '.75rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },

  copyText: {
    color: props => chroma(props.background).luminance() >= 0.7 ? '#000' : '#fff'
  },

  colorName: {
    color: props => chroma(props.background).luminance() <= 0.08 ? '#fff' : '#000'
  },

  seeMore: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    backgroundColor: 'rgba(255,255,255,.3)',
    border: 'none',
    color: props => chroma(props.background).luminance() >= 0.7 ? '#323232' : '#fff',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase'
  },

  copyButton: {
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
    height: '30px',
    background: 'rgba(255, 255, 255, .3)',
    opacity: 0,
    outline: 'none',
    border: 'none',
    color: props => chroma(props.background).luminance() >= 0.7 ? '#000' : '#fff',
    fontSize: '1rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: '30px',
    transition: 'opacity .3s ease-in-out',
    cursor: 'pointer'
  },

  copyOverlay:  {
    zIndex: 0,
    opacity: 0,
    transform: 'scale(.1)',
    width: '100%',
    height: '100%',
    transition: 'transform .6s ease-in-out'
  },

  showOverlay: {
    position: 'absolute',
    zIndex: 10,
    opacity: 1,
    transform: 'scale(50)'
  },

  copyMsg: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    transform: 'scale(.1)',
    opacity: 0,
    color: '#fff',
    fontSize: '4rem',
    transition: 'all .25s ease-in-out',

    '& h2': {
      width: '100%',
      backgroundColor: 'rgba(255,255,255,.2)',
      padding: '1rem',
      textShadow: '1px 2px #000',
      fontWeight: 400,
      textAlign: 'center',
      textTransform: 'uppercase'
    },

    '& p': {
      marginTop: '1.5rem',
      fontSize: '2rem'
    }
  },

  showMsg: {
    zIndex: 25,
    transform: 'scale(1)',
    opacity: 1,
    transitionDelay: '.3s'
  }
};

export { styles };