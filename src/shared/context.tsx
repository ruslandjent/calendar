import React, {SetStateAction} from 'react';
import {MonthMatrix} from './functions/generateMonthMatrix';

export interface IContext {
  matrix: MonthMatrix;
  month: number;
  year: number;
  setMonth: React.Dispatch<SetStateAction<number>>;
  setYear: React.Dispatch<SetStateAction<number>>;
}

export const Context = React.createContext<IContext>({} as IContext);
