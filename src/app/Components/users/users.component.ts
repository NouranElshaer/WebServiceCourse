import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private myService:UsersService) { }
  users:any;
  deleteID:any;
  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (res)=>{this.users=(Object.values(res)[0].EmployeesData)},
      // (res)=>{console.log(this.users=(res))},
      // (res)=>{console.log(Object.values(res)[0].EmployeesData)},

      (err)=>{console.log(err);}
      );
  }
  
  OpenDelete(user:any){
    this.deleteID= user.id;
    // console.log(this.deleteID);
    // this.myService.open(cont, options:{
    //   backdrop: 'static',
    //   size:'lg'
    // });
    this.myService.DeleteUserById(user.id,user).subscribe();

  }

  delete(){
    // this.myService.DeleteUserById(id)._subscribe();
  }

}
