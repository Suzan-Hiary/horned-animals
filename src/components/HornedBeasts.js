import React from 'react';
import Card from 'react-bootstrap/Card'

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
    render() {
        return (
            <div class='col' >
                <Card  id="card">
                    <h1 >{this.props.title}</h1>
                    <img
                      
                        src={this.props.image_url}
                        alt={this.props.title}
                        width='400px'
                        height="400px"
                        
                    />
                   
                     onClick={() => { this.updateClick() }}
                     <img src='./download.png'></img>
                    <p>{this.props.description}</p>
                    <p>{this.state.numberOfLikes}</p>
                    </Card>

            </div >
        )




    }
}

export default HornedBeasts;