import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {

    const { _id, title, image_url, details, author, total_view, rating } = news;

    return (
        <Card className="my-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />

                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-MM-DD')}</small></p>
                </div>

                <div>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='my-2' variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}... <Link className='text-warning' to={`/news/${_id}`}>Read More</Link></>
                    }
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        readonly
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-warning' />}
                        fullSymbol={<FaStar />}
                    >
                    </Rating>
                    <span>{rating?.number}</span>
                </div>

                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;