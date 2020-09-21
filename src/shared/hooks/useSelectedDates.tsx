import {useState, useEffect} from 'react';

export const useSelectedDates = () => {
  const [selectedDates, setSelectedDates] = useState<number[]>([]);

  useEffect(() => {
    const db = JSON.parse(localStorage.getItem('selectedDates') || '[]') as number[];
    setSelectedDates(db);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedDates', JSON.stringify(selectedDates));
  }, [selectedDates]);

  return [selectedDates, setSelectedDates] as const;
};
