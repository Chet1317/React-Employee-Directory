import React from "react"

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
          <tr>
          <th scope="col">1</th>
            <th scope="row">Rich Froning</th>
            <td>rich@gmail.com</td>
            <td>905-999-4278</td>
            <td>Accountant</td>
          </tr>
          <tr>
          <th scope="col">2</th>
            <th scope="row">Jessica Williams</th>
            <td>j_williams@gmail.com</td>
            <td>705-289-3389</td>
            <td>Sales Representative</td>
          </tr>
          <tr>
          <th scope="col">3</th>
            <th scope="row">Bruce Wayne</th>
            <td>brucew@gmail.com</td>
            <td>999-678-4519</td>
            <td>CEO</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}

export default EmployeeList