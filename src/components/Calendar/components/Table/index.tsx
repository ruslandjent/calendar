import React from 'react';

import {TableBody} from '../TableBody';
import {TableHeader} from '../TableHeader';

export const Table: React.FC = () => {
  const classNames = {
    table: 'calendar__table table',
    wrapper: 'calendar__table-wrapper',
  };
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.table}>
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
};
