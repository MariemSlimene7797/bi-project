import React, { createContext, useContext, useState } from 'react';
import { parametersDto } from '../../Services/ParameterService';
import { ReportDto } from '../../Services/ReportingService';

interface IReportingModalContext {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  SelectedItem: ReportDto;
  InsertedValue: parametersDto;
  // handleSelectionPie: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //handleSelectionBar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //handleSelectionArea: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpen: (item: ReportDto) => void;
  //clickedRep: string;
}

export const ReportingModalContext = createContext<IReportingModalContext>({} as IReportingModalContext);
const ReportingModalContextProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  //const [clickedRep, setClickedRep] = useState<string>();
  const [InsertedValue, setInsertedValue] = useState<parametersDto>({} as parametersDto);
  const [SelectedItem, setSelectedItem] = useState<ReportDto>({} as ReportDto);
  const handleOk = () => {
    setIsVisible(false);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleOpen = (item: ReportDto) => {
    setSelectedItem(item);
    setIsVisible(true);
  };

  return (
    <ReportingModalContext.Provider
      value={{
        handleOk,
        handleCancel,
        isVisible,
        SelectedItem,
        handleOpen,
        InsertedValue
      }}
    >
      {children}
    </ReportingModalContext.Provider>
  );
};

export const useReportingModalContext = (): IReportingModalContext => {
  const context = useContext(ReportingModalContext);
  if (context === undefined) {
    throw new Error('useReportingModalContext must be used within a ReportingModalContextProvider');
  }
  return context;
};
export default ReportingModalContextProvider;
