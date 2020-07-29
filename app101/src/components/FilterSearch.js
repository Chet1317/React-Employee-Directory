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
          <option value="Name">Name</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone Number</option>
          <option value="Position">Position</option>
        </select>
      </div>
    )
}

export default FilterSearch