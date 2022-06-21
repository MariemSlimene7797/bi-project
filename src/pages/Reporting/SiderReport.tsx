import { Layout, Menu } from 'antd';
import React from 'react';
import { useLayoutContext } from '../../contexts/LayoutContext';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useThemeContext } from '../../contexts/ThemeContext';
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
/**the FC that inserted the items of the Report Sider */
const SiderReport: React.FC = () => {
  /**the collapsed button */
  const { collapsed } = useLayoutContext();
  /**list of the categories */
  const results = groupBy(siderData, (i) => i.category);
  const categories = Object.keys(results);
  /**creation of the menu Items  */
  const menuItems: ItemType[] = categories.map((category) => {
    /**inserting the list of reports of each category in the sider */
    const reports = siderData.filter((item) => item.category === category);
    return {
      key: category,
      label: category,
      children: reports.map((report) => {
        return { key: report.id, label: report.name };
      })
    };
  });
  return (
    <Layout.Sider style={siderStyle} theme="light" trigger={null} collapsible collapsed={collapsed}>
      {console.log('items', menuItems)}
      <Menu theme="light" mode="inline" items={menuItems} style={SiderItemStyle} />
    </Layout.Sider>
  );
};

export default SiderReport;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = { fontSize: '14px', font: 'BlinkMacSystemFont' };
