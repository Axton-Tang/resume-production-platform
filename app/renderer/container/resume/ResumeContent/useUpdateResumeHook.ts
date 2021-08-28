import { useSelector, useDispatch } from 'react-redux';
import { AdapterExperienceType } from './UseForm/WrapperExperience/adapter';

function useUpdateResumeHook() {
  const updatePersonalHook = useUpdatePersonalHook();
  const updateContactHook = useUpdateContactHook();
  const updateWorkHook = useUpdateWorkHook();
  const updateWorkExperienceHook = useUpdateWorkExperienceHook();
  return <T>(stateKey: string, stateValue: T) => {
    const keys = stateKey.split('/') || [];
    if (keys[0]) {
      if (keys[0] === 'base') {
        updatePersonalHook(keys[1], stateValue);
      }
      if (keys[0] === 'contact') {
        updateContactHook(keys[1], stateValue);
      }
      if (keys[0] === 'work') {
        updateWorkHook(keys[1], stateValue);
      }
      if (keys[0] === 'workExperience') {
        updateWorkExperienceHook(keys[0], stateValue);
      }
    }
  };
}

function useUpdatePersonalHook() {
  const dispatch = useDispatch();
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  return <T>(stateKey: string, stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'base',
        values: {
          ...base,
          [stateKey]: stateValue,
        },
      },
    });
  };
}

function useUpdateContactHook() {
  const dispatch = useDispatch();
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);
  return <T>(stateKey: string, stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'contact',
        values: {
          ...contact,
          [stateKey]: stateValue,
        },
      },
    });
  };
}

function useUpdateWorkHook() {
  const dispatch = useDispatch();
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  return <T>(stateKey: string, stateValue: T) => {
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: 'work',
        values: {
          ...work,
          [stateKey]: stateValue,
        },
      },
    });
  };
}

function useUpdateWorkExperienceHook() {
  const dispatch = useDispatch();
  return <T>(stateKey: string, stateValue: T) => {
    let newList = (stateValue as any)?.map((s: AdapterExperienceType) => {
      return {
        ...s,
        department: s?.title,
      };
    });
    dispatch({
      type: 'resumeModel/setStore',
      payload: {
        key: stateKey,
        values: newList,
      },
    });
  };
}

export default useUpdateResumeHook;
