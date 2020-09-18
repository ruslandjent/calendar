import React from 'react';

import {weekDaysTitles} from '../../../../shared/defaults';
import {newGuid} from '../../../../shared/pipes/guid';

export const TableHeader: React.FC = () => {
  const classNames = {
    tableHead: 'table__head table-head',
    tableHeadRow: 'table-head__row',
    tableHeadCell: 'table-head__cell',
  };
  return (
    <thead className={classNames.tableHead}>
      <tr className={classNames.tableHeadRow}>
        {weekDaysTitles.map(title => (
          <th className={classNames.tableHeadCell} key={newGuid()}>
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
};
