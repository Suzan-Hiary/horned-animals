import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class SelectedBeast extends React.Component {

    render() {
        return(
        <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>   <img
            src={this.props.image_url}
            alt={this.props.title}
            
          /></Modal.Body>
        <Modal.Footer>
        {this.props.description}
        </Modal.Footer>
      </Modal>
        )
    }

}

export default SelectedBeast;