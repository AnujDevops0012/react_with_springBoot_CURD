package com.ems.controller;

import com.ems.entity.Employee;
import com.ems.exceptions.ResourceNotFoundException;
import com.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @RequestMapping("/test")
    public String testMethod()
    {
        return "Working  !!!!!";
    }

    // Api for creating new employee

    @PostMapping("/employee")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee)
    {
        Employee employee1 =employeeRepository.save(employee);
        return ResponseEntity.ok(employee1);
    }

    // Api for get all employee

    @GetMapping("/employee")
    public ResponseEntity<List<Employee>> getAllEmployee(){
        List<Employee> employees = employeeRepository.findAll();
        return ResponseEntity.ok(employees);
    }
    // API for get employee by ID
    @GetMapping("/employee/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id)
    {
        Employee employee=employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("No record is available :"+id));
        return ResponseEntity.ok(employee);
    }

    //API for updating  data
    @PutMapping("/employee/{id}")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employeeDetail, @PathVariable int id)
    {
        Employee employee=employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("No record is available :"+id));
        employee.setEmailId(employeeDetail.getEmailId());
        employee.setFirstName(employeeDetail.getFirstName());
        employee.setLastName(employeeDetail.getLastName());
        Employee updatedEmp= employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmp);

    }

    // Api for delete by Id

    @DeleteMapping("/employee/{id}")
    public  String deleteById(@PathVariable int id)
    {
        employeeRepository.deleteById(id);
        return "Deleted ";
    }
}
