import { Form, Input, message, Modal, Select, TreeSelect } from 'antd';
import React, { useEffect, useState } from 'react';
import { useModalContext } from '../../../contexts/ModalContext';
import { AddComponent, ComponentDto } from '../../../Services/ComponentService';
import { getAllProcedure, ProcedureDto } from '../../../Services/ProcedureService';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AreaModalProps {
  isVisible?: boolean;
}
/**the modal related to pie chart will show once you click on its card
 * this component contains all the params related to the pie chart.
 * the ok button will show you the chart realised based on the params you provided
 * the provided params are inserted in handleSelectionPie
 */
export type areaComponentType = dashboardComponentType & { type: 'area' };
type dashboardComponentType = {
  name: string;
  type: 'pie' | 'area' | 'bar';
  storedProcedure?: { id?: string; name?: string; paramIdList?: string[] };
};
/**this component will create the component in the database,will attribute to it the sored procedure and
 * will identify it as an area */

const AreaModal: React.FC<AreaModalProps> = () => {
  const DEFAULT_AREA: areaComponentType = { name: '', type: 'area' };
  const [areaComponent, setAreaComponent] = useState<areaComponentType>(DEFAULT_AREA);

  const { isVisible, handelModalState } = useModalContext();
  const [StoredPList, setStoredPList] = useState<ProcedureDto[]>([] as ProcedureDto[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getParamList = (params: string[]) => {
    return StoredPList.find((sp) => sp.storedProcedureId === areaComponent.storedProcedure?.id)
      ?.parameters?.filter((param) => params.includes(param.parameterId))
      .map((el) => el.parameterId);
  };

  const handleSelectProc = async (spId: string) => {
    if (spId != areaComponent.storedProcedure?.id) {
      // Select the stored procedure
      setAreaComponent({
        ...areaComponent,
        storedProcedure: {
          id: spId,
          name: StoredPList?.find((el) => el.storedProcedureId === spId)?.name,
          paramIdList: undefined
        }
      });
    }
  };

  const handleSelectParams = (params: string[]) => {
    setAreaComponent({
      ...areaComponent,
      storedProcedure: {
        ...areaComponent.storedProcedure,
        paramIdList: getParamList(params)
      }
    });
  };

  const handleOk = async () => {
    const AreaComponent: Omit<ComponentDto, 'componentId'> = {
      name: areaComponent.name,
      type: 2,
      storedPId: areaComponent.storedProcedure?.id,
      storedPName: areaComponent.storedProcedure?.name,
      compoParams: areaComponent.storedProcedure?.paramIdList
    };
    handelModalState('close');
    console.log('data', areaComponent);
    setAreaComponent(DEFAULT_AREA);
    console.log('areacomp', AreaComponent);
    AddComponent(AreaComponent).then((res) =>
      res ? message.success('Component added successfully') : message.error('Cannot add component')
    );
    window.location.reload();
  };
  const handleCancel = () => {
    handelModalState('close');
    setAreaComponent(DEFAULT_AREA);
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
      <Modal title="Area Form" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Form.Item label="Chart Name">
            <Input
              placeholder="Enter object name"
              type="text"
              className="title"
              value={areaComponent.name}
              onChange={(el) => setAreaComponent({ ...areaComponent, name: el.target.value.toString() })}
            />
          </Form.Item>
          <Form.Item label="Stored Procedure Name" rules={[{ required: true, message: 'Proc Name Missing' }]}>
            <Select
              onSelect={handleSelectProc}
              placeholder="choose procedure"
              style={{ width: '150px' }}
              loading={isLoading}
              value={areaComponent.storedProcedure?.id}
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
              {areaComponent.storedProcedure?.id &&
                StoredPList?.find((el) => el.storedProcedureId === areaComponent.storedProcedure?.id)
                  ?.parameters?.filter((el) => el.parameterSide === 1)
                  .map((el) => <TreeSelect.TreeNode title={el.name} value={el.parameterId} key={el.parameterId} />)}
            </TreeSelect>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AreaModal;
