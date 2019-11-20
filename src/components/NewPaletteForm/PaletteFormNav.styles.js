import { DRAWER_WIDTH } from '../../constants';

const styles = theme => ({
  root: {
    display: 'flex',
  },

  hide: {
    display: 'none',
  },

  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    transition: 'all .3s ease-in-out',
  },

  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: 'all .3s ease-in-out',
  },

  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },

  navBtns: {
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none',
    },
  },

  button: {
    margin: '0 0.5rem',
  },
});

export { styles };
