import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyRegFormComponent } from './company-reg-form.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyRegFormComponent,
  },
  
];



@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes) ],
  exports:[RouterModule]
})
export class CompanyRegFormRoutingModule { }
