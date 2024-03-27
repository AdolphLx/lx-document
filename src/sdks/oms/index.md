---
title: OMS
mobile: false
toc: content
nav:
  title: SDK
  path: /sdks
---
## 请求方法
```ts
 $SY.Info.getToken()
```
## 请求参数
```ts
```

## 请求示例

```tsx
import React, { useEffect, useState } from 'react';
import { Card, Button, Typography, Input } from 'antd';
const { TextArea } = Input;
export default () => {
  const [data, setData] = useState('');
  const [fromData, setFromData] = useState('');
  const [loading, setLoading] = useState(false);

  const getToken = () => {
    const obj = new Function('return ' + fromData)();
    setLoading(true);
    $SY.Info.getToken(obj)
      .then(res => {
        setRData(res);
      })
      .catch(err => {
        setRData(err);
      });
  };
  const setRData = e => {
    setData(JSON.stringify(e, null, 2));
    setTimeout(s => {
      setLoading(false);
    }, 1000);
  };
  const onChange = e => {
    const value = e.target.value;
    setFromData(value);
  };

  return (
    <div>
      <div>
        <TextArea placeholder="请输入请求参数" allowClear onChange={onChange} />
        <Button
          type="primary"
          size="small"
          loading={loading}
          disabled={loading}
          onClick={() => {
            getToken();
          }}
        >
          发送请求
        </Button>
      </div>
      <Typography type="danger">
        <pre>{data}</pre>
      </Typography>
    </div>
  );
};
```

## 参数说明
