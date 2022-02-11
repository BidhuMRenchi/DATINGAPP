import { Injectable } from '@angular/core';
import { User } from './user';
import { Hobby } from './hobby';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[]; //all User details
  formData : User = new User(); //one User data 

  hobbies:Hobby[];
  hobbies1:Hobby[];
  formData1 : Hobby = new Hobby();
  movies:Movie[]
  formData2 : Movie = new Movie();

  constructor(private httpClient: HttpClient) { }

  bindListUser(){
    this.httpClient.get(environment.apiUrl+"/api/customer/getcustomers")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.users=response as User[];
      }
    );
  }

  //Get user by id
  getUserById(id:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/customer/"+id);
  }

  insertUser(user:User):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/customer",user);
  }

  updateUser(user:User):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/customer",user);
  }

  //get All Hobbies
  bindListHobbies(){
    this.httpClient.get(environment.apiUrl+"/api/customer/hobbies")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.hobbies=response as Hobby[];
      }
    );
  }

  //get All Movies
  bindListMovies(){
    this.httpClient.get(environment.apiUrl+"/api/customer/movies")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.movies=response as Movie[];
      }
    );
  }

  deleteUser(id : number){
    return this.httpClient.delete(environment.apiUrl+"/api/customer/"+id);
  }

  //Most Prefered Hobby
  getMPH(){
    this.httpClient.get(environment.apiUrl+"/api/customer/hobbyprefer")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.hobbies=response as Hobby[];
        console.log(this.hobbies);
      }
    );
  }

  //Having more thann one hobby
  getHGTO(){
    this.httpClient.get(environment.apiUrl+"/api/customer/hgto")
    .toPromise().then(
      response=>{
        console.log("From Service");
        console.log(response);
        this.hobbies1=response as Hobby[];
        console.log(this.hobbies1);
      }
    );
  }
}
