import React from 'react';
import { SvgProps } from 'react-native-svg';

import * as Icons from '../res';

type SvgIconProps = SvgProps & {
  name: keyof typeof Icons
  size?: number
}
function SvgIcon({
  name,
  fill = 'black',
  width: _width,
  height: _height,
  size,
  ...props
}: SvgIconProps) {
  const Comp = Icons[name];
  const width = _width ?? size;
  const height = _height ?? size;
  const sizeProps = {
    ...(width !== undefined ? { width } : {}),
    ...(height !== undefined ? { height } : {}),
  }

  return (
    <Comp
      {...props}
      fill={fill}
      {...sizeProps}
    />
  )
}

export default SvgIcon;
