import React, {useContext} from 'react';

import {Context} from '../../../../shared/context';
import {useMonthMatrix} from '../../../../shared/hooks/useMonthMatrix';
import {TableCell} from '../TableCell';

export const TableBody: React.FC = () => {
  const {month, year} = useContext(Context);
  const matrix = useMonthMatrix(year, month);

  const classNames = {
    tBody: 'table__body table-body',
    tBodyRow: 'table-body__row',
  };

  return (
    <tbody className={classNames.tBody}>
      {matrix.map((row, idx) => (
        <tr key={idx} className={classNames.tBodyRow}>
          {row.map(cell => (
            <TableCell key={cell.date.toString()} cell={cell} />
          ))}
        </tr>
      ))}
    </tbody>
  );
};
