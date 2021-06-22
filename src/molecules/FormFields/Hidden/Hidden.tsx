import React, { memo } from 'react';

import { types } from '../utils';

type HiddenProps = Omit<types.Hidden, 'type'>;

export const Hidden = memo((props: HiddenProps) => {
  return (
    <input type={types.TypeField.Hidden} readOnly tabIndex={-1} {...props} />
  );
});
