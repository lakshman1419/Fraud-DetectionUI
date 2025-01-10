import { RouterModule, Routes } from '@angular/router';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'ViewTransaction',component: ViewTransactionComponent},
    {path:'Payment', component: PaymentComponent},   
    {path:'login', component: LoginComponent}
];
