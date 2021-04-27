import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private myClient:HttpClient) { }
  baseURL="https://cp-dev.eq.ademo.net/public/api/admin/employees"
  // baseURL="http://localhost:3000/users"
  getAllUsers(){
    return this.myClient.get(this.baseURL);
    }
  
  getUserById(id:any){
    return this.myClient.get(this.baseURL+"/"+id)
  }

  AddNewUser(user:any){
    return this.myClient.post(this.baseURL, user);
  }

  DeleteUserById(id:any,user:any){
    return this.myClient.delete(this.baseURL+"/"+id,user);
  }

}


