import React, {useContext, useState} from 'react';

import {Context} from '../../../../shared/context';
import {useMonthMatrix} from '../../../../shared/hooks/useMonthMatrix';
import {useSelectedDates} from '../../../../shared/hooks/useSelectedDates';
import {getDatesRange} from '../../../../shared/functions/getDatesRange';
import {TableRow} from '../TableRow';

export const TableBody: React.FC = () => {
  const {month, year} = useContext(Context);
  const [selectedDates, setSelectedDates] = useSelectedDates();
  const [isFromDb, setIsFromDb] = useState(true);
  const matrix = useMonthMatrix(year, month);

  const classNames = {
    tBody: 'table__body table-body',
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
        <TableRow row={row} key={idx} handleCellClick={handleCellClick} month={month} selectedDates={selectedDates} />
      ))}
    </tbody>
  );
};
