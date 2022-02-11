import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-usermovielist',
  templateUrl: './usermovielist.component.html',
  styleUrls: ['./usermovielist.component.scss']
})
export class UsermovielistComponent implements OnInit {

  //declare varaible
  page:number=1;
  filter:string;

  constructor(
    public userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("Welcome to Life Cycle Hook");
    this.userService.bindListUser();
  }

  //Edit User
  updateUser(cId : number){
    console.log("Editing : "+cId);
    // navigate to edit form
    this.router.navigate(['user',cId])
  }

  //Delete User
  deleteUser(cId : number){
    console.log("Deleting : "+cId);
    if(confirm('Are you sure to delete this record ? ')){
      this.userService.deleteUser(cId).subscribe(
        response=>{
          this.userService.bindListUser();
        },
        error=>{
          console.log(error);
        }
      );
    }
  }
}
