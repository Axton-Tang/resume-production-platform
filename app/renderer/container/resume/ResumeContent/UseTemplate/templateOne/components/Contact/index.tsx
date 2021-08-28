import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/template-one.less';

function Contact() {
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);
  return (
    <div styleName="container">
      <p styleName="title">联系方式 Contact</p>
      <ul styleName="content">
        <li>电话：{contact.phone}</li>
        <li>邮箱：{contact.email}</li>
      </ul>
    </div>
  );
}

export default Contact;
