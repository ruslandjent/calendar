import {useState, useEffect} from 'react';
import {animationDelay} from '../defaults';
import {generateMonthMatrix, MonthMatrix} from '../functions/generateMonthMatrix';

export const useMonthMatrix = (year: number, month: number): MonthMatrix[] => {
  const [matrix, setMatrix] = useState<MonthMatrix>(generateMonthMatrix(year, month));

  useEffect(() => {
    setTimeout(() => setMatrix(generateMonthMatrix(year, month)), animationDelay / 2);
  }, [year, month]);

  return [matrix];
};
