import { Form, Input } from 'antd';
import React, { useState } from 'react';
import { CategoryDto } from '../../Services/CategoryService';
import { ReportDto } from '../../Services/ReportingService';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ReporttestProps {}

const Reporttest: React.FC<ReporttestProps> = () => {
  const [insertedItem, setInsertedItem] = useState<CategoryDto>({} as CategoryDto);
  return (
    <>
      <form name={insertedItem.categoryId}>
        <Input placeholder="id" />
      </form>
    </>
  );
};

export default Reporttest;
