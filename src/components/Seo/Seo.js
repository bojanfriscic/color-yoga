import React from 'react';
import Helmet from 'react-helmet';
import { SITENAME, DEFAULT_TITLE } from '../../constants';

function Seo({ title }) {
  return (
    <Helmet>
      <title>{`${SITENAME} | ${title ? title : DEFAULT_TITLE}`}</title>
    </Helmet>
  );
}

export default Seo;
