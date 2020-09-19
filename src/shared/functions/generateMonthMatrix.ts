import {addDays, startOfWeek, getDate} from 'date-fns';

export type MonthMatrixCell = {
  date: Date;
  day: string;
};

export type MonthMatrix = MonthMatrixCell[][];

export const generateMonthMatrix = (year: number, month: number): MonthMatrix => {
  const weekStartsOn = 1;
  const matrixColumns = 7;
  const matrixRows = 5;
  const date = new Date(year, month);

  const startDate = startOfWeek(date, {weekStartsOn});
  const totalDays = matrixColumns * matrixRows;

  const matrix = Array.from({length: totalDays})
    .map((_, idx) => addDays(startDate, idx))
    .map((date): MonthMatrixCell => ({date, day: getDate(date).toString()}))
    .reduce((acc, _, idx, dates) => {
      const isEndOfWeekDay = idx % matrixColumns === 0;
      const nextWeek = dates.slice(idx, idx + matrixColumns);

      return isEndOfWeekDay ? [...acc, nextWeek] : acc;
    }, [] as MonthMatrix);

  return matrix;
};
