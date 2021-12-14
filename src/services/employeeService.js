import httpClient from "../commons/httpClient"

const getEmployees = () => {
    return httpClient.get('/employees')
} 

const postEmployee = (data) => {
        return httpClient.post("/employees", data)
}

const putEmployee = (data) => {
    return httpClient.put("/employees", data)
}

const getEmployee = (employeeid) => {
    return httpClient.get(`/employees/${employeeid}`) //diff single quote, apostrophe?
} 
const deleteEmployee = (employeeid) => {
    return httpClient.delete(`/employees/${employeeid}`)
}

export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee};