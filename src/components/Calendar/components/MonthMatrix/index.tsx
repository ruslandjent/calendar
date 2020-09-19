import React, {useState, useContext} from 'react';
import {Context} from '../../../../shared/context';

import {MonthMatrix as _MonthMatrix} from '../../../../shared/functions/generateMonthMatrix';
import {getDatesRange} from '../../../../shared/functions/getDatesRange';
import {useSelectedDates} from '../../../../shared/hooks/useSelectedDates';
import {TableRow} from '../TableRow';

interface IMonthMatrix {
  matrix: _MonthMatrix;
}

export const MonthMatrix: React.FC<IMonthMatrix> = ({matrix}) => {
  const {month} = useContext(Context);
  const [selectedDates, setSelectedDates] = useSelectedDates();
  const [isFromDb, setIsFromDb] = useState(true);

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
    <>
      {matrix.map((row, idx) => (
        <TableRow row={row} key={idx} handleCellClick={handleCellClick} month={month} selectedDates={selectedDates} />
      ))}
    </>
  );
};
