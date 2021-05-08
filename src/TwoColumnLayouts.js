import React from 'react';
import { useRouteMatch } from "react-router-dom";

function TwoColumnLayouts() {

    let match = useRouteMatch();
    
    return (
        <div>
            <h5>
                match.path value: {`${match.path}`}
            </h5>
            {/* Row with two equal columns */}
            <div class="row">
                <div class="col-md-6">Column left</div>
                <div class="col-md-6">Column right</div>
            </div>
            
            {/* Row with two columns divided in 1:2 ratio */}
            <div class="row">
                <div class="col-md-4">Column left</div>
                <div class="col-md-8">Column right</div>
            </div>
            
            {/* Row with two columns divided in 1:3 ratio */}
            <div class="row">
                <div class="col-md-3">Column left</div>
                <div class="col-md-9">Column right</div>
            </div>
        </div>
    );        

}

export default TwoColumnLayouts;