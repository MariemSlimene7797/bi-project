import React from 'react';
import InputParameter from './InputParameter';
export default interface StoredProcedure {
  Name: string;
  List: Array<InputParameter>;
}
