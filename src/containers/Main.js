import React from 'react';
import { withRouter } from 'react-router-dom';
import AllPolls from '../components/AllPolls';

const Main = () => {
    return(
      <div>
        <AllPolls />      
      </div>
    )
  }

export default withRouter(Main)