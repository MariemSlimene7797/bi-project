import { Affix, Button } from 'antd';
import React, { useState } from 'react';
import DashboardContainer from '.';

const Scroll = () => {
  const [container, setContainer] = useState(null);
  return (
    <div className="scrollable-container">
      <div className="background">
        <Affix target={() => window}>
          <DashboardContainer />
        </Affix>
      </div>
    </div>
  );
};

export default Scroll;
