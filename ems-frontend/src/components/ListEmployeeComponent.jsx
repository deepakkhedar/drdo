/*import React from 'react'

function ListEmployeeComponent() {
  return (
    <div>ListEmployeeComponent</div>
  )
}

export default ListEmployeeComponent*/
{/*  import React,{useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employee, setEmployee] =useState([])
    const navigator =useNavigate();

    useEffect(() => {
            listEmployees().then((response) => {
                setEmployee(response.data);
            }).catch(error =>{
        console.error(error);
    })

    },[])  */}

    
    
    /*const dummyData = [
       {
        "id":1,
        "firstname":"Deepak",
        "lastname" :"khedar",
        "email": "deepak123@gmail.com"
       },
       {
        "id":2,
        "firstname":"Anil",
        "lastname" :"mitharwal",
        "email": "anilmith123@gmail.com"
       },
       {
        "id":3,
        "firstname":"Karan",
        "lastname" :"changani",
        "email": "karanchangani@gmail.com"
       },
       {
        "id":4,
        "firstname":"Prahlad",
        "lastname" :"rathore",
        "email": "kunnu@gmail.com"
        },
        {
        "id":5,
        "firstname":"Divyanshu",
        "lastname" :"tamoli",
        "email": "divansh123@gmail.com"
       }]*/

        {/* function AddNewEmployee(){
                navigator('/add-employee')
        }
  return (
    <div className='container-fluid'>

        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={AddNewEmployee}>Add Employee</button>
        <table className='table table table-dark table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                             <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                             <td>{employee.email}</td>

                        </tr>
                    )
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent */}



import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) =>{
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>

        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                    style={{marginLeft: '10px'}}
                                >Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
