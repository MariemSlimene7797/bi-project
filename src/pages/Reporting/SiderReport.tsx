import { Button, Card, Layout, Menu } from 'antd';
import React, { useContext, useState } from 'react';
import { useLayoutContext } from '../../contexts/LayoutContext';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import FormReport from './FormReport';
import MenuItem from 'antd/lib/menu/MenuItem';
import RequeteRaport from './RequeteRaport';
import { FetchState } from '../../models/types/FetchState';
import { useGetPosts } from '../../Services/HttpCommunFile';
import ReportContext from '../../contexts/ReportContext';
import { CategoryReportcontexts, useCategoryReportcontexts } from '../../contexts/CategoryReport';

/**creation of the sider */
/**Creation of the collapsed sider and its items along with their options */
/**creation of the record */
const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);

/**the type of list originally transferred to the interface */
type siderDataType = {
  id: number;
  name: string;
  category: string;
};
/**example of the elements that are supposed to be transferred to the interface */
const siderData: siderDataType[] = [
  { id: 0, name: 'Report 1', category: 'Bourse' },
  { id: 1, name: 'Report 2', category: 'CRM' },
  { id: 2, name: 'Report 3', category: 'Direction Generale' },
  { id: 3, name: 'Report 4', category: 'CRM' }
];
const FavList: siderDataType[] = [];
//

/**the FC that inserted the items of the Report Sider */
const SiderReport: React.FC = () => {
  /**the collapsed button */
  const { categoryList } = useContext(CategoryReportcontexts);
  const { collapsed } = useLayoutContext();
  /**list of the categories */
  const results = groupBy(siderData, (i) => i.category);

  const categories = Object.keys(results);

  categories.unshift('Favorites');
  console.log(categories);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const { categoryList } = useCategoryReportcontexts();

  /**creation of the menu Items  */

  const menuItems: ItemType[] = categories.map((category) => {
    /**inserting the list of reports of each category in the sider */

    const reports = siderData.filter((item) => item.category === category);
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
  });

  return (
    <Layout.Sider style={siderStyle} theme="light" trigger={null}>
      <FormReport />
    </Layout.Sider>
  );
};

export default SiderReport;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = { fontSize: '14px', font: 'BlinkMacSystemFont' };
