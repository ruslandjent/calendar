import React, {useState, useEffect} from 'react';
import {generateMonthMatrix, MonthMatrix} from '../functions/generateMonthMatrix';

export const useMonthMatrix = (year: number, month: number): MonthMatrix[] => {
  const [matrix, setMatrix] = useState<MonthMatrix>(generateMonthMatrix(year, month));
  const prevMonthMatrix = generateMonthMatrix(year, month - 1);
  const nextMonthMatrix = generateMonthMatrix(year, month + 1);

  useEffect(() => setMatrix(generateMonthMatrix(year, month)), [year, month]);

  return [matrix, prevMonthMatrix, nextMonthMatrix];
};
