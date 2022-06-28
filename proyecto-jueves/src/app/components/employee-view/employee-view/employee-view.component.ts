import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  id! : number;
  employee!: Employee;

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.employeeService.getById(this.id).subscribe(
      (data) => {
        this.employee = data;
      }
    );

  }

}
