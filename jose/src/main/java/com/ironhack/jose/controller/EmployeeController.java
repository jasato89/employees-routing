package com.ironhack.jose.controller;

import com.ironhack.jose.models.Employee;
import com.ironhack.jose.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("employee/find-all")
    @CrossOrigin
    public List<Employee> findAll() {
        return employeeService.findAll();
    }

    @GetMapping("employee/{id}")
    @CrossOrigin
    public Employee findById(@PathVariable Long id) {
        return employeeService.findById(id);
    }

    @DeleteMapping("employee/delete/{id}")
    @CrossOrigin
    public void deleteEmployee(@PathVariable  long id) {
        employeeService.deleteEmployee(id);
    }

}
