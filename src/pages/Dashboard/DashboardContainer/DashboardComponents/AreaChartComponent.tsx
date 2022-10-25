import React, { PureComponent, useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ComponentDto } from '../../../../Services/ComponentService';
import { getData } from '../../../../Services/DataService';
export type DataType = {
  name: string;
  value: number;
};
/**datatype.name is the name of the parameter inside the procedure and the component */

interface AreaChartComponentProps {
  componentInfo: ComponentDto;
  //componentInfo: ComponentDto;
}

/*const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];*/
// eslint-disable-next-line @typescript-eslint/no-empty-interface
//interface DashboardContainerProps {}

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
