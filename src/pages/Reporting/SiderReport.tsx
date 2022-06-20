import { FileMarkdownOutlined } from '@ant-design/icons/lib/icons';
import HeartOutlined from '@ant-design/icons/lib/icons/HeartOutlined';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useLayoutContext } from '../../contexts/LayoutContext';
/**Creation of the collapsed sider and its items along with their options */
const siderData: { id: number; name: string; category: string }[] = [
  { id: 0, name: 'Report 1', category: 'Bourse' },
  { id: 1, name: 'Report 2', category: 'CRM' },
  { id: 2, name: 'Report 3', category: 'Direction Generale' }
];

const favourites: number[] = [2];
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SiderReportProps {}
type ReportCategoryType = {
  key: React.Key;
  label: string;
  icon?: React.ReactNode;
  children: childrenType[];
};
type childrenType = {
  key: React.Key;
  label: string;
};
const ChildrenList: childrenType[] = [
  {
    key: '1',
    label: 'Report1'
  },
  {
    key: '2',
    label: 'Report2'
  }
];

const RBOX_ELEMENTS: ReportCategoryType[] = [
  {
    key: '0',
    label: 'favorites',
    icon: <HeartOutlined />,
    children: ChildrenList
  },
  {
    key: '1',
    label: 'Category A',
    icon: <FileMarkdownOutlined />,
    children: ChildrenList
  }
];

const SiderReport: React.FC = () => {
  const { collapsed } = useLayoutContext();

  return (
    <Layout.Sider style={siderStyle} theme="light" trigger={null} collapsible collapsed={collapsed}>
      <Menu theme="light" mode="inline" selectable={false} items={RBOX_ELEMENTS} style={SiderItemStyle} />
    </Layout.Sider>
  );
};

export default SiderReport;
const siderStyle: React.CSSProperties = { height: '100vh' };
const SiderItemStyle: React.CSSProperties = { fontSize: '15px' };
