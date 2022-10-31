import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import { ComponentDto } from '../../../../Services/ComponentService';
import { getData } from '../../../../Services/DataService';
import { pieComponentType } from '../../Sider/PieModal';
/**this represents the structure of the pie that will be used in Content */

export type DataType = {
  name: string;
  value: number;
};

interface PieChartComponentProps {
  componentInfo: ComponentDto;
  //componentInfo: ComponentDto;
}

const PieStyle: React.CSSProperties = { display: 'flex', height: '400', width: '400' };

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent: React.FC<PieChartComponentProps> = ({ componentInfo }) => {
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
    <PieChart height={200} width={400} style={PieStyle}>
      <Pie data={data} labelLine={false} label={renderCustomizedLabel} outerRadius={100} dataKey="value">
        {data && data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
