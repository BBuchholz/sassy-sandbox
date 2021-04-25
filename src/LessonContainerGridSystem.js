import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import ContainerFirst from './ContainerFirst';
import NavBarGridSystemLesson from './NavBarGridSystemLesson';

function LessonContainerGridSystem() {

    let match = useRouteMatch();

    return (
        <div class="container">
            <h1>Grid System Lesson</h1>
            <h3>
                <a 
                    href='https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php'
                >[working from here]</a></h3>
            <NavBarGridSystemLesson />
            <h5>
                Current match.path value (for debugging): {`${match.path}`}
            </h5>
            <Switch>
                <Route path={`${match.path}/container-first`}>
                    <ContainerFirst />
                </Route>
                <Route path={`${match.path}/container-second`}>
                    <h1>Not yet implemented</h1>
                </Route>
            </Switch>
        </div>
    );        

}

export default LessonContainerGridSystem;