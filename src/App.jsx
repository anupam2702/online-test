import React, { useState } from 'react';

import './App.css';
import RegisterForm from './components/registerForm';
import OnlineTestApp from './components/onlineTestApp';

function App() {
  const [route, setRoute] = useState(1)
  const changeState = (e) => setRoute(e)
  let obj = {
    1: <RegisterForm changeState={changeState} />,
    2: <OnlineTestApp />
  }
  return (

    <div >
      {
        obj[route]
      }
    </div>

  );
}

export default App;
