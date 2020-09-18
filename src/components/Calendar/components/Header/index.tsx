import React, {useContext} from 'react';
import {Context} from '../../../../shared/context';

import {Arrow} from '../../../../shared/components/Arrow';
import {monthsTitles} from '../../../../shared/defaults';

type SwitchType = 'prev' | 'next';

export const Header: React.FC = () => {
  const {year, month, setMonth, setYear} = useContext(Context);
  const dateStr = `${monthsTitles[month]} ${year}`;
  const classNames = {
    header: 'calendar__header header',
    dateStr: 'header__date',
    headerBtn: 'header__btn',
  };

  const handleMonthSwitch = (type: SwitchType) => {
    if (type === 'prev') {
      if (month === 0) {
        setYear(y => y - 1);
        setMonth(11);
      } else setMonth(m => m - 1);
    }

    if (type === 'next') {
      if (month === 11) {
        setYear(y => y + 1);
        setMonth(0);
      } else setMonth(m => m + 1);
    }
  };

  return (
    <div className={classNames.header}>
      <button type='button' className={classNames.headerBtn} onClick={() => handleMonthSwitch('prev')}>
        <Arrow direction='left' />
      </button>
      <span className={classNames.dateStr}>{dateStr}</span>
      <button type='button' className={classNames.headerBtn} onClick={() => handleMonthSwitch('next')}>
        <Arrow direction='right' />
      </button>
    </div>
  );
};
