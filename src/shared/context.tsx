import React, {SetStateAction} from 'react';

export interface IContext {
  month: number;
  year: number;
  setMonth: React.Dispatch<SetStateAction<number>>;
  setYear: React.Dispatch<SetStateAction<number>>;
}

export const Context = React.createContext<IContext>({} as IContext);
