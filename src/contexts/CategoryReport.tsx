import React, { createContext, useContext, useState } from 'react';
export type CategoryElementType = {
  categoryname: string;
  categoryKey: React.Key | null | undefined;
};
interface ICategoryReportcontexts {
  categoryList: CategoryElementType[];
  AddcategorytoList: (el: CategoryElementType) => void;
}

export const CategoryReportcontexts = createContext<ICategoryReportcontexts>({} as ICategoryReportcontexts);
const CategoryReportcontextsProvider: React.FC = ({ children }) => {
  const [categoryList, setCategoryList] = useState<CategoryElementType[]>([]);
  const AddcategorytoList = (el: CategoryElementType) => {
    /*if (categoryList.length == 0) {
      el.CategoryName = 'favorites';
      setCategoryList([...categoryList, el]);
    } else {*/
    setCategoryList([...categoryList, el]);
    console.log(categoryList);
  };

  return (
    <CategoryReportcontexts.Provider value={{ categoryList, AddcategorytoList }}>
      {children}
    </CategoryReportcontexts.Provider>
  );
};

export const useCategoryReportcontexts = (): ICategoryReportcontexts => {
  const context = useContext(CategoryReportcontexts);
  if (context === undefined) {
    throw new Error('usecontexts must be used within a contextsProvider');
  }
  return context;
};
export default CategoryReportcontextsProvider;
