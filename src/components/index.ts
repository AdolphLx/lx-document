import { iconUrl } from "./sl_icon/config";
export const iconConfig = iconUrl;

// 导出组件
export { default as UploadOss } from "./sl_upload_oss";
export { default as Icon } from "./sl_icon";

// 导出类型
export type {
  UploadProps,
  UploadFile,
  ResultsLists,
  FileTypes,
} from "./sl_upload_oss";
export type { IconProps } from "./sl_icon";
