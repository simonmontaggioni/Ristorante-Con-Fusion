import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
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

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Comment Form</ModalHeader>
          <ModalBody>Comment body</ModalBody>
        </Modal>
        <Button outline onClick={this.toggleModal}>
          <span className='fa fa-pencil fa-lg'></span> Submit Comment
        </Button>
      </div>
    );
  }
}

function RenderComments({ comments }) {
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
        <div>
          <CommentForm></CommentForm>
        </div>
      </div>
    );
  } else return <div></div>;
}

const DishDetail = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/menu'>Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-5 m-1'>
          <RenderDish dish={props.dish} />
        </div>
        <div className='col-12 col-md-5 m-1'>
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
