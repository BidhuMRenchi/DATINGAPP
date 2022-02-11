import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { UserComponent } from './users/user/user.component';
import { UserhobbylistComponent } from './users/userhobbylist/userhobbylist.component';
import { UsermovielistComponent } from './users/usermovielist/usermovielist.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'userlistmovie', component:UsermovielistComponent},
  {path:'userlisthobby', component:UserhobbylistComponent},
  {path:'user', component:UserComponent},
  {path:'user/:CId', component:UserComponent},
  {path:'report', component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
