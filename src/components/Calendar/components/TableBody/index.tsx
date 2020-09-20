import React, {useContext} from 'react';

import {Context} from '../../../../shared/context';
import {useMonthMatrix} from '../../../../shared/hooks/useMonthMatrix';
import {MonthMatrix} from '../MonthMatrix';

export const TableBody: React.FC = () => {
  const {month, year, isLeftAnimated, isRightAnimated} = useContext(Context);
  const [currentMonthMatrix] = useMonthMatrix(year, month);

  const classNames = {
    tBody: `table__body table-body reset-list ${
      isLeftAnimated ? 'table__body--animatedPrev' : isRightAnimated ? 'table__body--animatedNext' : ''
    }`,
  };

  return (
    <ul className={classNames.tBody}>
      <MonthMatrix matrix={currentMonthMatrix} />
    </ul>
  );
};
