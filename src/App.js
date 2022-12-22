import './App.css';
import Home from './HomePage/Home';
import NavBar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Experiences from './Experiences/Experience';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import ProjectDetail from './Projects/ProjectDetail';

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

            <Route path='/education'>
              <Education />
            </Route>

            <Route path='/contact'>
              <Contact />
            </Route>

            <Route path='/experiences'>
              <Experiences />
            </Route>

            <Route path='/projects' exact>
              <Projects />
            </Route>

            <Route path='/projects/:id'>
              <ProjectDetail />
            </Route>

            <Route exact path='*'>
              <Home />
            </Route>

          </Switch>

        </div>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
