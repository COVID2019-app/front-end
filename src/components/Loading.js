import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = props => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <Spinner style={{ width: '3rem', height: '3rem'}} color="secondary" />
    </div>
  );
};

export default Loading;
