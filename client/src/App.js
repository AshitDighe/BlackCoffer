import logo from './logo.svg';
import './App.css';
import AppState from './../src/context/appstate.jsx'
import Dashboard from '../src/components/Dashboard.jsx'

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AppState>
        <Dashboard/>
      </AppState>
    </div>
  );
}

export default App;
