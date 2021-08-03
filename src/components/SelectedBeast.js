import React from 'react';
import { Button, Modal } from 'react-bootstrap'

class SelectedBeast extends React.Component  {
    render() {
        console.log(this.props.image_url);
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header>
                        <Modal.Title>{this.props.title} </Modal.Title>
                    </Modal.Header>
                    <img  src={this.props.image_url} />
                    <Modal.Body> {this.props.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default SelectedBeast;