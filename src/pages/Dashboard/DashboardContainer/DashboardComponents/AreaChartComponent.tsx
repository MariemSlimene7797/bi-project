import React, { PureComponent, useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ComponentDto } from '../../../../Services/ComponentService';
import { getData } from '../../../../Services/DataService';
export type DataType = {
  name: string;
  value: number;
};

interface AreaChartComponentProps {
  componentInfo: ComponentDto;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
//interface DashboardContainerProps {}
/**this represents the structure of the pie that will be used in Content */
const AreaChartTool: React.FC<AreaChartComponentProps> = ({ componentInfo }) => {
  const [data, setData] = useState<DataType[]>();

  useEffect(() => {
    getData<DataType[]>({
      name: componentInfo.storedPName as string,
      paramList: [
        {
          name: 'LanguageKey',
          value: 'string'
        }
      ]
    }).then((res) => {
      setData(res);
      console.log(res);
    });
  }, []);
  return (
    <AreaChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
};
export default AreaChartTool;
