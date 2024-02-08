import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Training {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-company-reg-form',
  // standalone: true,
  // imports: [],
  templateUrl: './company-reg-form.component.html',
  styleUrl: './company-reg-form.component.css',
})
export class CompanyRegFormComponent implements OnInit {
  regForm!: FormGroup;
  jobFunction!: string;


  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.regForm = this.fb.group({
      companyName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      firstName: [
        '',
        Validators.required,
        Validators.name,
        Validators.minLength(3),
        Validators.maxLength(50),
      ],
      lastName: [
        '',
        Validators.required,
        Validators.name,
        Validators.minLength(3),
        Validators.maxLength(50),
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          Validators.minLength(5),
          Validators.maxLength(254),
        ],
      ],
      title: [
        '',
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ],
      phone: [
        '',
        Validators.required,
        Validators.maxLength(10),
      ],
      cancelRegistration: [
        '',
        Validators.required,
      ],
      trainingDate: [
        '',
        Validators.required,
      ],
      jobFunction: [
        '',
        Validators.required,
      ],
      dieatryRequirement: [
        '',
        Validators.required,
      ],
      excepectations:[
        '',
        Validators.required
      ]
    });
  }

  trainingDate: Training[] = [
    {value: 'd-1', viewValue: '07/02/2023'},
    {value: 'd-2', viewValue: '08/02/2023'},
    {value: 'd-1', viewValue: '09/02/2023'},
  ];

  jobFunctions: string[] = ['Campaign Management', 'CRM Adminitration', 'Email Deployment', 'Partner', 'Employee'];
}
