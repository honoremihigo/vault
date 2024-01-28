import logo from './Vault-Favicon.png';
// import './App.css';
// import './index.css'
import './style.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home'
function App() {
  document.title = 'vault'
  return (
    <div className="App">
       <Navbar/>
       <Home/>
    </div>
  );
}

export default App;
