import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CardEmployeeComponent } from './components/card-employee/card-employee.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar/nav-bar.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view/employee-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardEmployeeComponent,
    HomeComponent,
    NavBarComponent,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
