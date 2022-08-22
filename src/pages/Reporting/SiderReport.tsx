import { Button, Card, Layout, Menu } from 'antd';
import React, { useContext, useState } from 'react';
import { useLayoutContext } from '../../contexts/LayoutContext';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
//import { StarFilled, StarOutlined } from '@ant-design/icons';
import FormReport from './FormReport';
import MenuItem from 'antd/lib/menu/MenuItem';
import RequeteRaport from './RequeteRaport';
import { FetchState } from '../../models/types/FetchState';
import { useGetPosts } from '../../Services/HttpCommunFile';
import ReportContext from '../../contexts/ReportContext';
import { CategoryElementType, CategoryReportcontexts, useCategoryReportcontexts } from '../../contexts/CategoryReport';

/**creation of the sider */
/**Creation of the collapsed sider and its items along with their options */
/**creation of the record */
/*const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);

/**the type of list originally transferred to the interface */

//const FavList: siderDataType[] = [];
//

/**the FC that inserted the items of the Report Sider */
const SiderReport: React.FC = () => {
  /**the collapsed button */
  const { categoryList } = useCategoryReportcontexts();
  const { collapsed } = useLayoutContext();
  /**list of the categories */
  /*const results = groupBy(siderData, (i) => i.category);

  const categories = Object.keys(results);

  categories.unshift('Favorites');
  console.log(categoryList);
  const showModal = () => {
    setIsModalVisible(true);
  };
 // const [isModalVisible, setIsModalVisible] = useState(false);
  /**creation of the menu Items  */
  /*  const { categoryList } = React.useContext(CategoryReportcontexts); const { categoryList } = React.useContext(CategoryReportcontexts); const { categoryList } = React.useContext(CategoryReportcontexts); const { categoryList } = React.useContext(CategoryReportcontexts);
  
 
    /**inserting the list of reports of each category in the sider */

  /*const reports = siderData.filter((item) => item.category === category);
    console.log('reports', reports);
    return {
      key: category,
      label: category,
      icon: <></>,
      children: reports.map((report) => {
        if (category === 'Favorites') {
          return { key: report.id, label: report.name, icon: <StarFilled /> };
        } else {
          return { key: report.id, label: report.name, icon: <StarOutlined /> };
        }
      })
    };
    
  });*/

  return (
    <>
      <Layout.Sider style={siderStyle} theme="light" trigger={null} collapsible collapsed={collapsed}>
        <>
          <Menu theme="light" mode="inline" selectable={true} style={SiderItemStyle}>
            {categoryList.map((el, key) => (
              <Menu.Item key={el.categoryKey}>{el.categoryname}</Menu.Item>
            ))}
          </Menu>

          <FormReport />
        </>
      </Layout.Sider>
    </>
  );
};

export default SiderReport;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = {
  fontSize: '14px',
  font: 'BlinkMacSystemFont',
  color: 'black'
};
