import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCartPlus } from 'react-icons/fa';
const ShowGuns = ({ gun, handleAddTocart }) => {
    const { name, img, bullet, capacity, action, price, category } = gun;
    return (
        <div className='col-lg-4 gy-4'>
            <Card className='bg-all2 ' >
                <Card.Img variant="top" src={img} className='card-img-container' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className='fw-bold'>Bullet</span>: {bullet}
                    </Card.Text>
                    <Card.Text>
                        <span className='fw-bold'>Capacity</span>: {capacity}
                    </Card.Text>
                    <Card.Text>
                        <span className='fw-bold'>Price</span>: ${price}
                    </Card.Text>
                    <Card.Text>
                        <span className='fw-bold'>Category</span>:  {category}
                    </Card.Text>
                    <Card.Text>
                        <span className='fw-bold'>Action</span>: {action}
                    </Card.Text>

                    <Button onClick={() => handleAddTocart(gun)} variant="danger"><FaCartPlus /> Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowGuns;