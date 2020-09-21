import {useState, useEffect} from 'react';
import {matrixDelay} from '../defaults';
import {generateMonthMatrix, MonthMatrix} from '../functions/generateMonthMatrix';

export const useMonthMatrix = (year: number, month: number): MonthMatrix[] => {
  const [matrix, setMatrix] = useState<MonthMatrix>(generateMonthMatrix(year, month));

  useEffect(() => {
    setTimeout(() => setMatrix(generateMonthMatrix(year, month)), matrixDelay);
  }, [year, month]);

  return [matrix];
};
