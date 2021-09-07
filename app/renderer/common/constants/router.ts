// 路由路径
const ROUTER = {
  root: '/',
  resume: '/resume/:fromPath/:templateId/:templateIndex',
  template: '/template',
  templateList: '/templateList',
};
export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
  templateList: 'templateList',
};

export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://github.com/Axton-Tang/resume-production-platform',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.templateList,
    key: ROUTER_KEY.templateList,
    text: '模板',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: 'https://github.com/Axton-Tang/resume-production-platform',
    key: 'code',
    text: '源码',
  },
];
