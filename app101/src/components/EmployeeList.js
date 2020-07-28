import React from "react"
import EmployeeRow from "./EmployeeRow"

function EmployeeList (props){
    return(
        <div>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Position</th>
          </tr>
        </thead>
        <tbody>
        {props.employees.map( employee=><EmployeeRow {...employee} /> )}
          
         
        </tbody>
      </table>
    </div>
    )
}

export default EmployeeList