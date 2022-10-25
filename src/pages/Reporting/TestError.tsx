import { Layout, Menu, message } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useLayoutContext } from '../../contexts/LayoutContext';
import FormCategory from './FormCategory';
import MenuItem from 'antd/lib/menu/MenuItem';
import { CategoryDto, getAllCategories } from '../../Services/CategoryService';
import { ReportDto, getAllReports } from '../../Services/ReportingService';

import { useReportingModalContext } from '../../contexts/ReportingModalContext';
import { MenuInfo } from 'rc-menu/lib/interface';
import { Categories } from 'devexpress-reporting/dx-webdocumentviewer';

const TestError: React.FC = () => {
  const { collapsed } = useLayoutContext();
  const { SubMenu } = Menu;
  const [reports, setReports] = useState<ReportDto[]>();

  const [categoryList, setCategoryList] = useState<CategoryDto[]>();
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const { handleOpen } = useReportingModalContext();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategoryList(res);
        console.log('categories', res);
      })
      .catch((err) => console.log('cant get category data', err));
    getAllReports()
      .then((rep) => {
        setReports(rep);
        console.log('reports', rep);
      })
      .catch((err) => console.log('cant get rep data', err));
  }, []);

  return (
    <Menu>
      <>
        {categoryList ? (
          categoryList.map((element, key) => (
            <div key={element.CategoryId}>
              {element.CategoryId === '60d70fb8-09df-4c20-89dd-b96d9a6203d1' ? (
                <MenuItem>{element.Name}</MenuItem>
              ) : (
                <div>error</div>
              )}
            </div>
          ))
        ) : (
          <div>abc</div>
        )}
      </>
    </Menu>
  );
};

export default TestError;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = {
  fontSize: '15px',
  font: 'BlinkMacSystemFont',
  color: 'black'
};
