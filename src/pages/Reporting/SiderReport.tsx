import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLayoutContext } from '../../contexts/LayoutContext';
import FormCategory from './FormCategory';
import MenuItem from 'antd/lib/menu/MenuItem';
import { CategoryDto, getAllCategories } from '../../Services/CategoryService';
import { ReportDto, getAllReports } from '../../Services/ReportingService';

import { useReportingModalContext } from '../../contexts/ReportingModalContext';

const SiderReport: React.FC = () => {
  const { collapsed } = useLayoutContext();
  const { SubMenu } = Menu;
  const [reports, setReports] = useState<ReportDto[]>();

  const [categoryList, setCategoryList] = useState<CategoryDto[]>();

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
    <>
      <Layout.Sider style={siderStyle} theme="light" trigger={null} collapsible collapsed={collapsed}>
        <>
          <Menu theme="light" mode="inline" selectable={false} style={SiderItemStyle}>
            {categoryList &&
              categoryList.map((el, key) => (
                <SubMenu key={el.categoryId} title={el.name}>
                  {reports &&
                    reports.map((element, key) => (
                      <div key={element.reportId}>
                        {element.categoryId === el.categoryId && (
                          <MenuItem onClick={() => handleOpen(element)}>{element.name}</MenuItem>
                        )}
                      </div>
                    ))}
                </SubMenu>
              ))}
          </Menu>
          <FormCategory />
        </>
      </Layout.Sider>
    </>
  );
};

export default SiderReport;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = {
  fontSize: '15px',
  font: 'BlinkMacSystemFont',
  color: 'black'
};
