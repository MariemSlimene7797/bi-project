import { Form, Input, Modal, Select, TreeSelect } from 'antd';
import React, { useEffect, useState } from 'react';
import { useModalContext } from '../../../contexts/ModalContext';
import { getAllProcedure, ProcedureDto } from '../../../Services/ProcedureService';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PieModalProps {
  isVisible?: boolean;
}
/**the modal related to pie chart will show once you click on its card
 * this component contains all the params related to the pie chart.
 * the ok button will show you the chart realised based on the params you provided
 * the provided params are inserted in handleSelectionPie
 */
export type pieComponentType = dashboardComponentType & { type: 'pie' };
type dashboardComponentType = {
  name: string;
  type: 'pie' | 'area' | 'bar';
  storedProcedure?: { id?: string; name?: string; paramIdList?: string[] };
};

const PieModal: React.FC<PieModalProps> = () => {
  const DEFAULT_PIE: pieComponentType = { name: '', type: 'pie' };
  const [pieComponent, setPieComponent] = useState<pieComponentType>(DEFAULT_PIE);
  const { isVisible, handelModalState } = useModalContext();
  const [StoredPList, setStoredPList] = useState<ProcedureDto[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSelectProc = async (spId: string) => {
    if (spId != pieComponent.storedProcedure?.id) {
      // Select the stored procedure
      setPieComponent({
        ...pieComponent,
        storedProcedure: {
          id: spId,
          name: StoredPList?.find((el) => el.storedProcedureId === spId)?.name,
          paramIdList: undefined
        }
      });
    }
  };

  const handleSelectParams = (params: string[]) => {
    setPieComponent({
      ...pieComponent,
      storedProcedure: {
        ...pieComponent.storedProcedure,
        paramIdList: StoredPList?.find((sp) => sp.storedProcedureId === pieComponent.storedProcedure?.id)
          ?.parameters.filter((param) => params.includes(param.parameterId))
          .map((el) => el.parameterId)
      }
    });
  };

  const handleOk = () => {
    handelModalState('close');
    console.log('data', pieComponent);
    setPieComponent(DEFAULT_PIE);
  };
  const handleCancel = () => {
    handelModalState('close');
    setPieComponent(DEFAULT_PIE);
  };

  useEffect(() => {
    setIsLoading(true);
    getAllProcedure()
      .then((res) => {
        setStoredPList(res);
        setIsLoading(false);
      })
      .catch((err) => console.log('cant get procedure data', err));
  }, []);
  return (
    <>
      <Modal title="Pie Form" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Form.Item label="Chart Name">
            <Input
              placeholder="Enter object name"
              type="text"
              className="title"
              value={pieComponent.name}
              onChange={(el) => setPieComponent({ ...pieComponent, name: el.target.value.toString() })}
            />
          </Form.Item>
          <Form.Item label="Stored Procedure Name" rules={[{ required: true, message: 'Proc Name Missing' }]}>
            <Select
              onSelect={handleSelectProc}
              placeholder="choose procedure"
              style={{ width: '150px' }}
              loading={isLoading}
              value={pieComponent.storedProcedure?.id}
            >
              {StoredPList &&
                StoredPList.map((el, key) => (
                  <Select.Option key={key} value={el.storedProcedureId}>
                    {el.name}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <TreeSelect
              showSearch
              style={{ width: '100%' }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="select parameter"
              allowClear
              multiple
              treeDefaultExpandAll
              onChange={handleSelectParams}
            >
              {pieComponent.storedProcedure?.id &&
                StoredPList?.find((el) => el.storedProcedureId === pieComponent.storedProcedure?.id)
                  ?.parameters.filter((el) => el.parameterSide === 1)
                  .map((el) => <TreeSelect.TreeNode title={el.name} value={el.parameterId} key={el.parameterId} />)}
            </TreeSelect>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PieModal;
