import React from 'react';

import {TableBody} from '../TableBody';
import {TableHeader} from '../TableHeader';

export const Table: React.FC = () => {
  const className = 'calendar__table table';
  return (
    <table className={className}>
      <TableHeader />
      <TableBody />
    </table>
  );
};
