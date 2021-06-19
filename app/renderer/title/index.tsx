import React from 'react';
import './index.less';
import Avatar from '../assets/axton-avatar.jpg';

interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles: React.CSSProperties;
}

function Title({ text, styles }: IProps) {
  return (
    <div>
      <div style={styles} styleName="title">
        {text}
      </div>
      <img src={Avatar} style={{ width: '50px' }} />
    </div>
  );
}

export default Title;
