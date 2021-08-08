import react from 'react';
import Form from './FORM';
import Data from './Data.json'




class Header extends react.Component{
    myArray = [];
    constructor() {
      super()
      this.myArray = Data;
    }
    
    
    render(){
        return(
            <>
                <header>
                    <h1 id="title">Horned Beasts</h1>
                    
                </header>
               
        
              
               
            </>
        )
    }
}

export default Header;