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
      companyName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [
          
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.minLength(5), 
        Validators.maxLength(254),
      ]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      phone: ['', Validators.required],
      cancelRegistration: [false],
      trainingDate: ['', Validators.required],
      jobFunction: ['', Validators.required],
      dietaryRequirement: ['', Validators.required],
      expectations: ['']
    });
  }

  trainingDate: Training[] = [
    {value: 'd-1', viewValue: '07/02/2023'},
    {value: 'd-2', viewValue: '08/02/2023'},
    {value: 'd-1', viewValue: '09/02/2023'},
  ];

  jobFunctions: string[] = ['Campaign Management', 'CRM Adminitration', 'Email Deployment', 'Partner', 'Employee'];


  isInvalid(controlName: string): boolean {
    const control = this.regForm.get(controlName);
    return !!control && control.invalid && control.touched;
  }

  onSubmit() : void {
    if (this.regForm.valid) {
    } else {
      this.regForm.markAllAsTouched();
    }
  }

}
