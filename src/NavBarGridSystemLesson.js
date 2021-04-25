import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

class NavBarGridSystemLesson extends React.Component {
    
    render() {
        return(

            <div>
                <h2>
                    <ButtonToolbar className="custom-btn-toolbar">
                        <LinkContainer to="/lesson-grid-system/container-first">
                            <Button>[ContainerFirst]</Button>
                        </LinkContainer>
                        <LinkContainer to="/lesson-grid-system/container-second">
                            <Button>[ContainerSecond]</Button>
                        </LinkContainer>
                    </ButtonToolbar>
                </h2>
            </div>
        );
    }
}

export default NavBarGridSystemLesson;