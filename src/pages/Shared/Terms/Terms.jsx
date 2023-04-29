import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='my-5'>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa dolores saepe suscipit iusto eius repudiandae consequuntur iure velit perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aut! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam possimus odit beatae architecto velit consectetur debitis sit animi molestias dolorem!</p>

            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;