import React, { Component } from 'react';
import Data from './Data.json';
import Horned from './HornedBeasts'




class Main extends Component {
    render() {
        let array = Data;
        return (

            array.map(item => {
                return  (<Horned 
                    image_url={item.image_url}
                    title={item.title}
                    description={item.description} />
                    
                    )



            })




        )
    }
}

export default Main;