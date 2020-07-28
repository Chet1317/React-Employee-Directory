import React from"react"

function EmployeeRow (props){
    return (
        <tr>
        <th scope="row">{props.id}</th>
          <th>{props.Name}</th>
          <td>{props.Email}</td>
          <td>{props.Phone}</td>
          <td>{props.Position}</td>
        </tr>
    )
}

export default EmployeeRow