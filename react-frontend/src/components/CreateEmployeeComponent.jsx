import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


function CreateEmployeeComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    const navigate = useNavigate();
   

    const saveEmployee = () => {
        const employee = { firstName, lastName, emailId };
        console.log("employee => " + JSON.stringify(employee));
        EmployeeService.createEmployee(employee)
        navigate('/');  
       
        // navigate('/');      
    }

    const changeFirstNameHolder = (event) => {
        setFirstName(event.target.value);
    }

    const changeLastNameHolder = (event) => {
        setLastName(event.target.value);
    }

    const changeEmailIdHolder = (event) => {
        setEmailId(event.target.value);
    }

    const cancel = () => {
        // Handle the cancel action as needed
        navigate('/');
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-5 offset-md-3 offset-md-4 mt-5'>
                        <h3 className='text-center '>Add Employee</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name:</label><br></br>
                                    <input
                                        width='50px'
                                        placeholder='First Name'
                                        name='firstName'
                                        className='form-contol'
                                        value={firstName}
                                        onChange={changeFirstNameHolder}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label>Last Name:</label><br></br>
                                    <input
                                        placeholder='Last Name'
                                        name='lastName'
                                        className='form-contol'
                                        value={lastName}
                                        onChange={changeLastNameHolder}
                                    />
                                </div>

                                <div className='form-group'>
                                    <label>Email:</label><br></br>
                                    <input
                                        placeholder='Email Address'
                                        name='emailId'
                                        className='form-contol'
                                        value={emailId}
                                        onChange={changeEmailIdHolder}
                                    />
                                </div>

                                <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                                <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateEmployeeComponent;
