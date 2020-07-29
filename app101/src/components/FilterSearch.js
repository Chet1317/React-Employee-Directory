import React from "react"

function FilterSearch(props){

  function changeOrder( event ){
    const { name, value }= event.target
    props.updateFilter( value )
}
    return(
        <div class="form-group">
        <label for="InputPassword">Filter</label>
        <select onChange={changeOrder} value={props.filt} class="form-control">
        <option value="id">id</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="phone">Phone Number</option>
          <option value="position">Position</option>
          <option value="location">Location</option>
        </select>
      </div>
    )
}

export default FilterSearch