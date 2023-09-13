import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate,useParams } from 'react-router-dom';


function ListEmployeeComponent() {
    // const {id} = useParams();
    const [employees, setEmployees] = useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    }, []);

    const addEmployee = () => {
        navigate('/add-employees');
    };

    const editEmployee = (id) => {
        // Handle the edit action here, e.g., by navigating to an edit page with the employeeId
        console.log(`Editing employee with ID: ${id}`);
        navigate(`/update-employees/${id}`);
    };

    const loadEmployees = () => {
        EmployeeService.getEmployees().then((res) => {
            setEmployees(res.data);
        });
    };
    const deleteEmployee = (id) => {
        // Handle the delete action here, e.g., by making an API call to delete the employee
        console.log(`Deleting employee with ID: ${id}`);
        EmployeeService.deleteEmployeeById(id);
        loadEmployees();
        // navigate(`/employees`);
    };

    return (
        <div>
            <h2 className='text-center'>Employees List</h2>
            <div>
                {/* <Link to="/add-employees">Add Employee</Link> */}
                <button className='btn btn-primary' onClick={addEmployee}>Add Employee</button> 

            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th style={{ fontSize: '12px', padding: '4px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button onClick={() => editEmployee(employee.id)} className="btn btn-info">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => deleteEmployee(employee.id)}
                                        className="btn btn-danger"
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
