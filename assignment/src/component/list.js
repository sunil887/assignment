import React, { Component } from 'react';

class ListEmployeeDetail extends Component {

    constructor(props){
        this.props = props
    }

    state = {  }
    render() { 
        return <table>
                <tr>
                    <th>id</th>
                    <th>Employee Name</th>
                    <th>Employee Name</th>
                    <th>Employee Salary</th>
                    <th>Employee age</th>
                    <th>Profile Image</th>
                </tr>
                {this.props.map(employee =>{
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.emloyee_name}</td>
                            <td>{employee.employee_salary}</td>
                            <td>{employee.employee_age}</td>
                            <td>{employee.profile_image}</td>
                        </tr>
                    })
                }
        </table>
    }
}
 
export default ListEmployeeDetail;