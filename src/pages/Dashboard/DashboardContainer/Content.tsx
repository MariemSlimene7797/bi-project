import { Card } from 'antd';
import React from 'react';
import { ComponentDto } from '../../../Services/ComponentService';
import AreaChartComponent from './DashboardComponents/AreaChartComponent';
import BarChartComponent from './DashboardComponents/BarChartComponent';
import PieChartComponent from './DashboardComponents/PieChartComponent';

const Content: React.FC<{ components?: ComponentDto[] }> = ({ components }) => {
  return (
    <>
      {components &&
        components.map((el, key) => (
          <div key={el.componentId}>
            <Card title={el.name} style={CardStyle}>
              {el.type === 0 && <PieChartComponent componentInfo={el} />}
              {el.type === 1 && <BarChartComponent componentInfo={el} />}
              {el.type === 2 && <AreaChartComponent componentInfo={el} />}
            </Card>
          </div>
        ))}
    </>
  );
};

export default Content;
const CardStyle: React.CSSProperties = { width: '100%', height: '100%', borderColor: 'blueviolet', margin: 10 };
