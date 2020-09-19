import {eachDayOfInterval, Interval} from 'date-fns';

export const getDatesRange = (date: number, selectedDates: number[]): number[] | null => {
  const start = selectedDates[selectedDates.length - 1];
  const end = date;

  // strange code because of `eachDayOfInterval()`'s
  // inability to find a range between older date and newer date
  const interval: Interval = {
    start: start < end ? start : end,
    end: end > start ? end : start,
  };

  if (!start) return null;

  return eachDayOfInterval(interval).map(dt => dt.valueOf());
};
