import React from 'react';
import { Card, Button, CardTitle, CardText, Col, Row } from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Functional Component</h1>
                Functional Components are the primary tool in React to build a small, modular piece of your page.
                <dl>
                    <dt>Can use state</dt>
                    <dd>With the 'userState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                    <dt>No 'this' keyword</dt>
                    <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                    <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, functional components can perform side effect with any props or state changes.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have nested elements inside</dd>
                </dl>
                <h1>Functional Syntax versus Arrow Function</h1>
                <p><HelloWorld /></p>
                <p><HelloWorldFatArrow /></p>
            </div>
        </div>
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle tag="h5">This is my second component</CardTitle>
                    <CardText>Created this component without using a fat arrow function</CardText>
                    <Button>Go somewhere</Button>
                </Card>
            </Col>
        </Row>
    )
};

const HelloWorldFatArrow = () => {
    return (
        <div>
            <Col sm="6">
                <Card body>
                    <CardTitle tag="h5">This is my third component</CardTitle>
                    <CardText>Created this component WITH a fat arrow function</CardText>
                    <Button>Go somewhere else</Button>
                </Card>
            </Col>
        </div>
    )
}