import React, {useContext} from 'react';

import {Context} from '../../../../shared/context';
import {useMonthMatrix} from '../../../../shared/hooks/useMonthMatrix';
import {MonthMatrix} from '../MonthMatrix';

export const TableBody: React.FC = () => {
  const {month, year} = useContext(Context);
  const [currentMonthMatrix, prevMonthMatrix, nextMonthMatrix] = useMonthMatrix(year, month);

  const classNames = {
    tBody: 'table__body table-body',
  };

  return (
    <tbody className={classNames.tBody}>
      <MonthMatrix matrix={currentMonthMatrix} />
    </tbody>
  );
};
