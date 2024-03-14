import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { RegisteredDwarves, ThemeContext } from './context';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const [participants, setParticipants] = useState([])

  const addParticipants = (participantData) => {
    setParticipants(old => [...participants, participantData])
  }
  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{theme, handleThemeToggle}}>
      <RegisteredDwarves.Provider value={{participants, addParticipants}}>
    <div className="App">
      <h2>Welcome, Stranger! Torin the OakShield invites you to join his voyage to Lonely Mountain! Please, fill this form ASAP!</h2>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/feed'>Feed</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
      </RegisteredDwarves.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
