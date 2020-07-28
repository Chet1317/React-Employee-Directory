import React from "react"

function FilterSearch(props){

  function searchDifferentFilter( event ){
    const { name, value }= event.target
   

    props.updateFilter( value )
}

    return(
        <div class="form-group">
        <label for="exampleFormControlSelect1">Filter</label>
        <select onSearch={searchDifferentFilter} value={props.filter} class="form-control" id="exampleFormControlSelect1">
        <option value="id">id</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="phone">Phone Number</option>
          <option value="position">Position</option>
        </select>
      </div>
    )
}

export default FilterSearch