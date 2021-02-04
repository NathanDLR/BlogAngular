import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'loginForm', component: LoginFormComponent},
  {path: 'parent', component: ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
