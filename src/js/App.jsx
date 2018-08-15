import React from 'react';
import { join } from 'ramda';
import PropTypes from 'prop-types';

export default function App({ title }) {
  return (
    <div>
      {title || 'no title'}
      <br />
      {join(', ', ['React', 'Webpack', 'setup'])}
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string
};
