import logo from './logo.svg';
import './App.scss';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AccessAlarmIcon />
        <Typography component="legend">Disabled</Typography>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
