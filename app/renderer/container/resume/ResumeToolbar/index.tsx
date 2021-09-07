import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.less';
import MyScrollBox from '@common/components/MyScrollBox';
import RESUME_TOOLBAR_LIST from '@common/constants/resume';
import { onAddToolbar, onDeleteToolbar } from './utils';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';

function ResumeToolbar() {
  const dispatch = useDispatch();
  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const readingLocalData = useSelector((state: any) => state.globalModel.readingLocalData);
  const resumeToolbarKeys = useSelector((state: any) => state.templateModel.resumeToolbarKeys);

  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length) {
      const _addToolbarList: TSResume.SliderItem[] = [];
      const _unAddToolbarList: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((s: TSResume.SliderItem) => {
        if (readingLocalData) {
          if (resumeToolbarKeys.includes(s.key)) {
            _addToolbarList.push(s);
          } else {
            _unAddToolbarList.push(s);
          }
        } else {
          if (s.require) {
            _addToolbarList.push(s);
          } else {
            _unAddToolbarList.push(s);
          }
        }
      });
      setAddToolbarList(_addToolbarList);
      setUnAddToolbarList(_unAddToolbarList);
      changeResumeToolbarKeys(_addToolbarList.map((s: TSResume.SliderItem) => s.key));
    }
  }, []);

  const changeResumeToolbarKeys = (moduleKeys: String[]) => {
    if (moduleKeys.length > 0) {
      dispatch({
        type: 'templateModel/setStore',
        payload: {
          key: 'resumeToolbarKeys',
          values: moduleKeys,
        },
      });
    }
  };

  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    let nextAddToolbarList = onAddToolbar(addToolbarList, moduleToolbar);
    setAddToolbarList(nextAddToolbarList);
    let nextUnAddToolbarList = onDeleteToolbar(unAddToolbarList, moduleToolbar);
    setUnAddToolbarList(nextUnAddToolbarList);
    changeResumeToolbarKeys(nextAddToolbarList.map((s: TSResume.SliderItem) => s.key));
  };

  const onUnAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    if (moduleToolbar.require) {
      return;
    }
    let nextAddToolbarList = onDeleteToolbar(addToolbarList, moduleToolbar);
    setAddToolbarList(nextAddToolbarList);
    let nextUnAddToolbarList = onAddToolbar(unAddToolbarList, moduleToolbar);
    setUnAddToolbarList(nextUnAddToolbarList);
    changeResumeToolbarKeys(nextAddToolbarList.map((s: TSResume.SliderItem) => s.key));
  };

  const height = document.body.clientHeight;
  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        {!!addToolbarList && (
          <div styleName="module">
            <div styleName="title">
              <span styleName="line" />
              已添加模块
            </div>
            <div styleName="content">
              {addToolbarList.map((toolbar: TSResume.SliderItem) => {
                return (
                  <div
                    styleName="box"
                    key={toolbar.key}
                    onClick={() => {
                      Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                        form_name: toolbar.key,
                      });
                    }}
                  >
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{toolbar.name}</div>
                        <div styleName="summary">{toolbar.summary}</div>
                      </div>
                      {toolbar.require && <div styleName="tips">必选项</div>}
                      {!toolbar.require && (
                        <div styleName="action">
                          <i styleName="edit" onClick={(e: React.MouseEvent) => {}} />
                          <i
                            styleName="delete"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation && e.stopPropagation();
                              onUnAddSliderAction(toolbar);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!!unAddToolbarList && (
          <div styleName="module">
            <div styleName="title">
              <span styleName="line" />
              未添加模块
            </div>
            <div styleName="content">
              {unAddToolbarList.map((toolbar: TSResume.SliderItem) => {
                return (
                  <div styleName="box" key={toolbar.key} onClick={() => onAddSliderAction(toolbar)}>
                    <div styleName="info">
                      <i styleName="icon" />
                      <div styleName="text">
                        <div styleName="name">{toolbar.name}</div>
                        <div styleName="summary">{toolbar.summary}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </MyScrollBox>
    </div>
  );
}
export default ResumeToolbar;
