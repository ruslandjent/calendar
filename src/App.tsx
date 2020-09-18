import React from 'react';
import {Calendar} from './components/Calendar';
import {generateMonthMatrix} from './shared/functions/generateMonthMatrix';

export const App: React.FC = () => {
  const x = generateMonthMatrix(2020, 8);
  return <Calendar />;
};
