import React from 'react';

import {ReactComponent as _Arrow} from '../../../assets/images/arrow.svg';

interface IArrowProps {
  direction: 'left' | 'right';
}

export const Arrow: React.FC<IArrowProps> = ({direction}) => {
  const className = `arrow ${direction === 'left' ? 'arrow--left' : 'arrow--right'}`;

  return <_Arrow className={className} width={8} height={12} />;
};
