import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ComponentDto } from '../../../../Services/ComponentService';
import { getData } from '../../../../Services/DataService';
export type DataType = {
  name: string;
  value: number;
};
interface BarChartComponentProps {
  componentInfo: ComponentDto;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
//interface DashboardContainerProps {}
/**this represents the structure of the bar that will be used in Content */
const BarChartTool: React.FC<BarChartComponentProps> = ({ componentInfo }) => {
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
    <BarChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />

      <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
  );
};
export default BarChartTool;
