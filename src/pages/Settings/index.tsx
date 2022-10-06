import { Layout, Menu } from 'antd';
//import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { useLayoutContext } from '../../contexts/LayoutContext';
import Sider from '../Dashboard/Sider';
import ProcedureSettings from './ProcedureSetting';
import ReportSettings from './ReportSetting';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SettingsProps {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const Settings: React.FC<SettingsProps> = () => {
  return (
    <>
      <ProcedureSettings />;
      <ReportSettings />
    </>
  );
};

export default Settings;
const siderStyle: React.CSSProperties = { height: '100vh' };
