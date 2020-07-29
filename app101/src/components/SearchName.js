import React from "react"

function SearchName(props) {
    function InputChange(event) {

        const { name, value } = event.target;
        props.updateSearch(value)
    }
    return (

        <div class="form-group">
            <label for="name">Search</label>
            <input onChange={InputChange} value={props.search} class="form-control" id="name" placeholder="Name"></input>
        </div>
    )
}

export default SearchName