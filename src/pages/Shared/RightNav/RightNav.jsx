import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='my-2 w-100' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub /> Login with Github</Button>

            <div className='my-4'>
                <h4>Find Us On</h4>

                <ListGroup>
                    <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>

            <div className='mt-3'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;