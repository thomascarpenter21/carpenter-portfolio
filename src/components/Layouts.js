import React from 'react';
import Container from 'react-bootstrap/Container';

export const Layouts = (props) => (
    <Container>
        {props.children}
    </Container>
);