import {getMonth, isToday} from 'date-fns/esm';
import React from 'react';
import {MonthMatrixCell} from '../../../../shared/functions/generateMonthMatrix';
import {TableCell} from '../TableCell';

interface ITableRowProps {
  handleCellClick: (date: number, shiftPressed: boolean) => void;
  row: MonthMatrixCell[];
  month: number;
  selectedDates: number[];
}

export const TableRow: React.FC<ITableRowProps> = ({row, handleCellClick, month, selectedDates}) => {
  const classNames = {
    tBodyRow: 'table-body__row',
  };
  return (
    <li className={classNames.tBodyRow}>
      {row.map(cell => (
        <TableCell
          key={cell.date.toString()}
          dayStr={cell.day}
          isCurrent={isToday(cell.date)}
          isAnotherMonth={month !== getMonth(cell.date)}
          date={cell.date}
          onClick={handleCellClick}
          isActive={selectedDates.some(date => date === cell.date.valueOf())}
        />
      ))}
    </li>
  );
};
