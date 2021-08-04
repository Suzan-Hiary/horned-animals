import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SelectedBeast from './SelectedBeast';

class HornedBeasts extends React.Component {

    constructor() {
        super();
        this.state = {
            numberOfLikes: 0,
        }
    }
    updateClick = () => {
        this.setState({
            numberOfLikes: this.state.numberOfLikes + 1
        })

    }
    openModal = () => {
        this.setState({ showModal: true });
    };
    handleClose = () => {
        this.setState({ showModal: false });
    };
    render() {
        return (
            <div class='col' >
                <Card id="card">
                    <h1 >{this.props.title}</h1>
                    <img
                        onClick={this.openModal}
                        src={this.props.image_url}
                        alt={this.props.title}
                        width='400px'
                        height="400px"

                    />


                    <div><p>{this.props.description}</p>

                        <Button onClick={() => { this.updateClick() }} > ❤️ {this.state.numberOfLikes} </Button></div>

                </Card>
                <SelectedBeast
                    description={this.props.description}
                    title={this.props.title}
                    imgsrc={this.props.image_url}
                    handleClose={this.handleClose}
                    show={this.state.showModal}
                />

            </div >
        )




    }
}

export default HornedBeasts;