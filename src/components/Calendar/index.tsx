import React, {useState} from 'react';
import {getMonth, getYear} from 'date-fns';

import {Header} from './components/Header';
import {Table} from './components/Table';
import {MonthMatrix} from '../../shared/functions/generateMonthMatrix';
import {useMonthMatrix} from '../../shared/hooks/useMonthMatrix';
import {Context} from '../../shared/context';

export const Calendar: React.FC = () => {
  const now = Date.now();

  const [month, setMonth] = useState<number>(getMonth(now));
  const [year, setYear] = useState<number>(getYear(now));
  const [matrix] = useState<MonthMatrix>(useMonthMatrix(year, month));

  const providerValue = {
    matrix,
    month,
    year,
    setMonth,
    setYear,
  };

  const classNames = {
    calendar: 'calendar',
    wrapper: 'calendar__wrapper',
  };

  return (
    <div className={classNames.calendar}>
      <div className={classNames.wrapper}>
        <Context.Provider value={providerValue}>
          <Header />
          <Table />
        </Context.Provider>
      </div>
    </div>
  );
};
