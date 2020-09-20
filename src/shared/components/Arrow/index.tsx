import React from 'react';

import {ReactComponent as ArrowLogo} from '../../../assets/images/arrow.svg';

interface IArrowProps {
  direction: 'left' | 'right';
}

export const Arrow: React.FC<IArrowProps> = ({direction}) => {
  const className = `arrow ${direction === 'left' ? 'arrow--left' : 'arrow--right'}`;

  return <ArrowLogo className={className} width={8} height={12} />;
};
