import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/auth.guard';
import { AuthInterceptor } from './shared/auth.interceptor';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserhobbylistComponent } from './users/userhobbylist/userhobbylist.component';
import { UsermovielistComponent } from './users/usermovielist/usermovielist.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserhobbylistComponent,
    UsermovielistComponent,
    LoginComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
