import React from"react"

function EmployeeRow (props){
    return (
        <tr>
        <th scope="row">{props.id}</th>
          <th>{props.name}</th>
          <td>{props.email}</td>
          <td>{props.phone}</td>
          <td>{props.position}</td>
          <td>{props.location}</td>
        </tr>
    )
}

export default EmployeeRow