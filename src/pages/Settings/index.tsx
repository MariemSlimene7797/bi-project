import { Card, Layout, Menu } from 'antd';
import Transfer, { TransferDirection } from 'antd/lib/transfer';
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
      <Card style={CardStyle} title="Stored Procedure Structure">
        <ProcedureSettings />
      </Card>
      <Card style={CardStyle} title="Report Structure">
        <ReportSettings />
      </Card>
    </>
  );
};

export default Settings;
const CardStyle: React.CSSProperties = {
  height: '50cm',
  alignContent: 'center',
  marginLeft: '3cm',
  marginRight: '3cm',
  marginBottom: '1cm'
};
