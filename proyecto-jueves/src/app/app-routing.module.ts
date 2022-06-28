import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeViewComponent } from './components/employee-view/employee-view/employee-view.component';
import { HomeComponent } from './components/home/home/home.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: ListComponent},
  {path: 'employees/:id', component: EmployeeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
