import React, { useState } from 'react';
import Sider from './Sider';

const Dashboard: React.FC = () => {
  const [dashboardElements, setDashboardEelements] = useState<string[]>([]);
  return (
    <div style={{ display: 'flex' }}>
      <Sider onAdd={(el) => setDashboardEelements([...dashboardElements, el])} />
      <div>
        {dashboardElements.map((el, key) => (
          <span key={key}>{el}</span>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
