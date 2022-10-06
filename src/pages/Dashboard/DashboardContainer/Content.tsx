import { Card } from 'antd';
import React from 'react';
import { pieComponentType } from '../Sider/PieModal';
import PieChartComponent from './DashboardComponents/PieChartComponent';

const Content: React.FC = () => {
  const data: Required<pieComponentType>[] = [
    {
      name: 'GetAccounts',
      type: 'pie',
      storedProcedure: { id: 'b6061601-a5a0-4d40-a3bf-4aabsdfsdf', name: 'GetAccounts', paramIdList: ['1', '2', '3'] }
    },
    {
      name: 'GetCustomers',
      type: 'pie',
      storedProcedure: { id: 'b6061601-a5a0-4d40-a3bf-4aabsdfsdf', name: 'GetCustomers', paramIdList: ['1', '2', '3'] }
    }
  ];
  return (
    <>
      {data.map((el, key) => (
        <Card key={key} title={el.name}>
          <PieChartComponent componentInfo={el} />
        </Card>
      ))}
    </>
  );
};

export default Content;
