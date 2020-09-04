import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function renderDish(dish) {
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
function renderComments(comments) {
  if (comments != null) {
    return (
      <div>
        <h4 className='text-left'>Comments</h4>
        <ul className='p-0'>
          {comments.map((comment) => {
            return (
              <li key={comment.id} className='list-unstyled mb-3'>
                <div className='col-12 p-0 text-left'>{comment.comment}</div>
                <div className='col-12 p-0 text-left'>
                  <span className='ml-1'>-- {comment.author},</span>
                  <span className='ml-1'>
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    }).format(new Date(Date.parse(comment.date)))}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else return <div></div>;
}

const DishDetail = (props) => {
  return (
    <div className='row'>
      <div className='col-12 col-md-5 m-1'>{renderDish(props.dish)}</div>
      <div className='col-12 col-md-5 m-1'>
        {renderComments(props.dish ? props.dish.comments : null)}
      </div>
    </div>
  );
};

export default DishDetail;
