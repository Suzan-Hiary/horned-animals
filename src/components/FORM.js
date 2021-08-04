
import { Form } from 'react-bootstrap';
import React, { usestate, useRef } from 'react';

class SelectSimple extends React.Component {
  
render() {
  return (

    <>
      <Form class="form">

        <Form.Label>Search for the Horned</Form.Label>
        <select >
          <option value={"0"}>All</option>
          <option value="1" >1</option>
          <option value="2" >2</option>
          <option value="3" >3</option>
          <option value="100"> 3</option>
        </select>
        {/* <button type='submit' onClick={handlefilter} class="sub">Submit</button> */}


      </Form>
    </>

  )
}
}

export default SelectSimple;