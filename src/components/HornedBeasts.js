import React from 'react';


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfLikes: 0,
        }
    }

    likeNumbers = () => {
        this.setState({
            numberOfLikes: this.state.numberOfLikes + 1
        })
    }
    render() {
        return (
            
                <img src={this.props.imgUrl} alt={this.props.title}  onClick={()=>{this.props.setData(this.props.imgUrl,this.props.title,this.props.description)}}></img>
                
        )}
    }
