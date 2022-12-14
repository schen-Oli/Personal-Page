import './App.css';
import Home from './HomePage/Home';
import NavBar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Contact from './Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (

    <div className="App-container">
      <Router>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
          </Switch>

        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
