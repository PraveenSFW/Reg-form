import { Routes } from '@angular/router';


export const routes: Routes = [

    { path: '', redirectTo: 'reg-form', pathMatch: 'full' },
    {
      path: 'reg-form',
      loadChildren: () =>
        import('./company-reg-form/company-reg-form.module').then((m) => m.CompanyRegFormModule),
    },
];
