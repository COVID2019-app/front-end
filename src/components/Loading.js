import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = props => {
  return (
    <div>
      <Spinner color="secondary" />
    </div>
  );
};

export default Loading;
