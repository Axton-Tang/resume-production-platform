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
        beginTime: '',
        endTime: '',
        post: '',
        department: '',
        content: '',
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
