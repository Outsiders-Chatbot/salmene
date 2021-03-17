import React from "react";
import { Typography } from 'antd';
import Icon from '@ant-design/icons';
import { RobotOutlined } from '@ant-design/icons';
import Chatbot from './Chatbot/Chatbot';
import './App.css';
const { Title } = Typography;



function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      
        <Title level={2} ><RobotOutlined  style={{ fontSize: '16px', color: '#08c' }} />&nbsp;Flash-Learning&nbsp;<Icon type="robot" />
        <RobotOutlined  style={{ fontSize: '16px', color: '#08c' }} /></Title>
        
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       
        <Chatbot />


      </div>
    </div>
  );
}

export default App;
