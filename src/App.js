import './App.css';
import Mypara from './components/Mypara';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <h1>This is a test to know css styling without inline css</h1>
      <Mypara/>
    </div>
  );
}

export default App;
