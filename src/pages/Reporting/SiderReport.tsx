import { Button, Card, Layout, Menu } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
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
import { getAllCategories } from '../../Services/CategoryService';

import { getAllReports } from '../../Services/ReportingService';
import { Console } from 'console';

export type CategoryDto = {
  categoryId: string;
  name: string;
  description: string;
};
export type reportType = {
  reportId: string;
  categoryId: string;
  name: string;
  description: string;
  parameters: null;
  insertDateTime: string;
  updateDateTime: string;
};

export interface NoOne {
  categoryId: string;
  name: string;
  description: string;
  reportlist: reportType[];
}

// export const ReportListByCat = [
//   { name: 'Cat1', reportlist: [{ name: 'Report11' }, { name: 'Report12' }] },
//   { name: 'Cat2', reportlist: [{ name: 'Report21' }, { name: 'Report22' }] },
//   { name: 'Cat3', reportlist: [{ name: 'Report31' }, { name: 'Report32' }] }
// ];

/**creation of the sider */
/**Creation of the collapsed sider and its items along with their options */
/**creation of the record */
//const [reports, setReports] = useState<reportType[]>();

const SiderReport: React.FC = () => {
  /**the type of list originally transferred to the interface */

  //const FavList: siderDataType[] = [];
  //

  /**the FC that inserted the items of the Report Sider */

  /**the collapsed button */
  const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    reports ? (
      arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);

        return groups;
      }, {} as Record<K, T[]>)
    ) : (
      <div>erreur</div>
    );

  //const { categoryList } = useCategoryReportcontexts();
  const { collapsed } = useLayoutContext();
  const { SubMenu } = Menu;
  const [reports, setReports] = useState<reportType[]>();
  const [categoryList, setCategoryList] = useState<CategoryDto[]>();
  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategoryList(res);
        console.log('categories', res);

        console.log(groupBy(res, (i) => i.categoryId));
      })
      .catch((err) => console.log('cant get category data', err));
  }, []);
  //const results = groupBy(reports as reportType[], (i) => i.categoryId);

  /**list of the categories */
  //const groupReport = groupBy(reports, (i) => i.categoryId);

  //const categories = Object.keys(groupReport);

  //categories.unshift('Favorites');
  // console.log(categoryList);
  /* const showModal = () => {
    setIsModalVisible(true);
  };
  // const [isModalVisible, setIsModalVisible] = useState(false);
  /**creation of the menu Items  */
  /*  const { categoryList } = React.useContext(CategoryReportcontexts); const { categoryList } = React.useContext(CategoryReportcontexts); const { categoryList } = React.useContext(CategoryReportcontexts); const { categoryList } = React.useContext(CategoryReportcontexts);
  
 
    /**inserting the list of reports of each category in the sider */

  //console.log('reports', reports);
  /* return {
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
  /*const ReportListByCat: NoOne[] = [
    {
      categoryName: 'Cat1',
      reportlist: [{ name: 'Report11' }, { name: 'Report12' }]
    },
    {
      categoryName: 'Cat2',
      reportlist: [{ name: 'Report21' }, { name: 'Report22' }]
    },
    {
      categoryName: 'Cat3',
      reportlist: [{ name: 'Report31' }, { name: 'Report32' }]
    }
  ];*/
  //const reports: reportType[] = reports as reportType[];
  // const results = groupBy(reports as reportType[], (i) => i.categoryId);

  /*const generateMenu = (listCat: reportType[]) => {
    listCat?(
    return listCat.map((element) => {
      if (element.reportlist ) {
        return (
          <Menu>
            <SubMenu key={element.categoryId} title={element.categoryId}>
              {generateMenu(element.reportlist)}
            </SubMenu>
          </Menu>
        );
      } else {
        return <Menu.Item key={element.name}>{element.name}</Menu.Item>;
      }
    })):(<div>erreur</div>);

  };*/

  return (
    <>
      <Layout.Sider style={siderStyle} theme="light" trigger={null} collapsible collapsed={collapsed}>
        <>
          <Menu theme="light" mode="inline" selectable={true} style={SiderItemStyle}>
            <FormReport />
          </Menu>
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
/* <Menu theme="light" mode="inline" selectable={true} style={SiderItemStyle}>
            {categoryList.map((el, key) => (
              <Menu.Item key={el.categoryKey}>{el.categoryname}</Menu.Item>
            ))}
          </Menu>

          <FormReport />
            <Menu theme="light" mode="inline" selectable={true} style={SiderItemStyle}>
            {categoryList ? (
              categoryList.map((el, key) => <Menu.Item key={key}>{el.name}</Menu.Item>)
            ) : (
              <div> List of category is here...</div>
            )}
          </Menu>*/
