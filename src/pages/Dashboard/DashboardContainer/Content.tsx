import { Card } from 'antd';
import { type } from 'jquery';
import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../../Services/CategoryService';
import { ComponentDto, getAllComponents, getComponentsbyID } from '../../../Services/ComponentService';
import { getData } from '../../../Services/DataService';
import { pieComponentType } from '../Sider/PieModal';
import PieChartComponent, { DataType } from './DashboardComponents/PieChartComponent';

const Content: React.FC = () => {
  const DATA: ComponentDto[] = [
    {
      componentId: '123',
      name: 'GetAccounts',
      type: 0,
      storedPId: 'b6061601-a5a0-4d40-a3bf-4aabsdfsdf',
      storedPName: 'GetAccounts',
      compoParams: ['1', '2', '3']
    }
  ];

  //const [componentList, setComponentList] = useState<ComponentDto[]>();
  //const [isLoading, setIsLoading] = useState<boolean>(true);

  /**list of components
    we will represent the pie chart of each component 
    why list?? we need to represent each element once created */

  /*useEffect(() => {
    setIsLoading(true);
    getAllComponents()
      .then((res) => {
        console.log('abc');
        setComponentList(res);
        console.log('component', res);
        setIsLoading(false);
      })
      .catch((err) => console.log('cant get component data', err));
  }, []);*/

  return (
    <>
      <div>abc</div>
      {DATA.map((el, key) => (
        <Card key={key} title={el.name} style={CardStyle}>
          <PieChartComponent componentInfo={el} />
        </Card>
      ))}
    </>
  );
};

export default Content;
const CardStyle: React.CSSProperties = { width: '100%', height: '100%', borderColor: 'blueviolet', margin: 10 };
/* {componentList &&
        componentList.map((el, key) => (
          <Card key={key} title={el.name} style={CardStyle}>
            <PieChartComponent componentInfo={el} />
          </Card>
        
        ))}*/
