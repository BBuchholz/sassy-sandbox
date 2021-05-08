import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import TwoColumnLayouts from './TwoColumnLayouts';
import NavBarGridSystemLesson from './NavBarGridSystemLesson';

function LessonContainerGridSystem() {

    let match = useRouteMatch();

    return (
        <div class="container-fluid">
            <h1>Grid System Lesson <a 
                    href='https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php'
                >[here]</a>
            </h1>
            
            <h5>
                match.path value: {`${match.path}`}
            </h5>
            <NavBarGridSystemLesson />
            <Switch>
                <Route path={`${match.path}/two-column-layouts`}>
                    <TwoColumnLayouts />
                </Route>
                <Route path={`${match.path}/three-column-layouts`}>
                    <h1>Not yet implemented</h1>
                </Route>
            </Switch>
        </div>
    );        

}



export default LessonContainerGridSystem;