import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import { styles } from './ColorBox.styles';
import Seo from '../Seo/Seo';

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1500)
    );
  }

  render() {
    const { name, background, paletteId, id, showLink, classes } = this.props;
    const { copied } = this.state;

    return (
      <>
        <Seo title={name} />
        <CopyToClipboard text={background} onCopy={this.changeCopyState}>
          <div
            className={classes.colorBox}
            style={{ backgroundColor: background }}
          >
            <div
              className={`${classes.copyOverlay} ${
                copied ? classes.showOverlay : ''
              }`}
              style={{ background }}
            />

            <div
              className={`${classes.copyMsg} ${copied ? classes.showMsg : ''}`}
            >
              <h2>Copied!</h2>
              <p className={classes.copyText}>{background}</p>
            </div>

            <div>
              <div className={classes.boxContent}>
                <span className={classes.colorName}>{name}</span>
              </div>

              <button className={classes.copyButton}>Copy</button>
            </div>

            {showLink && (
              <Link
                to={`/palette/${paletteId}/${id}`}
                onClick={e => e.stopPropagation()}
              >
                <span className={classes.seeMore}>More</span>
              </Link>
            )}
          </div>
        </CopyToClipboard>
      </>
    );
  }
}

export default withStyles(styles)(ColorBox);
