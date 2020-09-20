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
  const [isInitialClick, setIsInitialClick] = useState(true);
  const disabledDates: number[] = matrix
    .flatMap(row => row.filter(cell => cell.disabled))
    .map(item => item.date.valueOf());

  const handleCellClick = (date: number, shiftPressed: boolean) => {
    setSelectedDates(prevDates => {
      return prevDates.some(dt => dt === date) ? prevDates.filter(dt => dt !== date) : [...prevDates, date];
    });

    if (shiftPressed && !isInitialClick) {
      const datesRange = getDatesRange(date, selectedDates)?.filter(dt =>
        disabledDates.every(disabledDate => disabledDate !== dt),
      );
      setSelectedDates(prevDates => (datesRange ? [...prevDates, ...datesRange] : [date]));
    }

    setIsInitialClick(false);
  };

  return (
    <>
      {matrix.map((row, idx) => (
        <TableRow row={row} key={idx} handleCellClick={handleCellClick} month={month} selectedDates={selectedDates} />
      ))}
    </>
  );
};
