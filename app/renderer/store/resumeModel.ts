const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    base: {
      avatar: '',
      username: '智能简历',
      area: '',
      school: '××× 大学',
      major: '传播学',
      degree: '本科',
      hometown: '湖南长沙',
      onSchoolTime: {
        beginTime: '2018.09',
        endTime: '2022.06',
      },
    },
    contact: {
      phone: '186××××××××',
      email: '××××××××@qq.com',
    },
    work: {
      job: '内容运营',
      city: '杭州 | 上海 | 深圳',
      cityList: [],
    },
    hobby: '',
    skill: '',
    skillList: [],
    evaluation: '',
    evaluationList: [],
    certificate: '',
    certificateList: [],
    schoolExperience: [
      {
        beginTime: '2019.09',
        endTime: '2020.09',
        post: '文艺部会长',
        department: '校团委学生会',
        content:
          '计划、组织、协调各年级学生组织的文艺和文化娱乐活动，承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
        parseContent: ['', ''],
      },
    ],
    workExperience: [
      {
        beginTime: '2021.06',
        endTime: '至今',
        post: '内容运营实习生',
        department: '×××× 公司',
        content:
          '负责在线教育类app专栏的内容撰写、审稿和更新。平均每周撰写3篇专栏文章，平均阅读量2w+统计用户专栏阅读数据并归纳用户感兴趣的话题，同时根据话题调整写作方向，阅读量成功提升20%',
        parseContent: [],
      },
    ],
    projectExperience: [
      {
        beginTime: '2019.09',
        endTime: '2020.05',
        projectName: '校园自媒体运营',
        post: '内容运营',
        content:
          '负责给校园官方微信公众号撰文，每星期平均贡献3篇图文，平均阅读量3000+.学校官方微信号一年内新增粉丝5000+ ， 增长超过20%；文章平均阅读量提升18% ， 阅读完成率提升7%',
        parseContent: ['', '', ''],
        date: 0,
      },
      {
        beginTime: '2018.10',
        endTime: '2019.5',
        projectName: '传播数据分析',
        post: '内容运营',
        content:
          '经授权获得本校公众号的运营数据，通过Google Analytics和微信公众号官方工具分析该校园公众号的运营模式和用户画像。通过得到的分析报告优化文章的文字、图片等，提升用户阅读完成度约14%',
        parseContent: ['', '', ''],
        date: 0,
      },
    ],
  },
};

export default resumeModel;
