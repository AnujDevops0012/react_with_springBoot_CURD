import axios from 'axios';

const EMPLOYEE_API_BASE_API="http://localhost:8000/api/v1";
class EmployeeService{
    
    getEmployees()
    {
        return axios.get(EMPLOYEE_API_BASE_API+"/employee");
    }

    createEmployee(employee)
    {
        
        return axios.post(EMPLOYEE_API_BASE_API+"/employee", employee);
    }
    getEmployeeById(id)
    {
        alert("get employee by ID: "+id);
        return axios.get(EMPLOYEE_API_BASE_API+"/employee/"+id);
    }

    deleteEmployeeById(id)
    {
        return axios.delete(EMPLOYEE_API_BASE_API+"/employee/"+id);
    }
}

export default new EmployeeService();