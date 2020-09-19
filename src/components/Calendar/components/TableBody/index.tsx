import React, {useContext, useState} from 'react';
import {getMonth, isToday} from 'date-fns';

import {Context} from '../../../../shared/context';
import {useMonthMatrix} from '../../../../shared/hooks/useMonthMatrix';
import {TableCell} from '../TableCell';
import {useSelectedDates} from '../../../../shared/hooks/useSelectedDates';
import {getDatesRange} from '../../../../shared/functions/getDatesRange';

export const TableBody: React.FC = () => {
  const {month, year} = useContext(Context);
  const [selectedDates, setSelectedDates] = useSelectedDates();
  const [isFromDb, setIsFromDb] = useState(true);
  const matrix = useMonthMatrix(year, month);

  const classNames = {
    tBody: 'table__body table-body',
    tBodyRow: 'table-body__row',
  };

  const handleCellClick = (date: number, shiftPressed: boolean) => {
    setSelectedDates(prevDates => {
      return prevDates.some(dt => dt === date) ? prevDates.filter(dt => dt !== date) : [...prevDates, date];
    });

    if (shiftPressed && !isFromDb) {
      const datesRange = getDatesRange(date, selectedDates);
      setSelectedDates(prevDates => (datesRange ? [...prevDates, ...datesRange] : [date]));
    }

    setIsFromDb(false);
  };

  return (
    <tbody className={classNames.tBody}>
      {matrix.map((row, idx) => (
        <tr key={idx} className={classNames.tBodyRow}>
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
        </tr>
      ))}
    </tbody>
  );
};
