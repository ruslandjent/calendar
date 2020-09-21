import React from 'react';

interface ITableCellProps {
  dayStr: string;
  date: Date;
  isCurrent: boolean;
  isActive: boolean;
  isAnotherMonth: boolean;
  onClick: (number: number, shiftPressed: boolean) => void;
  disabled: boolean;
}

export const TableCell: React.FC<ITableCellProps> = ({
  dayStr,
  isCurrent,
  isAnotherMonth,
  onClick,
  date,
  isActive,
  disabled,
}) => {
  const classNames = {
    cell: 'table-body__cell',
    current: 'table-body__cell table-body__cell--current',
    active: 'table-body__cell table-body__cell--active',
    anotherMonth: 'table-body__cell table-body__cell--anotherMonth',
    disabled: 'table-body__cell table-body__cell--disabled',
  };
  const className = `${
    disabled
      ? classNames.disabled
      : isActive
      ? classNames.active
      : isCurrent
      ? classNames.current
      : isAnotherMonth
      ? classNames.anotherMonth
      : classNames.cell
  }`;
  return (
    <span className={className} onClick={e => (disabled ? null : onClick(date.valueOf(), e.shiftKey))}>
      {dayStr}
    </span>
  );
};
