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
        beginTime: '',
        endTime: '',
        post: '',
        department: '',
        content: '',
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
        beginTime: '',
        endTime: '',
        projectName: '',
        post: '',
        content: '',
        parseContent: ['', '', ''],
        date: 0,
      },
    ],
  },
};

export default resumeModel;
