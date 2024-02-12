import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRegFormRoutingModule } from './company-reg-form-routing.module';
import { CompanyRegFormComponent } from './company-reg-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [CompanyRegFormComponent],
  imports: [
    CommonModule,CompanyRegFormRoutingModule,FormsModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatCardModule,MatCheckboxModule,MatSelectModule,MatRadioModule,MatButtonModule
  ]
})
export class CompanyRegFormModule { }
