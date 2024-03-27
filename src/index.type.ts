

const FileTypes = {
    doc: "application/msword",
    ppt: "application/vnd.ms-powerpoint",
    xls: "application/vnd.ms-excel",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    rar: "application/x-rar-compressed",
    zip: "application/zip",
    pdf: "application/pdf",
    mp4: "video/mp4",
    mp3: "audio/mpeg",
    jpg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    bmp: "image/bmp",
    tiff: "image/tiff",
    psd: "image/vnd.adobe.photoshop",
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    json: "application/json",
    txt: "text/plain",
    md: "text/markdown",
    xml: "application/xml",
    csv: "text/csv",
    rtf: "application/rtf",
} as const;
type UValues = (typeof FileTypes)[keyof typeof FileTypes];
type UKeys = keyof typeof FileTypes;
export { FileTypes };

export interface UploadFile {
    status: "exception" | "normal" | "success" | "active" | undefined;
    id: any;
    firstUrl?: string | undefined;
    name: string;
    size: number;
    type: UValues;
    url: string | any;
    path?: string;
    uploadPercent?: number;
    rejectType?: string;
    file?: any;
}

export interface UploadProps {
    /**
     * @function fail 失败回调函数，返回上传失败文件的file对象
     */
    fail(err: any): unknown;
    /**
     * @function success 成功上传回调函数，返回{imgLists,fileLists}两个集合
     */
    success(results: ResultsLists): unknown;
    /**
     * @name quantity 最大上传数量
     */
    quantity?: number;
    /**
     * @name type 上传文件类型
     */
    type?: Array<UKeys>;
    /**
     * @name size 文件大小（单位bk）
     */
    size?: number;
    /**
     * @name multiple 是否可多种类型文件
     */
    multiple?: string;
    /**
     * @name imgLists 图片/视频集合
     */
    imgLists?: Array<UploadFile> | undefined;
    /**
     * @name fileLists 文件集合
     */
    fileLists?: Array<UploadFile> | undefined;
}

export interface loadingProps {
    tip: string;
}

export interface ResultsLists {
    imgLists: Array<UploadFile>;
    fileLists: Array<UploadFile>;
}
