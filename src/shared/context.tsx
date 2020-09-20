import React, {SetStateAction, Dispatch} from 'react';

export interface IContext {
  month: number;
  year: number;
  setMonth: Dispatch<SetStateAction<number>>;
  setYear: Dispatch<SetStateAction<number>>;
  isLeftAnimated: boolean;
  isRightAnimated: boolean;
  setIsLeftAnimated: Dispatch<SetStateAction<boolean>>;
  setIsRightAnimated: Dispatch<SetStateAction<boolean>>;
}

export const Context = React.createContext<IContext>({} as IContext);
