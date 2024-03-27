---
title: 上传组件（UploadOss）
mobile: false
toc: content
nav:
  title: 组件
  path: /components/sl_upload_oss
---

```tsx
import React, { useEffect, useState } from 'react';
import { UploadOss } from '../../components';
import type { UploadProps, UploadFile, ResultsLists } from "../../components";

export default function NoPowerContainer(): JSX.Element {
  const [imgUrl, setImgUrl] = useState<Array<UploadFile>>([]);
  const [fileList, setFileList] = useState<Array<UploadFile>>([]);
  const uploadProps: UploadProps = {
    quantity: 100,
    type: ['png', 'gif'],
    size: 2024,
    imgLists: imgUrl,
    fileLists: fileList,
    success: (res:ResultsLists) => {
      console.log('上传成功回调', res);
    },
    fail: err => {
      console.log('上传失败回调', err);
    },
  };

  useEffect(() => {
    const imgLists: Array<UploadFile> = [
      {
        url:
          'https://simlove-ma.oss-cn-shenzhen.aliyuncs.com/simlove/sl-web-sdk/sl-web-react/wEh33NBDi84W6z5.png',
        size: 2650,
        name: '活动规则.png',
        type: 'image/png',
        status: 'success',
        id: 0,
      },
    ];
    const fileLists: Array<UploadFile> = [
      {
        url:
          'https://simlove-ma.oss-cn-shenzhen.aliyuncs.com/simlove/sl-web-sdk/sl-web-react/wEh33NBDi84W6z5.pdf',
        size: 1024 * 1024,
        name: '活动规则.pdf',
        type: 'image/png',
        status: 'success',
        id: 0,
      },
    ];
    setImgUrl(imgLists);
    setFileList(fileLists);
  }, []);
  return (
      <div>
        <UploadOss {...uploadProps} />
      </div>
  );
}
```
