import './App.css';
import NavBar from './components/navBar/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//views
import Home from './pages/home';

function App() {
  return (
        <Home/>
  );
}

export default App;
