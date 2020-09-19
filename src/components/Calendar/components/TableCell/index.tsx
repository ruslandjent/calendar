import React from 'react';

interface ITableCellProps {
  dayStr: string;
  date: Date;
  isCurrent: boolean;
  isActive: boolean;
  isAnotherMonth: boolean;
  onClick: (number: number, shiftPressed: boolean) => void;
}

export const TableCell: React.FC<ITableCellProps> = ({dayStr, isCurrent, isAnotherMonth, onClick, date, isActive}) => {
  const classNames = {
    cell: 'table-body__cell',
    current: 'table-body__cell table-body__cell--current',
    active: 'table-body__cell table-body__cell--active',
    anotherMonth: 'table-body__cell table-body__cell--anotherMonth',
  };
  const className = `${
    isActive
      ? classNames.active
      : isCurrent
      ? classNames.current
      : isAnotherMonth
      ? classNames.anotherMonth
      : classNames.cell
  }`;
  return (
    <td className={className} onClick={e => onClick(date.valueOf(), e.shiftKey)}>
      {dayStr}
    </td>
  );
};
