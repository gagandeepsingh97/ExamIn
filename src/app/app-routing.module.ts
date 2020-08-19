import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminAddTestComponent } from './admin/admin-add-test/admin-add-test.component';


const routes: Routes = [
  // {path: '', redirectTo:'/admin-login', pathMatch:'full'},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-add-test', component: AdminAddTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
