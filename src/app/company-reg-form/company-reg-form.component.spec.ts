import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegFormComponent } from './company-reg-form.component';

describe('CompanyRegFormComponent', () => {
  let component: CompanyRegFormComponent;
  let fixture: ComponentFixture<CompanyRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyRegFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
