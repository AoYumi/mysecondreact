import React, { useState, useEffect } from "react"
import employeeService from "./services/employeeService";
import { Link } from "react-router-dom"





const Employee = () =>{
    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
            refreshEmployee();
        }, []
    )

    const refreshEmployee = async () =>{
       const data =  await employeeService.getEmployees()
                .then(res => {
                    console.log("TEST", res.data)
                    setEmployees(res.data)
                })
                .catch(e => {
                    console.error("AH SAREADO", e);
                }) //promise
    }

    const deleteEmployee = (employeeid) => {
        let YN = window.confirm("Are you sure you want to delete?");

        if(YN){
            employeeService.deleteEmployee(employeeid)
            .then(
                response =>{
                    console.log("succesfully deleted employee")
                    refreshEmployee();
                }
            )
            .catch(
                error =>{
                    console.error("something went wrong", error);
                }
            )
        }
    }

    return(
        
        <div>
            <header className="Emp-header">
            <h1>List of Employees</h1>
            <div className="container">
                <table className="table table-hover table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Namae wa</td>
                            <td>Doko de?</td>
                            <td>Departmento</td>
                            <td>Akshan</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            employees.map(
                                (employee, key) => (
                                    <tr className="table-light" key={key}> 
                                        <td>{employee.name}</td>
                                        <td>{employee.location}</td>
                                        <td>{employee.department}</td>
                                        <td>     
                                        <div>
                                        <Link className="btn btn-primary" to={`/mysecondreact/edit/${employee.employeeid}`}>Update</Link>
                                        <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.employeeid)}>Delete</button>
                                        </div>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            </header>
        </div>
    )
}

export default Employee