import React, { useEffect, useState } from 'react';
import { getAllparameters, parametersType } from '../../Services/ParameterService';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TestparamProps {}

const Testparams: React.FC<TestparamProps> = () => {
  const [Parameters, setParameters] = useState<parametersType[]>();
  useEffect(() => {
    // Get API Data
    getAllparameters('AD410B06-3432-4C97-8DA4-9DAD57972884')
      .then((res) => {
        setParameters(res);
        console.log('Parameters', res);
      })
      .catch((err) => console.log('cant get parameter data', err));
  }, []);

  return (
    <>
      {Parameters ? (
        Parameters.map((el, key) => <div key={key}>{el.parameterId}</div>)
      ) : (
        <div> param data is Loading please wait ...</div>
      )}
    </>
  );
};

export default Testparams;
