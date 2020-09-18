import {addDays, startOfWeek, differenceInCalendarWeeks, endOfMonth, startOfMonth, getDate} from 'date-fns';

export type MonthMatrixCell = {
  date: Date;
  day: string;
};

export type MonthMatrix = MonthMatrixCell[][];

export const generateMonthMatrix = (year: number, month: number): MonthMatrix => {
  const weekStartsOn = 1;
  const matrixColumnsAmount = 7;

  const date = new Date(year, month);
  const firstDay = startOfMonth(date);
  const lastDay = endOfMonth(date);

  const startDate = startOfWeek(date, {weekStartsOn});
  const matrixRows = differenceInCalendarWeeks(lastDay, firstDay, {weekStartsOn}) + 1;
  const totalDays = matrixColumnsAmount * matrixRows;

  const matrix = Array.from({length: totalDays})
    .map((_, idx) => addDays(startDate, idx))
    .map((date): MonthMatrixCell => ({date, day: getDate(date).toString()}))
    .reduce((acc, _, idx, dates) => {
      const isEndOfWeekDay = idx % matrixColumnsAmount === 0;
      const nextWeek = dates.slice(idx, idx + matrixColumnsAmount);

      return isEndOfWeekDay ? [...acc, nextWeek] : acc;
    }, [] as MonthMatrix);

  return matrix;
};
