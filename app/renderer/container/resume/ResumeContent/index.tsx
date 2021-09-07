import React, { useEffect, useState } from 'react';
import './index.less';
import { useParams } from 'react-router';
import * as UseTemplateList from './UseTemplate';
import MyScrollBox from '@src/common/components/MyScrollBox';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';

import PersonalForm from './UseForm/Personal';
import ContactFrom from './UseForm/Contact';
import WorkForm from './UseForm/Work';
import WorkExperienceForm from './UseForm/WorkExperience';
import ProjectExperienceForm from './UseForm/ProjectExperience';
import SchoolExperienceForm from './UseForm/SchoolExperience';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  let height = document.body.clientHeight;
  const routerParams = useParams<{ fromPath: string; templateId: string; templateIndex: string }>();
  const [curHeight, setCurHeight] = useState(height);
  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);

  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };

  const onClose = () => {
    setShowFormModal(false);
    setFormName('');
  };

  useEffect(() => {
    height = document.body.clientHeight;
    setCurHeight(height);
  });

  return (
    <MyScrollBox maxHeight={curHeight - HEADER_ACTION_HEIGHT}>
      {routerParams?.templateId && Number(routerParams?.templateIndex) === 0 && <UseTemplateList.TemplateOne />}
      {showFormModal && formName === RESUME_TOOLBAR_MAPS.personal && <PersonalForm onClose={onClose} />}
      {showFormModal && formName === RESUME_TOOLBAR_MAPS.contact && <ContactFrom onClose={onClose} />}
      {showFormModal && formName === RESUME_TOOLBAR_MAPS.workPrefer && <WorkForm onClose={onClose} />}
      {showFormModal && formName === RESUME_TOOLBAR_MAPS.workExperience && <WorkExperienceForm onClose={onClose} />}
      {showFormModal && formName === RESUME_TOOLBAR_MAPS.projectExperience && (
        <ProjectExperienceForm onClose={onClose} />
      )}
      {showFormModal && formName === RESUME_TOOLBAR_MAPS.schoolExperience && <SchoolExperienceForm onClose={onClose} />}
    </MyScrollBox>
  );
}
export default ResumeContent;
