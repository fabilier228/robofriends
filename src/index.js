import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import { robots } from './robots'; // Make sure this file exists and contains an array of robots
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      {robots.map((robot, i) => (
        <Card
          key={robots[i].id} // unique key for each item (good practice in React)
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      ))}
    </div>
  </React.StrictMode>
);

reportWebVitals();
