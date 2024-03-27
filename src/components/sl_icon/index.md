---
title: 图标组件（Icon）
mobile: false
toc: content
nav:
  title: 组件
  path: /components
---

## 导入组件
```ts
import {Icon} from "sl-react-ui";
```
## 使用示例
```ts
import {Icon} from "sl-react-ui";
const MyComponent: React.FC = () => {
  return <Icon type="icon-shangchuan1" />;
}
export default MyComponent;
```

## 全部图标

```tsx
import React, { useEffect, useState } from "react";
import {Icon} from "../../components";
import { Card } from "antd";
import { iconUrl } from "./config";
import "./index.less";
const MyComponent: React.FC = () => {
  const iconList: any = [];
  const [iconLists, setIconList] = useState([]);
  const getIconLists = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", iconUrl, true);
    xhr.onreadystatechange = async () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const content = xhr.responseText; // 获取链接内容
        const num = content.split("icon-");
        for (let i = 0; i < num.length; i++) {
          i > 0 && iconList.push("icon-" + num[i].split('" viewBox=')[0]);
          setIconList([...iconList]);
        }
      }
    };
    xhr.send();
  };
  useEffect(() => {
    getIconLists();
  }, []);

  return (
      <div className="iconLists">
        {iconLists.map((res, index: number) => {
          return (
            <div
              key={index}
              className="iconItem"
              onClick={() => {
                window.$PUBLIC.onCopy(`<Icon type="${res}" />`);
              }}
              title={res}
            >
              <div>
                <Icon type={res} />
              </div>
              <div className="iconItemText">{res}</div>
            </div>
          );
        })}
      </div>
  );
};

export default MyComponent;


```
