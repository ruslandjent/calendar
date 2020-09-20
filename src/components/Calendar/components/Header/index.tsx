import React, {useContext} from 'react';
import {Context} from '../../../../shared/context';

import {Arrow} from '../../../../shared/components/Arrow';
import {animationDelay, monthsTitles} from '../../../../shared/defaults';
import {sleep} from '../../../../shared/functions/sleep';

type SwitchType = 'prev' | 'next';

export const Header: React.FC = () => {
  const {
    year,
    month,
    setMonth,
    setYear,
    setIsLeftAnimated,
    setIsRightAnimated,
    isLeftAnimated,
    isRightAnimated,
  } = useContext(Context);

  const handleMonthSwitch = async (type: SwitchType) => {
    if (isLeftAnimated || isRightAnimated) return;

    if (type === 'prev') {
      setIsLeftAnimated(true);

      if (month === 0) {
        setYear(y => y - 1);
        setMonth(11);
      } else setMonth(m => m - 1);

      await sleep(animationDelay);
      setIsLeftAnimated(false);
    }

    if (type === 'next') {
      setIsRightAnimated(true);

      if (month === 11) {
        setYear(y => y + 1);
        setMonth(0);
      } else setMonth(m => m + 1);

      await sleep(animationDelay);
      setIsRightAnimated(false);
    }
  };

  const dateStr = `${monthsTitles[month]} ${year}`;
  const classNames = {
    header: 'calendar__header header',
    dateStr: 'header__date',
    headerBtn: 'header__btn',
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
