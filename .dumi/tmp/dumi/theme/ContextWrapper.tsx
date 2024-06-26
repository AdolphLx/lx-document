// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { SiteContext } from '/Users/liuxiang/Desktop/简爱项目/lx-document/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';
import * as entryMemberExports from '/Users/liuxiang/Desktop/简爱项目/lx-document/src/apiTypes.tsx';

const entryExports = {
  
  ...entryMemberExports,
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(false);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"lx-document","version":"1.0.0","repository":{"type":"git","url":"https://e.coding.net/liuxiangproject/liuxaing/lx-document.git","branch":"main"}},
      historyType: "browser",
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      hostname: undefined,
      themeConfig: {"logo":"https://simlove-sdk.oss-cn-shenzhen.aliyuncs.com/sl-web-sdk/img/logo.png","title":"sl-react-ui","footer":"simplove-简爱官方文档","prefersColor":{"default":"light","switch":true},"nprogress":true,"lastUpdated":true,"socialLinks":{"github":"https://liuxiangproject.coding.net/p/liuxaing/d/lx-document/git"},"rtl":true},
      _2_level_nav_available: true,
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}
