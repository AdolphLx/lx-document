import { defineConfig } from 'dumi';
const repo = 'sl-react-ui';
export default defineConfig({
  title: repo,
  logo:
    'https://simlove-sdk.oss-cn-shenzhen.aliyuncs.com/sl-web-sdk/img/logo.png',
  outputPath: 'docs-dist',
  base: `/`,
  publicPath: `/`,
  scripts: [
    'https://simlove-sdk.oss-cn-shenzhen.aliyuncs.com/SL_WEB_SDK/@1.3.98.js',
    `SDK.install({
      baseUrl:"https://api-dev.simplelove.com.cn",//环境地址（必填）
      authToken: '', //测试可直接传入token，不传则读取缓存nplus-Token （选填）
      exclude: true, //不传登录过期会跳转至门户登录页 （选填）
      loginHref:'#/user/login', //当exclude: true时，为自定义登录页路由，不传默认#/login （选填）
      })
      $SY.Info.getToken({ username:'admin', password:'admin' }).then(res=>{
          localStorage.setItem('nplus-Token', res.access_token)
      })`
  ],
  apiParser: {},
  resolve: {
    atomDirs: [
      { type: 'components', dir: 'src/components' },
      { type: 'oms', dir: 'src/sdks' },
    ],
    entryFile: './src/apiTypes.tsx',
  },
  theme: {
    '@c-primary': '#409EFF',
  },
  themeConfig: {
    footer: 'simplove-简爱官方文档',
    socialLinks: {
      github: 'https://liuxiangproject.coding.net/p/liuxaing/d/lx-document/git',
    },
    rtl:true
  }
});
