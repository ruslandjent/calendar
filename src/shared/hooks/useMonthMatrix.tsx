import {useState, useEffect} from 'react';
import {generateMonthMatrix, MonthMatrix} from '../functions/generateMonthMatrix';

export const useMonthMatrix = (year: number, month: number): MonthMatrix[] => {
  const [matrix, setMatrix] = useState<MonthMatrix>(generateMonthMatrix(year, month));

  useEffect(() => setMatrix(generateMonthMatrix(year, month)), [year, month]);

  return [matrix];
};
