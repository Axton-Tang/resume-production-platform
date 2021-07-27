const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    base: {
      avatar: '',
      username: '',
      area: '',
      school: '',
      major: '',
      degree: '',
      hometown: '',
      onSchoolTime: {
        beginTime: '',
        endTime: '',
      },
    },
    contact: {
      phone: '',
      email: '',
      github: '',
      juejin: '',
    },
    work: {
      job: '',
      city: '',
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
