import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
/**source code extracted from recharts that realises the Pie chart  */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
type DATA = {
  name: string;
  value: number;
};
const data: DATA[] = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DashboardContainerProps {}

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

const ItemDashboard: React.FC<DashboardContainerProps> = () => {
  return (
    <PieChart height={200} width={400} style={PieStyle}>
      <Pie data={data} labelLine={false} label={renderCustomizedLabel} outerRadius={100} dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
export default ItemDashboard;
const PieStyle: React.CSSProperties = { display: 'flex', height: '400', width: '400' };
