import React from 'react';
import { join } from 'ramda';

export default function App({ title }) {
  return (
    <div>
      {title || 'no title'}
      <br />
      {join(', ', ['React', 'Webpack', 'setup'])}
    </div>
  );
}
