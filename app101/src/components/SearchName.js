import React from "react"

function SearchName(props) {
    return (
        <div>
        <div class="form-group">
            <label for="name">Search</label>
            <input type="password" class="form-control" id="name" placeholder="Name"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
}

export default SearchName