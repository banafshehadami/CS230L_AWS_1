import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <Card className="text-bg-primary mb-3">
                        <Card.Body>
                            <h5 className="card-title">Card 01</h5>
                            <hr className="my-3" />
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="card text-bg-danger mb-3">
                        <Card.Body>
                            <h5 className="card-title">Card 02</h5>
                            <hr className="my-3" />
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="card text-bg-success mb-3">
                        <Card.Body>
                            <h5 className="card-title">Card 03</h5>
                            <hr className="my-3" />
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
