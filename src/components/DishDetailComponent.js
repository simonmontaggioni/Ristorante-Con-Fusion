import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle className='font-weight-bold text-left'>
              {dish.name}
            </CardTitle>
            <CardText className='text-left'>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(comments) {
    if (comments != null) {
      let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      return (
        <div>
          <h4 className='text-left'>Comments</h4>
          <ul className='p-0'>
            {comments.map((comment) => {
              let commentDate = new Date(comment.date);
              return (
                <li key={comment.id} className='list-unstyled mb-3'>
                  <div className='col-12 p-0 text-left'>{comment.comment}</div>
                  <div className='col-12 p-0 text-left'>
                    <span className='ml-1'>-- {comment.author},</span>
                    <span className='ml-1'>
                      {months[commentDate.getMonth()]}
                    </span>
                    <span className='ml-1'>{commentDate.getDay()},</span>
                    <span className='ml-1'>{commentDate.getFullYear()}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else return <div></div>;
  }
  render() {
    return (
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          {this.renderDish(this.props.dish)}
        </div>
        <div className='col-12 col-md-5 m-1'>
          {this.renderComments(
            this.props.dish ? this.props.dish.comments : null
          )}
        </div>
      </div>
    );
  }
}

export default DishDetail;
