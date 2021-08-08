
import { Form } from 'react-bootstrap';
import React, { usestate, useRef } from 'react';
import Data from './Data.json';

class SelectSimple extends React.Component {
  

  
  render() {
    return (

      <>
        <Form className="form">

          <Form.Label>Search for the Number of Horns </Form.Label>
          <select onChange={this.props.callList }>
            <option value="0">All</option>
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="100">100</option>
          </select>
          {/* <button type='submit'  class="sub">Submit</button>  */}


        </Form>
      </>

    )
  }
}

export default SelectSimple;