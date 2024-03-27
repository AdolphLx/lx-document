export { default as UploadOss } from "./sl_upload_oss";
export type {
  UploadProps,
  UploadFile,
  ResultsLists,
  FileTypes,
} from "./sl_upload_oss";

export { default as Icon } from "./sl_icon";
export type { IconProps } from "./sl_icon";
import { iconUrl } from "./sl_icon/config";
export const iconConfig = iconUrl;
