import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import FirstImg from '../../../assets/1.png';
import SecondImg from '../../../assets/2.png';
import ThirdImg from '../../../assets/3.png';

const EditorsInsight = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 my-2">
            <Col>
                <Card>
                    <Card.Img variant="top" src={FirstImg} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={SecondImg} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={ThirdImg} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default EditorsInsight;