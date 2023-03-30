
import React from 'react';
import { useState } from "react";
import './App.css';

import Task from './Component/Task';
import Header from './Component/Header';


function App() {
  const [task, setTask] = useState([

    {
        id:1,
        text: 'Brush',
        day: '30 March 2023 at 7:00 AM',
        reminder: true
    },
    {
        id:2,
        text: 'have tea',
        day: '30 March 2023 at 7:30 AM',
        reminder: true
    },
    {
        id:3,
        text: 'Breakfast',
        day: '30 March 2023 at 8:30 AM',
        reminder: false
    },
    {
        id:4,
        text: 'Training',
        day: '30 March 2023 at 9:00 AM',
        reminder: true
    }

])

  return (
    <div className="container">
      <Header/>
      <Task task={task}/>
    </div>
  );
  return (
    <div className="box-sizing">
      <Header/>
      <Task task={task}/>
    </div>
  )
}

export default App;
