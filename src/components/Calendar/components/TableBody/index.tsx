import React from 'react';
import {TableCell} from '../TableCell';

export const TableBody: React.FC = () => {
  const classNames = {
    tBody: 'table__body table-body',
    tBodyRow: 'table-body__row',
  };
  return (
    <tbody className={classNames.tBody}>
      <tr className={classNames.tBodyRow}>
        <TableCell cell={{date: new Date(), day: '25'}} />
      </tr>
    </tbody>
  );
};
