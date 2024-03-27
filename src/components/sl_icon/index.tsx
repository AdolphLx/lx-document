/* 用于菜单的自定义图标 */
import React from 'react';
import { createFromIconfontCN } from '../../../node_modules/@ant-design/icons';
import { iconUrl } from './config';

const IconFont = createFromIconfontCN({
  scriptUrl: iconUrl,
});

interface IconProps {
  type: string;
}

function Icon(props: IconProps): JSX.Element {
  return <IconFont type={props.type}/>;
}
export type {IconProps} 
export default Icon
