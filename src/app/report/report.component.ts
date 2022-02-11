import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  hobby:string[];
  constructor(public userService:UserService,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getMPH();
    this.userService.getHGTO();
  }

}
