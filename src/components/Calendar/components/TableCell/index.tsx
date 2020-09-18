import React from 'react';
import {MonthMatrixCell} from '../../../../shared/functions/generateMonthMatrix';

interface ITableCellProps {
  cell: MonthMatrixCell;
}

export const TableCell: React.FC<ITableCellProps> = ({cell}) => {
  const className = 'table-body__cell';
  return <td className={className}>{cell.day}</td>;
};
