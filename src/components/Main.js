import React, { Component } from 'react';
import Data from './Data.json';
import Horned from './HornedBeasts';
import Form from './FORM';
import Header from './Header';






class Main extends Component {
    constructor(){
        super();
        this.state={
            array:Data 
        }

    }
    callList =(e) => {
        
      this.setState({
       array: (e.target.value == 0 ? Data : Data.filter((item )=> item.horns == e.target.value 
    
       ))
      })
    
      }
    render() {
        
        return (
            <>
                <Form callList={this.callList}   />
                {this.state.array.map(item => {
                    return (<Horned
                        image_url={item.image_url}
                        title={item.title}
                        description={item.description} />


                    )



                })
                }

            </>

        )
    }
}

export default Main;