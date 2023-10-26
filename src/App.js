import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Skilltest from './Components/skilltessec/Skilltest';

function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <div className="appbody">
    <Sidebar/>
    <Skilltest/>
    </div>

    </div>
  );
}

export default App;
