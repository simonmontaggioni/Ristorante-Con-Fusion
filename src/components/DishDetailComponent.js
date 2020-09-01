import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          <Card>
            <CardImg
              top
              src={this.props.dish.image}
              alt={this.props.dish.name}
            />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className='col-md-6'></div>
      </div>
    );
  }
}

export default DishDetail;
