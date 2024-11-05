import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Aside from './components/Aside';
import Dashboard from './components/pages/Dashboard'

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Dashboard />
    </div>
  );
}

export default App;
