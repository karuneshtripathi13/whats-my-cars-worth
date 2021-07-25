import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar/>
          <Home/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
