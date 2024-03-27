import React, { type FC } from 'react';
const returnFn=(e:any) => JSON.stringify(e);
//公共方法
export const PUBLIC_ONCOPY: FC<{
  /**
   * @description 要复制的文本内容
   * @default "默认值"
   */
  value:string;
}> = returnFn

export const PUBLIC_GETDATE: FC<{
  /**
   * @description 时间毫秒数
   * @default "默认值"
   */
  date:string;
   /**
   * @description 类型month时间单位为中文
   * @default "默认值"
   */
  type:'month' | 'text'
}> = returnFn

export const PUBLIC_DOWN: FC<{
  /**
   * @description 结束倒计时时间
   * @default "默认值"
   */
  date:string;
}> = returnFn