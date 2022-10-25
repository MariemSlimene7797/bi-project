import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactGridLayout from 'react-grid-layout';
import { ComponentDto, getAllComponents } from '../../../../Services/ComponentService';
import Content from '../Content';
import AreaChartComponent from '../DashboardComponents/AreaChartComponent';
import BarChartComponent from '../DashboardComponents/BarChartComponent';
import PieChartComponent from '../DashboardComponents/PieChartComponent';

import './index.css';

const MockData: ComponentDto[] = [
  {
    componentId: '1f400169-4f3f-493e-804d-48599510b3c9',
    name: 'abc',
    storedPId: '3c26ecb9-f4b8-4755-b746-d11ac049844b',
    storedPName: 'GetCustomers',
    type: 0
  },
  {
    componentId: 'ec0d09c1-9537-4aa1-a29d-8400ba47ba9b',
    name: 'def',
    storedPId: '3c26ecb9-f4b8-4755-b746-d11ac049844b',
    storedPName: 'GetCustomers',
    type: 0
  }
];

const GridLayout: React.FC = () => {
  const [componentList, setComponentList] = useState<ComponentDto[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const generateLayout = (components?: ComponentDto[]): ReactGridLayout.Layout[] | undefined => {
    return (
      components &&
      components.map((el, key) => {
        const layH = [7.5, 14, 10];
        return { i: el.componentId, x: 0, y: 0, w: 5, h: layH[el.type] };
      })
    );
  };

  useEffect(() => {
    setIsLoading(true);
    getAllComponents()
      .then((res) => {
        console.log('abc');
        setComponentList(res);
        console.log('component', res);
        setIsLoading(false);
      })
      .catch((err) => console.log('cant get component data', err));
  }, []);

  return (
    <ReactGridLayout
      cols={12}
      rowHeight={30}
      width={1200}
      layout={generateLayout(componentList)}
      isResizable={false}
      isBounded={true}
    >
      {/* <Content components={MockData} /> */}
      {componentList &&
        componentList.map((el, key) => (
          <div key={el.componentId}>
            <Card title={el.name}>
              {el.type === 0 && <PieChartComponent componentInfo={el} />}
              {el.type === 1 && <BarChartComponent componentInfo={el} />}
              {el.type === 2 && <AreaChartComponent componentInfo={el} />}
            </Card>
          </div>
        ))}
    </ReactGridLayout>
  );
};

export default GridLayout;
