import React from"react"

function EmployeeRow (props){
    return (
        <tr>
        <th scope="col">{props.id}</th>
          <th scope="row">{props.Name}</th>
          <td>{props.Email}</td>
          <td>{props.Phone}</td>
          <td>{props.Position}</td>
        </tr>
    )
}

export default EmployeeRow