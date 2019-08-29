import React from 'react';
import { Link } from 'react-router-dom';

export function NoMatch({ location }) {
  return (
    <div>
      <h1>Error 404</h1>

      <p>
        The "{location.pathname}" couldn't be found.
        Return to the <Link to="/">home page</Link>.
      </p>
    </div>
  );
}
