import React from 'react';

import {weekDaysTitles} from '../../../../shared/defaults';
import {newGuid} from '../../../../shared/pipes/guid';

export const TableHeader: React.FC = () => {
  const classNames = {
    tableHead: 'table__head table-head',
    tableHeadRow: 'table-head__row reset-list',
    tableHeadCell: 'table-head__cell',
  };
  return (
    <div className={classNames.tableHead}>
      <ul className={classNames.tableHeadRow}>
        {weekDaysTitles.map(title => (
          <li className={classNames.tableHeadCell} key={newGuid()}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
