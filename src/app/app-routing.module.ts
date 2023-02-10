import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { GetalltrashnotesComponent } from './components/getalltrashnotes/getalltrashnotes.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

  // {
  //   path: 'customers',
  //   loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  // },
  // {
  //   path: 'orders',
  //   loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  // },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home', component: DashboardComponent,
    children: [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },

      {
        path: 'notes', component: GetallnotesComponent,
      },
      {
        path: 'trash', component: GetalltrashnotesComponent,
      }
    ]
  },

  // { path: 'user', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  // { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },

  // { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
