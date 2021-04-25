//import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
//import ContainerFirst from './ContainerFirst';
import NavBarMain from './NavBarMain';
import HomeScreen from './HomeScreen';

import React from 'react';
import {
  MemoryRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import LessonContainerGridSystem from './LessonContainerGridSystem';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Router>
                <Container className="p-3">
                    <Jumbotron>
                        <NavBarMain />
                        <h2>
                            <Switch>
                                <Route path="/lesson-grid-system">
                                    <LessonContainerGridSystem />
                                </Route>
                                <Route path="/">
                                    <HomeScreen />
                                </Route>
                            </Switch>
                        </h2>                        
                    </Jumbotron>
                </Container>
            </Router>
        </header>
    </div>
  );
}

export default App;
