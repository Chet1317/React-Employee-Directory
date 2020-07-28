import React from "react"

function FilterSearch(props){
    return(
        <div class="form-group">
        <label for="exampleFormControlSelect1">Filter</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Name</option>
          <option>Email</option>
          <option>Phone Number</option>
          <option>Position</option>
        </select>
      </div>
    )
}

export default FilterSearch